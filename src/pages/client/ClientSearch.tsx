import { useState } from "react";
import { providers, categories } from "@/data/mockData";
import { Search, MapPin, Star, CheckCircle2, SlidersHorizontal, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ClientSearch() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tout");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filtered = providers.filter((p) =>
    (query === "" || p.name.toLowerCase().includes(query.toLowerCase()) || p.title.toLowerCase().includes(query.toLowerCase())) &&
    (selectedCategory === "Tout" || p.skills.some((s) => s.toLowerCase().includes(selectedCategory.toLowerCase())))
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-bold">Trouver un prestataire</h1>
        <p className="text-muted-foreground mt-1">Explorez les meilleurs talents tunisiens.</p>
      </div>

      {/* Search bar */}
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher par nom, compétence, ou service..."
            className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl text-sm outline-none focus:ring-2 ring-primary/30"
          />
        </div>
        <button className="px-4 py-3 bg-card border border-border rounded-xl hover:bg-muted transition-colors flex items-center gap-2 text-sm">
          <SlidersHorizontal className="h-4 w-4" /> Filtres
        </button>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {["Tout", ...categories.slice(0, 6)].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "px-3 py-1.5 rounded-full text-sm font-medium border whitespace-nowrap transition-colors",
              selectedCategory === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border hover:border-primary/50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <div key={p.id} className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <div className="h-24 bg-hero-gradient relative">
              <button className="absolute top-2 right-2 p-1.5 bg-primary-foreground/20 backdrop-blur rounded-full text-primary-foreground hover:bg-primary-foreground/40 transition-colors">
                <Heart className="h-4 w-4" />
              </button>
            </div>
            <div className="px-4 pb-4 -mt-8 relative">
              <div className="relative w-fit">
                <img src={p.avatar} alt={p.name} className="h-16 w-16 rounded-xl object-cover border-3 border-card shadow" loading="lazy" />
                {p.verified && <CheckCircle2 className="absolute -bottom-1 -right-1 h-5 w-5 text-primary bg-card rounded-full" />}
              </div>
              <h3 className="font-heading font-semibold mt-2 group-hover:text-primary transition-colors">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.title}</p>
              <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />{p.location}
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {p.skills.slice(0, 3).map((s) => (
                  <span key={s} className="text-xs bg-muted px-2 py-0.5 rounded">{s}</span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                <div className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 text-secondary fill-secondary" />
                  <span className="text-sm font-medium">{p.rating}</span>
                  <span className="text-xs text-muted-foreground">({p.reviews})</span>
                </div>
                <span className="text-sm font-bold text-primary">{p.hourlyRate} DT/h</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}