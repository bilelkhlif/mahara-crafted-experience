import { orders } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { useState } from "react";

const tabs = ["Tout", "En cours", "Livrées", "Terminées", "Litiges"];

export default function ClientOrders() {
  const [tab, setTab] = useState("Tout");

  const statusMap: Record<string, string> = { "En cours": "active", "Livrées": "delivered", "Terminées": "completed", "Litiges": "disputed" };
  const filtered = tab === "Tout" ? orders : orders.filter((o) => o.status === statusMap[tab]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-heading font-bold">Mes commandes</h1>

      <div className="flex gap-1 bg-muted rounded-lg p-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn("px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
              tab === t ? "bg-card shadow-sm" : "hover:text-foreground text-muted-foreground"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((o) => (
          <div key={o.id} className="bg-card rounded-xl border border-border p-4 hover:border-primary/30 hover:shadow-sm transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <img src={o.provider.avatar} alt={o.provider.name} className="h-11 w-11 rounded-full object-cover" loading="lazy" />
                <div>
                  <h4 className="font-medium">{o.title}</h4>
                  <p className="text-sm text-muted-foreground">{o.provider.name} · {o.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={cn("text-xs px-3 py-1 rounded-full font-medium",
                  o.status === "active" && "bg-blue-100 text-blue-700",
                  o.status === "delivered" && "bg-amber-100 text-amber-700",
                  o.status === "completed" && "bg-emerald-100 text-emerald-700",
                  o.status === "disputed" && "bg-red-100 text-red-700",
                )}>
                  {o.status === "active" ? "En cours" : o.status === "delivered" ? "Livré" : o.status === "completed" ? "Terminé" : "Litige"}
                </span>
                <p className="text-lg font-heading font-bold">{o.amount} DT</p>
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              {o.status === "delivered" && (
                <>
                  <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:opacity-90">Accepter</button>
                  <button className="px-3 py-1.5 border border-border rounded-lg text-xs font-medium hover:bg-muted">Demander révision</button>
                </>
              )}
              {o.status === "active" && (
                <button className="px-3 py-1.5 border border-border rounded-lg text-xs font-medium hover:bg-muted">Voir détails</button>
              )}
              {o.status === "completed" && (
                <button className="px-3 py-1.5 border border-border rounded-lg text-xs font-medium hover:bg-muted">Laisser un avis</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}