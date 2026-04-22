import { orders, messages, providers } from "@/data/mockData";
import StatCard from "@/components/dashboard/StatCard";
import { ShoppingBag, Clock, CheckCircle2, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function ClientOverview() {
  const activeOrders = orders.filter((o) => o.status === "active");
  const completedOrders = orders.filter((o) => o.status === "completed");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-heading font-bold">Bienvenue, Rania 👋</h1>
        <p className="text-muted-foreground mt-1">Gérez vos projets et trouvez les meilleurs prestataires.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Commandes actives" value={activeOrders.length} icon={<Clock className="h-5 w-5" />} />
        <StatCard label="Terminées" value={completedOrders.length} icon={<CheckCircle2 className="h-5 w-5" />} />
        <StatCard label="Total dépensé" value="4,970 DT" change="Ce mois: 1,170 DT" changeType="neutral" icon={<ShoppingBag className="h-5 w-5" />} />
        <StatCard label="Prestataires favoris" value="6" icon={<Star className="h-5 w-5" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Active orders */}
        <div className="lg:col-span-3 bg-card rounded-xl border border-border p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-heading font-semibold">Commandes en cours</h3>
            <Link to="/client/orders" className="text-sm text-primary hover:underline">Voir tout</Link>
          </div>
          <div className="space-y-3">
            {orders.filter((o) => o.status === "active" || o.status === "delivered").map((o) => (
              <div key={o.id} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/30 transition-all">
                <img src={o.provider.avatar} alt={o.provider.name} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{o.title}</p>
                  <p className="text-xs text-muted-foreground">{o.provider.name} · Échéance: {o.dueDate}</p>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  o.status === "active" ? "bg-blue-100 text-blue-700" :
                  o.status === "delivered" ? "bg-emerald-100 text-emerald-700" : "bg-muted text-muted-foreground"
                }`}>
                  {o.status === "active" ? "En cours" : o.status === "delivered" ? "Livré" : o.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="lg:col-span-2 bg-card rounded-xl border border-border p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-heading font-semibold">Messages récents</h3>
            <Link to="/client/messages" className="text-sm text-primary hover:underline">Voir tout</Link>
          </div>
          <div className="space-y-2">
            {messages.slice(0, 4).map((m) => (
              <div key={m.id} className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="relative shrink-0">
                  <img src={m.from.avatar} alt={m.from.name} className="h-9 w-9 rounded-full object-cover" loading="lazy" />
                  {m.unread && <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 bg-destructive rounded-full border-2 border-card" />}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{m.from.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{m.preview}</p>
                </div>
                <span className="text-xs text-muted-foreground shrink-0">{m.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended providers */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-heading font-semibold text-lg">Prestataires recommandés</h3>
          <Link to="/client/search" className="text-sm text-primary hover:underline">Explorer</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {providers.slice(0, 3).map((p) => (
            <Link to="/client/search" key={p.id} className="bg-card rounded-xl border border-border p-4 hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <img src={p.avatar} alt={p.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold group-hover:text-primary transition-colors truncate">{p.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{p.title}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-xs text-secondary">★ {p.rating}</span>
                <span className="text-xs text-muted-foreground">({p.reviews} avis)</span>
                <span className="ml-auto text-sm font-semibold text-primary">{p.hourlyRate} DT/h</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}