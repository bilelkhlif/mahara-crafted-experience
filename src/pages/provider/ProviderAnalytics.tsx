import { analyticsData } from "@/data/mockData";
import StatCard from "@/components/dashboard/StatCard";
import MiniChart from "@/components/dashboard/MiniChart";
import { Eye, Zap, TrendingUp, Clock } from "lucide-react";

export default function ProviderAnalytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-heading font-bold">Analytiques</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Vues du profil" value={analyticsData.profileViews.toLocaleString()} change="+23% cette semaine" changeType="positive" icon={<Eye className="h-5 w-5" />} />
        <StatCard label="Taux de réponse" value={`${analyticsData.responseRate}%`} icon={<Zap className="h-5 w-5" />} />
        <StatCard label="Taux de conversion" value={`${analyticsData.conversionRate}%`} change="+5% ce mois" changeType="positive" icon={<TrendingUp className="h-5 w-5" />} />
        <StatCard label="Temps de réponse moyen" value={analyticsData.avgResponseTime} icon={<Clock className="h-5 w-5" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-heading font-semibold mb-4">Vues du profil (7 jours)</h3>
          <div className="flex items-end gap-2 h-40">
            {analyticsData.viewsHistory.map((d) => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs font-medium text-muted-foreground">{d.views}</span>
                <div
                  className="w-full bg-primary/70 rounded-t hover:bg-primary transition-colors"
                  style={{ height: `${(d.views / 100) * 100}%` }}
                />
                <span className="text-xs text-muted-foreground">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border p-5">
          <h3 className="font-heading font-semibold mb-4">Performance</h3>
          <div className="space-y-5">
            {[
              { label: "Profil complété", value: 95 },
              { label: "Taux de réponse", value: analyticsData.responseRate },
              { label: "Taux de satisfaction", value: 98 },
              { label: "Livraison à temps", value: 94 },
            ].map((m) => (
              <div key={m.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">{m.label}</span>
                  <span className="font-medium">{m.value}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all duration-700" style={{ width: `${m.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}