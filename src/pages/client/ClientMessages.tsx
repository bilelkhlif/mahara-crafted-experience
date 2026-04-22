import { useState } from "react";
import { messages } from "@/data/mockData";
import { Send, Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";

const mockChat = [
  { id: 1, from: "them", text: "Bonjour ! J'ai terminé la maquette du site. Voulez-vous que je vous envoie un lien de prévisualisation ?", time: "14:22" },
  { id: 2, from: "me", text: "Oui, envoyez-le moi. J'aimerais aussi quelques modifications sur la page d'accueil.", time: "14:30" },
  { id: 3, from: "them", text: "Pas de souci ! Voici le lien : staging.mysite.tn. Quelles modifications souhaitez-vous ?", time: "14:32" },
  { id: 4, from: "me", text: "Le header est un peu trop grand, et j'aimerais ajouter une section témoignages.", time: "14:45" },
  { id: 5, from: "them", text: "Noté ! Je fais ça cet après-midi et je vous envoie la v2 ce soir. 👍", time: "14:47" },
];

export default function ClientMessages() {
  const [selected, setSelected] = useState(0);
  const [msg, setMsg] = useState("");

  return (
    <div className="h-[calc(100vh-8rem)]">
      <h1 className="text-2xl font-heading font-bold mb-4">Messages</h1>
      <div className="flex h-[calc(100%-3rem)] bg-card rounded-xl border border-border overflow-hidden">
        <div className="w-80 border-r border-border overflow-y-auto hidden md:block">
          {messages.map((m, i) => (
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
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-border flex items-center gap-3">
            <img src={messages[selected].from.avatar} alt="" className="h-9 w-9 rounded-full object-cover" loading="lazy" />
            <div>
              <p className="text-sm font-medium">{messages[selected].from.name}</p>
              <p className="text-xs text-muted-foreground">{messages[selected].from.title}</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {mockChat.map((c) => (
              <div key={c.id} className={cn("flex", c.from === "me" ? "justify-end" : "justify-start")}>
                <div className={cn(
                  "max-w-[75%] px-4 py-2.5 rounded-2xl text-sm",
                  c.from === "me" ? "bg-primary text-primary-foreground rounded-br-md" : "bg-muted rounded-bl-md"
                )}>
                  <p>{c.text}</p>
                  <p className={cn("text-[10px] mt-1", c.from === "me" ? "text-primary-foreground/60" : "text-muted-foreground")}>{c.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"><Paperclip className="h-4.5 w-4.5" /></button>
            <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Écrire un message..." className="flex-1 bg-muted rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 ring-primary/30" />
            <button className="p-2.5 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"><Send className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}