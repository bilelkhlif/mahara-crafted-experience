import { calendarEvents } from "@/data/mockData";
import { cn } from "@/lib/utils";

const days = ["Lun 22", "Mar 23", "Mer 24", "Jeu 25", "Ven 26"];
const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

export default function ProviderCalendar() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-bold">Calendrier</h1>
        <p className="text-muted-foreground mt-1">Gérez vos sessions et rendez-vous.</p>
      </div>

      {/* Week view */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="grid grid-cols-6 border-b border-border">
          <div className="p-3 text-xs text-muted-foreground font-medium">Heure</div>
          {days.map((d) => (
            <div key={d} className={cn("p-3 text-sm font-medium text-center", d.includes("22") && "bg-primary/5 text-primary")}>{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-6 divide-x divide-border">
          <div className="divide-y divide-border">
            {hours.map((h) => (
              <div key={h} className="h-14 px-3 flex items-center text-xs text-muted-foreground">{h}</div>
            ))}
          </div>
          {days.map((d, di) => (
            <div key={d} className="divide-y divide-border relative">
              {hours.map((h) => (
                <div key={h} className="h-14 hover:bg-muted/30 transition-colors cursor-pointer" />
              ))}
              {calendarEvents
                .filter((e) => {
                  const eventDay = parseInt(e.date.split("-")[2]);
                  return eventDay === 22 + di;
                })
                .map((e) => {
                  const hour = parseInt(e.time.split(":")[0]);
                  const top = (hour - 8) * 56;
                  return (
                    <div
                      key={e.id}
                      className={cn(
                        "absolute left-1 right-1 rounded-lg px-2 py-1 text-xs font-medium cursor-pointer transition-shadow hover:shadow-md",
                        e.type === "tutoring" && "bg-primary/15 text-primary border border-primary/20",
                        e.type === "consultation" && "bg-secondary/20 text-secondary-foreground border border-secondary/30",
                        e.type === "delivery" && "bg-emerald-100 text-emerald-700 border border-emerald-200"
                      )}
                      style={{ top: `${top}px`, height: "48px" }}
                    >
                      <p className="truncate font-semibold">{e.title}</p>
                      <p className="truncate opacity-70">{e.time} · {e.duration}</p>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming list */}
      <div className="bg-card rounded-xl border border-border p-5">
        <h3 className="font-heading font-semibold mb-4">Sessions à venir</h3>
        <div className="space-y-3">
          {calendarEvents.map((e) => (
            <div key={e.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className={cn("w-1 h-10 rounded-full",
                e.type === "tutoring" && "bg-primary",
                e.type === "consultation" && "bg-secondary",
                e.type === "delivery" && "bg-emerald-500"
              )} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{e.title}</p>
                <p className="text-xs text-muted-foreground">{e.client}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-medium">{e.time}</p>
                <p className="text-xs text-muted-foreground">{e.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}