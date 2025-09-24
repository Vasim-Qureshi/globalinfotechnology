// client-stream-handler.js
export async function handleAIQueryStreaming(userMessage, { onToken } = {}) {
  // POST to our backend stream endpoint
  const resp = await fetch("http://localhost:5000/api/ai-stream", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userMessage }),
  });

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error("AI server error: " + text);
  }

  // Read the streamed response body
  const reader = resp.body.getReader();
  const decoder = new TextDecoder("utf-8");

  let done = false;
  let assistantText = "";

  // The backend is forwarding SSE-like chunks. We'll parse heuristically:
  // look for `data: ...\n\n` pieces and extract the JSON `choices[0].delta.content` if present.
  // But many providers send text directly; this code is defensive and will append any raw text pieces.
  let buffered = "";

  while (!done) {
    const { value, done: d } = await reader.read();
    if (d) {
      done = true;
      break;
    }
    const chunk = decoder.decode(value, { stream: true });
    buffered += chunk;

    // Attempt to find lines like "data: {...}\n\n" or plain text.
    // Split on double-newline (SSE event delimiter)
    const parts = buffered.split(/\n\n/);
    // Keep the last partial piece buffered
    buffered = parts.pop();

    for (const part of parts) {
      // each part may contain multiple lines like "data: {...}\n"
      const lines = part.split(/\n/).map((l) => l.trim()).filter(Boolean);
      for (const line of lines) {
        if (line.startsWith("data:")) {
          const payload = line.replace(/^data:\s*/, "");
          if (payload === "[DONE]") {
            // done signal
            done = true;
            break;
          }
          try {
            const parsed = JSON.parse(payload);
            // OpenAI Chat Completions streaming: delta content in parsed.choices[0].delta?.content
            const token = parsed?.choices?.[0]?.delta?.content ?? "";
            if (token) {
              assistantText += token;
              if (onToken) onToken(token);
            }
          } catch (e) {
            // non-json or other provider — just append raw payload
            assistantText += payload;
            if (onToken) onToken(payload);
          }
        } else {
          // if the line is plain text, append it
          assistantText += line;
          if (onToken) onToken(line);
        }
      }
    }
  }

  // append any remaining buffered text (if any)
  if (buffered) {
    // try to parse same way
    const lines = buffered.split(/\n/).map((l) => l.trim()).filter(Boolean);
    for (const line of lines) {
      if (line.startsWith("data:")) {
        const payload = line.replace(/^data:\s*/, "");
        if (payload !== "[DONE]") {
          try {
            const parsed = JSON.parse(payload);
            const token = parsed?.choices?.[0]?.delta?.content ?? "";
            assistantText += token;
            if (onToken) onToken(token);
          } catch {
            assistantText += payload;
            if (onToken) onToken(payload);
          }
        }
      } else {
        assistantText += line;
        if (onToken) onToken(line);
      }
    }
  }

  return assistantText;
}
