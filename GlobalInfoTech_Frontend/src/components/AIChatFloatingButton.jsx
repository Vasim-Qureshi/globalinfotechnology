// AIChatFloatingButton.jsx (updated)
// React component with optional streaming support and pluggable handleAIQuery.

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Props:
 * - handleAIQuery?: async (message: string, { onToken?: (token) => void }) => string
 *     Optional. If provided, used to send the message and (optionally) stream tokens via onToken.
 *     If not provided, component POSTs to /api/ai and expects a JSON { reply }.
 *
 * - autoOpen?: boolean (default false)
 * - persistKey?: string localStorage key for open state (optional)
 */

const AIChatFloatingButton = ({ handleAIQuery = null, autoOpen = false, persistKey = 'ai-chat-open' }) => {
  const [open, setOpen] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(persistKey)) ?? false;
    } catch {
      return false;
    }
  });

  const [messages, setMessages] = useState(() => {
    try {
      const raw = localStorage.getItem('ai-chat-history');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(persistKey, JSON.stringify(open));
  }, [open, persistKey]);

  useEffect(() => {
    localStorage.setItem('ai-chat-history', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (messagesRef.current) messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages, open]);

  function pushMessage(role, text, opts = {}) {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    const msg = { id, role, text, ...opts };
    setMessages((m) => [...m, msg]);
    return id;
  }

  function updateMessage(id, patch) {
    setMessages((m) => m.map((it) => (it.id === id ? { ...it, ...patch } : it)));
  }

  function clearHistory() {
    setMessages([]);
    localStorage.removeItem('ai-chat-history');
  }

  // The core sendMessage now supports streaming updates via onToken
  async function sendMessage(text) {
    if (!text.trim()) return;
    setError(null);
    pushMessage('user', text);
    setInput('');

    // Create assistant placeholder that will be updated while streaming
    const placeholderId = pushMessage('assistant', '', { streaming: true });
    setLoading(true);

    try {
      if (handleAIQuery) {
        // call user-provided handler which may call onToken repeatedly
        let accumulated = '';
        await handleAIQuery(text, {
          onToken: (token) => {
            accumulated += token;
            updateMessage(placeholderId, { text: accumulated, streaming: true });
          },
        }).then((finalText) => {
          // If handler returns the final text, ensure message is finalized
          if (typeof finalText === 'string') accumulated = finalText;
          updateMessage(placeholderId, { text: accumulated, streaming: false });
        });
      } else {
        // simple non-streaming fallback: POST to /api/ai expecting { reply }

        const res = await fetch('https://globalinfotechnology-backend.vercel.app/api/ai-stream', {
          // const res = await fetch('https://globalinfotechnology-backend.vercel.app/api/ai-stream', {

          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text, history: messages }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        updateMessage(placeholderId, { text: data.reply ?? 'No reply', streaming: false });
      }
    } catch (err) {
      updateMessage(placeholderId, { text: `Error: ${err.message ?? String(err)}`, streaming: false, error: true });
      setError(err.message ?? String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {!open && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          onClick={() => setOpen(true)}
          className="w-16 h-16 rounded-full shadow-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center"
          title="Open chat"
        >
          💬
          {messages.length > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-700 bg-white rounded-full">
              {messages.length}
            </span>
          )}
        </motion.button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            className="w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col"
          >
            <div className="flex justify-between items-center p-3 border-b">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">AI</div>
                <div>
                  <div className="font-semibold text-sm">AI Assistant</div>
                  <div className="text-xs text-gray-500">Secure • Server-proxied</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button onClick={clearHistory} className="text-xs px-3 py-1 rounded-full hover:bg-gray-100">Clear</button>
                <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">✖</button>
              </div>
            </div>

            <div ref={messagesRef} className="flex-1 overflow-y-auto p-3 space-y-2 bg-gradient-to-b from-white to-gray-50">
              {messages.length === 0 && (
                <div className="text-center text-sm text-gray-500 mt-6">Hi — ask me anything. Try "Explain React hooks"</div>
              )}

              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`${m.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800'} px-3 py-2 rounded-2xl text-sm max-w-[75%] whitespace-pre-wrap`}>
                    {m.text}
                    {m.streaming && <span className="text-xs text-gray-400 ml-2">▌</span>}
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!input.trim()) return;
                sendMessage(input.trim());
              }}
              className="flex p-2 border-t gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={loading ? 'Thinking...' : 'Type a message...'}
                className="flex-1 px-3 py-2 rounded-full border text-sm"
                disabled={loading}
              />
              <button type="submit" className="px-4 py-2 rounded-full bg-indigo-600 text-white disabled:opacity-60" disabled={loading || !input.trim()}>
                {loading ? '...' : 'Send'}
              </button>
            </form>

            {error && <div className="px-3 py-2 text-xs text-red-600">{error}</div>}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AIChatFloatingButton;