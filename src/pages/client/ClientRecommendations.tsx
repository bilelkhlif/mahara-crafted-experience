import { providers } from "@/data/mockData";
import { Sparkles, Star, CheckCircle2, MapPin, ArrowRight } from "lucide-react";

const reasons = [
  "Basé sur vos recherches récentes en développement web",
  "Correspond à votre besoin en tutorat de mathématiques",
  "Artisanat local premium - similaire à vos commandes précédentes",
  "Spécialiste design recommandé pour les startups tech",
  "Experte en traduction juridique - votre domaine d'activité",
  "Consultant senior adapté à votre phase de croissance",
];

export default function ClientRecommendations() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-bold flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-secondary" /> Recommandations IA
        </h1>
        <p className="text-muted-foreground mt-1">Suggestions personnalisées basées sur votre activité et vos préférences.</p>
      </div>

      <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-5">
        <p className="text-sm">🤖 L'IA a analysé vos <strong>31 commandes passées</strong> et vos <strong>recherches récentes</strong> pour vous proposer les prestataires les plus pertinents.</p>
      </div>

      <div className="space-y-4">
        {providers.map((p, i) => (
          <div key={p.id} className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="relative shrink-0">
                  <img src={p.avatar} alt={p.name} className="h-14 w-14 rounded-xl object-cover" loading="lazy" />
                  {p.verified && <CheckCircle2 className="absolute -bottom-1 -right-1 h-5 w-5 text-primary bg-card rounded-full" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-semibold group-hover:text-primary transition-colors">{p.name}</h3>
                    <span className="text-xs bg-secondary/15 text-secondary-foreground px-2 py-0.5 rounded-full">Match {95 - i * 5}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{p.title}</p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Star className="h-3 w-3 text-secondary fill-secondary" />{p.rating} ({p.reviews} avis)</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{p.location}</span>
                  </div>
                  <p className="text-xs text-primary/70 mt-2 italic">💡 {reasons[i]}</p>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between gap-2 shrink-0">
                <p className="text-lg font-heading font-bold text-primary">{p.hourlyRate} DT/h</p>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 flex items-center gap-1.5 transition-opacity">
                  Contacter <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}