// aiRoutes.js
import { Router } from "express";
import dotenv from "dotenv";

dotenv.config();

const router = Router();
const OPENAI_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini"; // change per your account

if (!OPENAI_KEY) {
  // console.error("Missing OPENAI_API_KEY in env");
  process.exit(1);
}


router.post("/ai-stream", async (req, res) => {
  try {
    const { message, history = [] } = req.body ?? {};

    if (!message) {
      return res.status(400).json({ error: "message is required" });
    }

    // Prepare messages array for chat completions style (example)
    const messages = [
      // optional system prompt
      { role: "system", content: "You are a helpful assistant." },
      // include history if present (careful to sanitize)
      ...history.map((h) => ({ role: h.role === "user" ? "user" : "assistant", content: h.text })),
      // latest user message
      { role: "user", content: message },
    ];

    // Make request to OpenAI API with streaming enabled
    const openaiResp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        messages,
        stream: true,
        // temperature: 0.7, max_tokens: 512, // tune as you like
      }),
    });

    if (!openaiResp.ok) {
      const txt = await openaiResp.text();
      // console.error("OpenAI error:", openaiResp.status, txt);
      return res.status(500).json({ error: "AI provider error", detail: txt });
    }

    // Set headers to allow streaming to the browser
    res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");

    // Pipe the provider stream to the client, but transform slightly:
    // - OpenAI returns SSE-like "data: {...}\n\n" chunks; we forward them as they arrive.
    const reader = openaiResp.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let doneReading = false;

    while (!doneReading) {
      const { value, done } = await reader.read();
      if (done) {
        doneReading = true;
        break;
      }
      const chunk = decoder.decode(value, { stream: true });
      // Forward raw chunk to client
      // clients will parse chunks (may contain "data: ...\n\n" pieces)
      res.write(chunk);
    }

    // signal end (client may also rely on data: [DONE] chunk from provider)
    res.write("\n\n");
    res.end();
  } catch (err) {
    // console.error("Server error in /api/ai-stream:", err);
    if (!res.headersSent) res.status(500).json({ error: String(err) });
    else res.end();
  }
});

export default router;