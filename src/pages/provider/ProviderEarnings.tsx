import StatCard from "@/components/dashboard/StatCard";
import { earningsData, transactions } from "@/data/mockData";
import { TrendingUp, Wallet, Clock, ArrowDownToLine } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProviderEarnings() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-heading font-bold">Revenus</h1>
        <p className="text-muted-foreground mt-1">Suivez vos gains et transactions.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Solde disponible" value={`${earningsData.totalBalance} DT`} icon={<Wallet className="h-5 w-5" />} />
        <StatCard label="Ce mois" value={`${earningsData.thisMonth} DT`} change="+16.7%" changeType="positive" icon={<TrendingUp className="h-5 w-5" />} />
        <StatCard label="En séquestre" value={`${earningsData.pendingEscrow} DT`} icon={<Clock className="h-5 w-5" />} />
        <StatCard label="Total retiré" value="8,450 DT" icon={<ArrowDownToLine className="h-5 w-5" />} />
      </div>

      {/* Earnings chart */}
      <div className="bg-card rounded-xl border border-border p-5">
        <h3 className="font-heading font-semibold mb-6">Évolution des revenus</h3>
        <div className="flex items-end gap-3 h-48">
          {earningsData.monthly.map((m, i) => (
            <div key={m.month} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs font-medium">{m.amount}</span>
              <div
                className="w-full bg-primary/80 rounded-t-md transition-all duration-700 hover:bg-primary"
                style={{ height: `${(m.amount / 3000) * 100}%`, animationDelay: `${i * 100}ms` }}
              />
              <span className="text-xs text-muted-foreground">{m.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-5 border-b border-border">
          <h3 className="font-heading font-semibold">Transactions récentes</h3>
        </div>
        <div className="divide-y divide-border">
          {transactions.map((t) => (
            <div key={t.id} className="px-5 py-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className={cn("h-9 w-9 rounded-full flex items-center justify-center",
                  t.type === "credit" ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"
                )}>
                  {t.type === "credit" ? "+" : "−"}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.description}</p>
                  <p className="text-xs text-muted-foreground">{t.date} · {t.method}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={cn("text-sm font-semibold", t.type === "credit" ? "text-emerald-600" : "text-foreground")}>
                  {t.type === "credit" ? "+" : ""}{t.amount} DT
                </p>
                <p className={cn("text-xs",
                  t.status === "completed" && "text-emerald-600",
                  t.status === "pending" && "text-secondary",
                  t.status === "escrow" && "text-blue-600"
                )}>{t.status === "completed" ? "Terminé" : t.status === "pending" ? "En attente" : "Séquestre"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}