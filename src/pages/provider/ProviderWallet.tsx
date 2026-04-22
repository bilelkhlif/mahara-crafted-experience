import { earningsData, transactions } from "@/data/mockData";
import { Wallet, ArrowUpRight, ArrowDownRight, Shield, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProviderWallet() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-heading font-bold">Portefeuille</h1>

      {/* Balance card */}
      <div className="bg-hero-gradient text-primary-foreground rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <p className="text-sm opacity-80">Solde disponible</p>
        <p className="text-4xl font-heading font-bold mt-1">{earningsData.totalBalance} DT</p>
        <div className="flex gap-6 mt-6">
          <div>
            <p className="text-xs opacity-60">En séquestre</p>
            <p className="text-lg font-semibold">{earningsData.pendingEscrow} DT</p>
          </div>
          <div>
            <p className="text-xs opacity-60">Ce mois</p>
            <p className="text-lg font-semibold">{earningsData.thisMonth} DT</p>
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
            <ArrowUpRight className="h-4 w-4" /> Retirer
          </button>
          <button className="px-4 py-2 bg-primary-foreground/10 backdrop-blur rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-primary-foreground/20 transition-colors">
            <CreditCard className="h-4 w-4" /> Ajouter carte
          </button>
        </div>
      </div>

      {/* Payment methods */}
      <div className="bg-card rounded-xl border border-border p-5">
        <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
          <Shield className="h-4 w-4 text-primary" /> Moyens de paiement
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center gap-3 p-3 rounded-lg border border-primary/20 bg-primary/5">
            <div className="h-10 w-14 bg-primary/10 rounded-md flex items-center justify-center text-xs font-bold text-primary">D17</div>
            <div>
              <p className="text-sm font-medium">D17 Mobile</p>
              <p className="text-xs text-muted-foreground">****4821 · Principal</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg border border-border">
            <div className="h-10 w-14 bg-muted rounded-md flex items-center justify-center text-xs font-bold text-muted-foreground">BIAT</div>
            <div>
              <p className="text-sm font-medium">Compte bancaire BIAT</p>
              <p className="text-xs text-muted-foreground">****7293</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-5 border-b border-border"><h3 className="font-heading font-semibold">Dernières transactions</h3></div>
        <div className="divide-y divide-border">
          {transactions.slice(0, 5).map((t) => (
            <div key={t.id} className="px-5 py-3.5 flex items-center justify-between hover:bg-muted/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className={cn("h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold",
                  t.type === "credit" ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"
                )}>
                  {t.type === "credit" ? <ArrowDownRight className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.description}</p>
                  <p className="text-xs text-muted-foreground">{t.date}</p>
                </div>
              </div>
              <p className={cn("text-sm font-semibold", t.type === "credit" ? "text-emerald-600" : "text-foreground")}>
                {t.type === "credit" ? "+" : "-"}{Math.abs(t.amount)} DT
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}