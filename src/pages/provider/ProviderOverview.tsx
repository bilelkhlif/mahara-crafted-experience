import { ArrowUpRight, TrendingUp, Clock, CheckCircle2 } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import MiniChart from "@/components/dashboard/MiniChart";
import { earningsData, calendarEvents, reviews, orders, gigs, currentProvider } from "@/data/mockData";
import { Link } from "react-router-dom";

export default function ProviderOverview() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl md:text-3xl font-heading font-bold">
          Bonjour, {currentProvider.name.split(" ")[0]} 👋
        </h1>
        <p className="text-muted-foreground mt-1">Voici un résumé de votre activité cette semaine.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Revenus ce mois" value={`${earningsData.thisMonth} DT`} change="+16.7% vs mois dernier" changeType="positive" icon={<TrendingUp className="h-5 w-5" />} />
        <StatCard label="Missions actives" value="3" change="2 en attente" changeType="neutral" icon={<Clock className="h-5 w-5" />} />
        <StatCard label="Missions terminées" value={currentProvider.completedJobs} change="+12 ce mois" changeType="positive" icon={<CheckCircle2 className="h-5 w-5" />} />
        <StatCard label="Note moyenne" value={currentProvider.rating} change={`${currentProvider.reviews} avis`} changeType="neutral" icon={<ArrowUpRight className="h-5 w-5" />} />
      </div>

      {/* Chart + upcoming */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 bg-card rounded-xl border border-border p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading font-semibold">Revenus (6 mois)</h3>
            <Link to="/provider/earnings" className="text-sm text-primary hover:underline">Voir détails</Link>
          </div>
          <div className="space-y-3">
            {earningsData.monthly.map((m) => (
              <div key={m.month} className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground w-8">{m.month}</span>
                <div className="flex-1 h-7 bg-muted rounded-md overflow-hidden">
                  <div
                    className="h-full bg-primary/80 rounded-md transition-all duration-700"
                    style={{ width: `${(m.amount / 3000) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium w-16 text-right">{m.amount} DT</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-card rounded-xl border border-border p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading font-semibold">Prochains RDV</h3>
            <Link to="/provider/calendar" className="text-sm text-primary hover:underline">Voir tout</Link>
          </div>
          <div className="space-y-3">
            {calendarEvents.slice(0, 4).map((e) => (
              <div key={e.id} className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-primary">{e.time.split(":")[0]}h</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{e.title}</p>
                  <p className="text-xs text-muted-foreground">{e.client} · {e.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent reviews + new gigs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-heading font-semibold mb-4">Derniers avis</h3>
          <div className="space-y-4">
            {reviews.slice(0, 3).map((r) => (
              <div key={r.id} className="flex gap-3">
                <img src={r.from.avatar} alt={r.from.name} className="h-9 w-9 rounded-full object-cover shrink-0" loading="lazy" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{r.from.name}</span>
                    <span className="text-xs text-secondary">{"★".repeat(r.rating)}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">{r.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading font-semibold">Nouvelles missions</h3>
            <Link to="/provider/gigs" className="text-sm text-primary hover:underline">Voir tout</Link>
          </div>
          <div className="space-y-3">
            {gigs.slice(0, 3).map((g) => (
              <div key={g.id} className="p-3 rounded-lg border border-border hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-medium">{g.title}</h4>
                  <span className="text-sm font-bold text-primary shrink-0 ml-2">{g.budget} DT</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">{g.category}</span>
                  <span className="text-xs text-muted-foreground">{g.proposals} propositions</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}