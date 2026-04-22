import { providers } from "@/data/mockData";
import { Heart, Star, MapPin } from "lucide-react";

export default function ClientFavorites() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-heading font-bold">Mes favoris</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {providers.map((p) => (
          <div key={p.id} className="bg-card rounded-xl border border-border p-4 hover:shadow-md transition-all group">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img src={p.avatar} alt={p.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <h4 className="font-medium group-hover:text-primary transition-colors">{p.name}</h4>
                  <p className="text-xs text-muted-foreground">{p.title}</p>
                </div>
              </div>
              <button className="p-1.5 text-destructive hover:bg-destructive/10 rounded-full transition-colors">
                <Heart className="h-4 w-4 fill-current" />
              </button>
            </div>
            <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{p.location}</span>
              <span className="flex items-center gap-1"><Star className="h-3 w-3 text-secondary fill-secondary" />{p.rating}</span>
            </div>
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-border">
              <span className="text-sm font-bold text-primary">{p.hourlyRate} DT/h</span>
              <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:opacity-90">Contacter</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}