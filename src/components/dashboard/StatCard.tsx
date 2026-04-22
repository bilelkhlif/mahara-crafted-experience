import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon?: React.ReactNode;
  className?: string;
}

export default function StatCard({ label, value, change, changeType = "neutral", icon, className }: StatCardProps) {
  return (
    <div className={cn("bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow duration-300 group", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground font-medium">{label}</p>
          <p className="text-2xl font-heading font-bold mt-1">{value}</p>
          {change && (
            <p className={cn("text-xs mt-1 font-medium",
              changeType === "positive" && "text-emerald-600",
              changeType === "negative" && "text-destructive",
              changeType === "neutral" && "text-muted-foreground"
            )}>
              {change}
            </p>
          )}
        </div>
        {icon && (
          <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}