import { currentProvider } from "@/data/mockData";
import { MapPin, Star, CheckCircle2, Edit, Camera } from "lucide-react";

export default function ProviderProfile() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-heading font-bold">Mon Profil</h1>

      {/* Header */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="h-32 bg-hero-gradient relative">
          <button className="absolute bottom-3 right-3 p-2 bg-primary-foreground/20 backdrop-blur rounded-lg text-primary-foreground hover:bg-primary-foreground/30 transition-colors">
            <Camera className="h-4 w-4" />
          </button>
        </div>
        <div className="px-6 pb-6">
          <div className="flex flex-col md:flex-row md:items-end gap-4 -mt-12">
            <div className="relative">
              <img src={currentProvider.avatar} alt={currentProvider.name} className="h-24 w-24 rounded-xl object-cover border-4 border-card shadow-lg" />
              {currentProvider.verified && (
                <CheckCircle2 className="absolute -bottom-1 -right-1 h-6 w-6 text-primary bg-card rounded-full" />
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-heading font-bold">{currentProvider.name}</h2>
              <p className="text-muted-foreground">{currentProvider.title}</p>
              <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {currentProvider.location}</span>
                <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-secondary" /> {currentProvider.rating} ({currentProvider.reviews} avis)</span>
              </div>
            </div>
            <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors flex items-center gap-2">
              <Edit className="h-4 w-4" /> Modifier
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bio */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-heading font-semibold mb-3">À propos</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{currentProvider.bio}</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-heading font-semibold mb-3">Compétences</h3>
            <div className="flex flex-wrap gap-2">
              {currentProvider.skills.map((s) => (
                <span key={s} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats sidebar */}
        <div className="space-y-4">
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-heading font-semibold mb-3">Statistiques</h3>
            <div className="space-y-3">
              {[
                { label: "Missions terminées", value: currentProvider.completedJobs },
                { label: "Taux de réussite", value: "98%" },
                { label: "Tarif horaire", value: `${currentProvider.hourlyRate} DT/h` },
                { label: "Membre depuis", value: "Mars 2022" },
              ].map((s) => (
                <div key={s.label} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{s.label}</span>
                  <span className="font-medium">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-heading font-semibold mb-3">Badges</h3>
            <div className="flex flex-wrap gap-2">
              {currentProvider.badges.map((b) => (
                <span key={b} className="px-3 py-1 bg-secondary/15 text-secondary-foreground rounded-full text-xs font-medium">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}