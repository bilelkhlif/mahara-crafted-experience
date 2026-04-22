import { currentProvider, reviews } from "@/data/mockData";
import { Star, Award, Shield, TrendingUp, CheckCircle2 } from "lucide-react";

const badges = [
  { icon: <Star className="h-5 w-5" />, name: "Top Rated", desc: "Note > 4.8 sur 50+ avis", earned: true },
  { icon: <Shield className="h-5 w-5" />, name: "Identité vérifiée", desc: "Pièce d'identité confirmée", earned: true },
  { icon: <Award className="h-5 w-5" />, name: "100+ Missions", desc: "Plus de 100 missions terminées", earned: true },
  { icon: <TrendingUp className="h-5 w-5" />, name: "Rising Star", desc: "Croissance rapide ce trimestre", earned: true },
  { icon: <CheckCircle2 className="h-5 w-5" />, name: "Réponse rapide", desc: "Répond en moins de 15 min", earned: true },
  { icon: <Award className="h-5 w-5" />, name: "Expert Platinum", desc: "500+ missions terminées", earned: false },
];

export default function ProviderReputation() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-heading font-bold">Réputation & Badges</h1>

      {/* Score */}
      <div className="bg-card rounded-xl border border-border p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="relative">
          <svg viewBox="0 0 120 120" className="w-32 h-32">
            <circle cx="60" cy="60" r="52" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
            <circle cx="60" cy="60" r="52" fill="none" stroke="hsl(var(--primary))" strokeWidth="8"
              strokeDasharray={`${(currentProvider.rating / 5) * 327} 327`}
              strokeLinecap="round" transform="rotate(-90 60 60)" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-3xl font-heading font-bold">{currentProvider.rating}</p>
              <p className="text-xs text-muted-foreground">/ 5.0</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-heading font-semibold">Score de réputation exceptionnel</h3>
          <p className="text-muted-foreground mt-1">Basé sur {currentProvider.reviews} avis et {currentProvider.completedJobs} missions terminées.</p>
          <div className="flex gap-2 mt-3">
            {[5, 4, 3, 2, 1].map((n) => (
              <div key={n} className="flex items-center gap-1 text-xs">
                <span>{n}★</span>
                <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: n === 5 ? "82%" : n === 4 ? "14%" : "4%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Badges */}
      <div>
        <h3 className="font-heading font-semibold mb-4">Badges gagnés</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {badges.map((b) => (
            <div key={b.name} className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${b.earned ? "border-primary/20 bg-primary/5" : "border-border opacity-50 grayscale"}`}>
              <div className={`p-2 rounded-lg ${b.earned ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>{b.icon}</div>
              <div>
                <p className="text-sm font-medium">{b.name}</p>
                <p className="text-xs text-muted-foreground">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-card rounded-xl border border-border p-5">
        <h3 className="font-heading font-semibold mb-4">Derniers avis</h3>
        <div className="space-y-4">
          {reviews.map((r) => (
            <div key={r.id} className="flex gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
              <img src={r.from.avatar} alt={r.from.name} className="h-10 w-10 rounded-full object-cover shrink-0" loading="lazy" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{r.from.name}</span>
                  <span className="text-xs text-secondary">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</span>
                  <span className="text-xs text-muted-foreground">{r.date}</span>
                </div>
                <p className="text-xs text-primary/70 mt-0.5">{r.service}</p>
                <p className="text-sm text-muted-foreground mt-1">{r.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}