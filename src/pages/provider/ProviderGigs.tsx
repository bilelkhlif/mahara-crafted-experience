import { gigs } from "@/data/mockData";
import { MapPin, Clock, Users } from "lucide-react";

export default function ProviderGigs() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-bold">Missions disponibles</h1>
        <p className="text-muted-foreground mt-1">Trouvez des missions correspondant à vos compétences.</p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {["Tout", "Tutorat", "Développement Web", "Design", "Traduction"].map((cat) => (
          <button key={cat} className="px-3 py-1.5 rounded-full text-sm font-medium border border-border hover:border-primary hover:text-primary transition-colors first:bg-primary first:text-primary-foreground first:border-primary">
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {gigs.map((g) => (
          <div key={g.id} className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-pointer group">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-medium">{g.category}</span>
                  <span className="text-xs text-muted-foreground">{g.postedAt}</span>
                </div>
                <h3 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors">{g.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{g.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {g.skills.map((s) => (
                    <span key={s} className="text-xs bg-muted px-2 py-0.5 rounded">{s}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {g.postedBy.location}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {g.deadline}</span>
                  <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {g.proposals} propositions</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <p className="text-xl font-heading font-bold text-primary">{g.budget} DT</p>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  Postuler
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}