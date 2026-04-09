import { useState } from "react";
import { Send } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "client" | "agent";
}

const initialMessages: Message[] = [
  { id: 1, text: "Can we add a new homepage section for spring services?", sender: "client" },
  { id: 2, text: "Absolutely. Please share text + images and we will implement it.", sender: "agent" },
  { id: 3, text: "I want to update the opening hours to mon-sat closed", sender: "client" },
  { id: 4, text: "Received. We logged this as a mock change request.", sender: "agent" },
];

const ChangeRequestsChat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed, sender: "client" },
      { id: Date.now() + 1, text: "Received. We logged this as a mock change request.", sender: "agent" },
    ]);
    setInput("");
  };

  return (
    <div className="rounded-lg border border-border bg-card p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <h3 className="font-semibold text-card-foreground mb-1">Change requests chat</h3>
      <p className="text-xs text-muted-foreground mb-4">Send us website update requests here — text changes, new sections, image swaps, and more.</p>
      <div className="space-y-3 max-h-64 overflow-y-auto pr-1 mb-4">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.sender === "agent" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-xl px-4 py-2.5 text-sm ${
                m.sender === "agent"
                  ? "bg-chat-client text-card-foreground"
                  : "bg-chat-agent text-card-foreground"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Describe the change you need..."
          className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <button
          onClick={send}
          className="rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background hover:opacity-90 transition-opacity inline-flex items-center gap-2"
        >
          Send <Send className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default ChangeRequestsChat;
