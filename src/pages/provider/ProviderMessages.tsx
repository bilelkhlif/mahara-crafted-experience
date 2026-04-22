import { useState } from "react";
import { providerMessages } from "@/data/mockData";
import { Send, Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";

const mockChat = [
  { id: 1, from: "them", text: "Super travail sur le dernier projet ! J'ai une nouvelle mission pour vous.", time: "10:32" },
  { id: 2, from: "them", text: "Il s'agit de créer un site vitrine pour mon restaurant à La Marsa. Budget de 1500 DT.", time: "10:33" },
  { id: 3, from: "me", text: "Merci beaucoup ! Je serais ravie de travailler dessus. Pouvez-vous m'envoyer un brief ?", time: "10:45" },
  { id: 4, from: "them", text: "Bien sûr, je vous l'envoie d'ici ce soir. Le délai serait de 3 semaines.", time: "10:47" },
  { id: 5, from: "me", text: "Parfait, ça me convient. J'ai hâte de commencer ! 🙌", time: "10:50" },
];

export default function ProviderMessages() {
  const [selected, setSelected] = useState(0);
  const [msg, setMsg] = useState("");

  return (
    <div className="h-[calc(100vh-8rem)]">
      <h1 className="text-2xl font-heading font-bold mb-4">Messages</h1>
      <div className="flex h-[calc(100%-3rem)] bg-card rounded-xl border border-border overflow-hidden">
        {/* List */}
        <div className="w-80 border-r border-border overflow-y-auto hidden md:block">
          {providerMessages.map((m, i) => (
            <button
              key={m.id}
              onClick={() => setSelected(i)}
              className={cn(
                "w-full flex items-start gap-3 p-4 text-left hover:bg-muted/50 transition-colors border-b border-border",
                selected === i && "bg-primary/5"
              )}
            >
              <div className="relative shrink-0">
                <img src={m.from.avatar} alt={m.from.name} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                {m.unread && <span className="absolute -top-0.5 -right-0.5 h-3 w-3 bg-destructive rounded-full border-2 border-card" />}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex justify-between">
                  <span className="text-sm font-medium truncate">{m.from.name}</span>
                  <span className="text-xs text-muted-foreground shrink-0">{m.time}</span>
                </div>
                <p className="text-xs text-muted-foreground truncate mt-0.5">{m.preview}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Chat */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-border flex items-center gap-3">
            <img src={providerMessages[selected].from.avatar} alt="" className="h-9 w-9 rounded-full object-cover" loading="lazy" />
            <div>
              <p className="text-sm font-medium">{providerMessages[selected].from.name}</p>
              <p className="text-xs text-emerald-600">En ligne</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {mockChat.map((c) => (
              <div key={c.id} className={cn("flex", c.from === "me" ? "justify-end" : "justify-start")}>
                <div className={cn(
                  "max-w-[75%] px-4 py-2.5 rounded-2xl text-sm",
                  c.from === "me"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-muted rounded-bl-md"
                )}>
                  <p>{c.text}</p>
                  <p className={cn("text-[10px] mt-1", c.from === "me" ? "text-primary-foreground/60" : "text-muted-foreground")}>{c.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground">
              <Paperclip className="h-4.5 w-4.5" />
            </button>
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Écrire un message..."
              className="flex-1 bg-muted rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 ring-primary/30"
            />
            <button className="p-2.5 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}