import { useState } from "react";
import { Bot, Send, Sparkles, FileText, Mic, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const aiFeatures = [
  { icon: <FileText className="h-5 w-5" />, title: "Optimiser mon profil", desc: "L'IA analyse et améliore votre profil pour attirer plus de clients." },
  { icon: <Target className="h-5 w-5" />, title: "Préparer un entretien", desc: "Simulez un entretien avec l'IA pour vous préparer aux questions." },
  { icon: <Mic className="h-5 w-5" />, title: "Générer une proposition", desc: "Créez une proposition personnalisée pour une mission." },
];

const mockConversation = [
  { from: "ai", text: "Bonjour Amira ! Je suis votre assistant IA Mahara. Comment puis-je vous aider aujourd'hui ?" },
  { from: "user", text: "Je voudrais préparer un entretien pour un poste de tutrice en ligne." },
  { from: "ai", text: "Excellent choix ! Voici quelques questions typiques qu'un client pourrait poser :\n\n1. **Quelle est votre méthodologie d'enseignement ?**\n2. **Comment adaptez-vous vos cours aux besoins individuels ?**\n3. **Avez-vous de l'expérience avec les élèves en difficulté ?**\n\nVoulez-vous qu'on simule l'entretien avec l'une de ces questions ?" },
  { from: "user", text: "Oui, commençons par la première question." },
  { from: "ai", text: "D'accord, je joue le rôle du client.\n\n🎭 **Client** : « Bonjour, j'aimerais savoir quelle est votre approche pédagogique. Comment structurez-vous vos cours ? »\n\nPrenez votre temps pour répondre comme si c'était un vrai entretien." },
];

export default function ProviderAI() {
  const [input, setInput] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-bold flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-secondary" /> Assistant IA
        </h1>
        <p className="text-muted-foreground mt-1">Votre coach personnel pour réussir sur Mahara.</p>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {aiFeatures.map((f) => (
          <button key={f.title} className="bg-card rounded-xl border border-border p-4 text-left hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
            <div className="p-2 rounded-lg bg-secondary/10 text-secondary w-fit group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
              {f.icon}
            </div>
            <h4 className="font-medium mt-3">{f.title}</h4>
            <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
          </button>
        ))}
      </div>

      {/* Chat */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          <span className="font-medium text-sm">Simulation d'entretien</span>
          <span className="ml-auto text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Actif</span>
        </div>
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {mockConversation.map((m, i) => (
            <div key={i} className={cn("flex", m.from === "user" ? "justify-end" : "justify-start")}>
              <div className={cn(
                "max-w-[80%] px-4 py-3 rounded-2xl text-sm whitespace-pre-line",
                m.from === "user"
                  ? "bg-primary text-primary-foreground rounded-br-md"
                  : "bg-muted rounded-bl-md"
              )}>
                {m.text}
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-border flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Répondre à l'assistant..."
            className="flex-1 bg-muted rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 ring-primary/30"
          />
          <button className="p-2.5 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}