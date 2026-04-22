import { orders, providers } from "@/data/mockData";
import { Star } from "lucide-react";
import { useState } from "react";

const pastReviews = [
  { provider: providers[4], rating: 5, comment: "Traduction impeccable et livrée en avance. Très professionnelle.", date: "2024-03-05", service: "Traduction documents légaux" },
  { provider: providers[3], rating: 4, comment: "Bon travail sur le logo, quelques itérations mais résultat satisfaisant.", date: "2024-03-01", service: "Refonte logo entreprise" },
];

export default function ClientReviews() {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const pendingReview = orders.find((o) => o.status === "completed");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-heading font-bold">Avis & Évaluations</h1>

      {/* Pending review */}
      {pendingReview && (
        <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-5">
          <h3 className="font-heading font-semibold mb-2">Évaluation en attente</h3>
          <div className="flex items-center gap-3 mb-4">
            <img src={pendingReview.provider.avatar} alt="" className="h-10 w-10 rounded-full object-cover" loading="lazy" />
            <div>
              <p className="text-sm font-medium">{pendingReview.title}</p>
              <p className="text-xs text-muted-foreground">{pendingReview.provider.name}</p>
            </div>
          </div>
          <div className="flex gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((s) => (
              <button
                key={s}
                onMouseEnter={() => setHoveredStar(s)}
                onMouseLeave={() => setHoveredStar(null)}
                className="p-0.5"
              >
                <Star className={`h-6 w-6 transition-colors ${(hoveredStar !== null ? s <= hoveredStar : false) ? "text-secondary fill-secondary" : "text-muted-foreground"}`} />
              </button>
            ))}
          </div>
          <textarea placeholder="Partagez votre expérience..." className="w-full bg-card border border-border rounded-lg p-3 text-sm outline-none focus:ring-2 ring-primary/30 resize-none h-20" />
          <button className="mt-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90">Soumettre</button>
        </div>
      )}

      {/* Past reviews */}
      <div className="bg-card rounded-xl border border-border p-5">
        <h3 className="font-heading font-semibold mb-4">Mes avis passés</h3>
        <div className="space-y-4">
          {pastReviews.map((r, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
              <img src={r.provider.avatar} alt={r.provider.name} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{r.provider.name}</span>
                  <span className="text-xs text-secondary">{"★".repeat(r.rating)}</span>
                  <span className="text-xs text-muted-foreground ml-auto">{r.date}</span>
                </div>
                <p className="text-xs text-primary/70">{r.service}</p>
                <p className="text-sm text-muted-foreground mt-1">{r.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}