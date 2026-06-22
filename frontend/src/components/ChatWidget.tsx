'use client';

import { useEffect, useRef, useState } from 'react';

type Message = { role: 'user' | 'assistant'; content: string };

function renderBold(text: string, keyPrefix: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</strong>
    ) : (
      <span key={`${keyPrefix}-${i}`}>{part}</span>
    )
  );
}

function renderFormatted(content: string) {
  const blocks = content.split(/\n\s*\n/).filter(b => b.trim());
  return blocks.map((block, bi) => {
    const lines = block.split('\n').filter(l => l.trim());
    const isList = lines.length > 0 && lines.every(l => /^[-•]\s+/.test(l.trim()));

    if (isList) {
      return (
        <ul key={bi} className="rs-chat-list">
          {lines.map((l, li) => (
            <li key={li}>{renderBold(l.trim().replace(/^[-•]\s+/, ''), `${bi}-${li}`)}</li>
          ))}
        </ul>
      );
    }

    return (
      <p key={bi} className="rs-chat-para">
        {lines.map((l, li) => (
          <span key={li}>
            {renderBold(l, `${bi}-${li}`)}
            {li < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    );
  });
}

const GREETING: Message = {
  role: 'assistant',
  content:
    "Hi! I'm the RankSpiders assistant. Ask me anything about our digital marketing services, free SEO tools, or RankSpiders Academy.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const next = [...messages, { role: 'user' as const, content: text }];
    setMessages(next);
    setInput('');
    setLoading(true);

    try {
      const history = next.slice(-10).filter(m => m !== GREETING);
      const res = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });
      if (!res.ok) throw new Error('bad response');
      const data = await res.json();
      setMessages(m => [...m, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages(m => [
        ...m,
        { role: 'assistant', content: "Sorry, I'm having trouble connecting right now. Please try again in a moment, or reach us at contact@rankspiders.com." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      {/* Floating launcher button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="rs-chat-fab"
      >
        <span className="rs-chat-fab-ring" />
        <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-spider'}`} />
      </button>

      {/* Chat panel */}
      <div className={`rs-chat-panel ${open ? 'rs-chat-panel-open' : ''}`}>
        <div className="rs-chat-header">
          <div className="rs-chat-header-info">
            <span className="rs-chat-avatar">
              <i className="fa-solid fa-spider" />
            </span>
            <div>
              <p className="rs-chat-title">RankSpiders Assistant</p>
              <p className="rs-chat-subtitle">
                <span className="rs-chat-dot" /> Online
              </p>
            </div>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close chat" className="rs-chat-close">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <div ref={scrollRef} className="rs-chat-messages">
          {messages.map((m, i) => (
            <div key={i} className={`rs-chat-bubble-row ${m.role === 'user' ? 'is-user' : ''}`}>
              <div className={`rs-chat-bubble ${m.role === 'user' ? 'rs-chat-bubble-user' : 'rs-chat-bubble-bot'}`}>
                {m.role === 'assistant' ? renderFormatted(m.content) : m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="rs-chat-bubble-row">
              <div className="rs-chat-bubble rs-chat-bubble-bot rs-chat-typing">
                <span /><span /><span />
              </div>
            </div>
          )}
        </div>

        <div className="rs-chat-input-row">
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about our services or the Academy…"
            rows={1}
            className="rs-chat-input"
          />
          <button
            onClick={send}
            disabled={loading || !input.trim()}
            aria-label="Send message"
            className="rs-chat-send"
          >
            <i className="fa-solid fa-arrow-up" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .rs-chat-fab {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.35);
          background: linear-gradient(135deg, var(--accent-color), #8832d8 60%, var(--accent-secondary-color));
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: #fff;
          font-size: 1.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 9997;
          box-shadow: 0 10px 30px rgba(82, 27, 137, 0.45);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .rs-chat-fab:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 14px 36px rgba(82, 27, 137, 0.55);
        }
        .rs-chat-fab-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2px solid rgba(82, 27, 137, 0.35);
          animation: rsChatPulse 2.2s ease-out infinite;
        }
        @keyframes rsChatPulse {
          0% { transform: scale(0.9); opacity: 0.8; }
          70% { transform: scale(1.25); opacity: 0; }
          100% { transform: scale(1.25); opacity: 0; }
        }

        .rs-chat-panel {
          position: fixed;
          bottom: 96px;
          right: 24px;
          width: 380px;
          max-width: calc(100vw - 32px);
          height: 540px;
          max-height: calc(100vh - 140px);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.45);
          box-shadow: 0 24px 64px rgba(31, 41, 55, 0.25);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 9997;
          opacity: 0;
          transform: translateY(16px) scale(0.97);
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .rs-chat-panel-open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .rs-chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 18px;
          background: linear-gradient(135deg, rgba(30, 18, 84, 0.92), rgba(136, 50, 216, 0.88));
          color: #fff;
          flex-shrink: 0;
        }
        .rs-chat-header-info { display: flex; align-items: center; gap: 12px; }
        .rs-chat-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .rs-chat-title { font-family: var(--heading-font); font-weight: 700; font-size: 0.92rem; margin: 0; }
        .rs-chat-subtitle { display: flex; align-items: center; gap: 6px; font-size: 0.72rem; color: rgba(255,255,255,0.75); margin: 2px 0 0; }
        .rs-chat-dot { width: 7px; height: 7px; border-radius: 50%; background: #10B981; display: inline-block; animation: rsChatBlink 1.6s infinite; }
        @keyframes rsChatBlink { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
        .rs-chat-close {
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.25);
          color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center;
        }

        .rs-chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .rs-chat-bubble-row { display: flex; }
        .rs-chat-bubble-row.is-user { justify-content: flex-end; }
        .rs-chat-bubble {
          max-width: 82%;
          padding: 11px 14px;
          border-radius: 16px;
          font-size: 0.86rem;
          line-height: 1.5;
        }
        .rs-chat-bubble-user { white-space: pre-wrap; }
        .rs-chat-para { margin: 0 0 8px; }
        .rs-chat-para:last-child { margin-bottom: 0; }
        .rs-chat-list { margin: 0 0 8px; padding-left: 18px; }
        .rs-chat-list:last-child { margin-bottom: 0; }
        .rs-chat-list li { margin-bottom: 4px; }
        .rs-chat-list li:last-child { margin-bottom: 0; }
        .rs-chat-bubble-bot {
          background: rgba(255, 255, 255, 0.94);
          border: 1px solid rgba(255, 255, 255, 0.7);
          color: var(--text-color, #1F2937);
          border-bottom-left-radius: 4px;
        }
        .rs-chat-bubble-user {
          background: linear-gradient(135deg, #8832d8, #6D64F5);
          color: #fff;
          border-bottom-right-radius: 4px;
        }
        .rs-chat-typing { display: flex; gap: 4px; align-items: center; padding: 14px; }
        .rs-chat-typing span {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--text-muted, #6B7280);
          animation: rsChatTyping 1s infinite ease-in-out;
        }
        .rs-chat-typing span:nth-child(2) { animation-delay: 0.15s; }
        .rs-chat-typing span:nth-child(3) { animation-delay: 0.3s; }
        @keyframes rsChatTyping { 0%, 80%, 100% { opacity: 0.3; transform: translateY(0); } 40% { opacity: 1; transform: translateY(-3px); } }

        .rs-chat-input-row {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          padding: 12px 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.45);
          background: rgba(255, 255, 255, 0.45);
          flex-shrink: 0;
        }
        .rs-chat-input {
          flex: 1;
          resize: none;
          max-height: 90px;
          padding: 10px 14px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.92);
          font-family: var(--default-font);
          font-size: 0.86rem;
          color: var(--text-color, #1F2937);
          outline: none;
        }
        .rs-chat-send {
          width: 38px; height: 38px; flex-shrink: 0;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, #8832d8, #6D64F5);
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
        }
        .rs-chat-send:disabled { opacity: 0.45; cursor: not-allowed; }

        @media (max-width: 480px) {
          .rs-chat-panel { right: 16px; bottom: 90px; }
          .rs-chat-fab { right: 16px; bottom: 16px; }
        }
      `}</style>
    </>
  );
}
