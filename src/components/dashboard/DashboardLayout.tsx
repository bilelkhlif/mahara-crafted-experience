import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/mahara-logo.png";
import { Bell, ChevronLeft, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  badge?: number;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  navItems: NavItem[];
  userAvatar: string;
  userName: string;
  userRole: string;
  accentClass?: string;
}

export default function DashboardLayout({ children, navItems, userAvatar, userName, userRole, accentClass = "bg-primary" }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const SidebarContent = () => (
    <>
      <div className="p-4 flex items-center gap-3 border-b border-border">
        <Link to="/">
          <img src={logo} alt="Mahara" className="h-8 w-8 rounded-lg" />
        </Link>
        {!collapsed && <span className="font-heading font-bold text-lg">Mahara</span>}
      </div>

      <div className="p-3 flex-1 overflow-y-auto">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                isActive(item.path)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <span className="shrink-0">{item.icon}</span>
              {!collapsed && (
                <span className="flex-1">{item.label}</span>
              )}
              {!collapsed && item.badge && item.badge > 0 && (
                <span className="bg-destructive text-destructive-foreground text-xs px-1.5 py-0.5 rounded-full">{item.badge}</span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {!collapsed && (
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <img src={userAvatar} alt={userName} className="h-9 w-9 rounded-full object-cover" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{userName}</p>
              <p className="text-xs text-muted-foreground truncate">{userRole}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop sidebar */}
      <aside className={cn(
        "hidden md:flex flex-col border-r border-border bg-card transition-all duration-300 sticky top-0 h-screen",
        collapsed ? "w-[68px]" : "w-[260px]"
      )}>
        <SidebarContent />
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 bg-card border border-border rounded-full p-1 shadow-sm hover:bg-muted transition-colors z-10"
        >
          <ChevronLeft className={cn("h-3.5 w-3.5 transition-transform", collapsed && "rotate-180")} />
        </button>
      </aside>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className="relative w-[280px] h-full bg-card flex flex-col shadow-lg animate-slide-in-left" style={{ animationDuration: "0.2s" }}>
            <button onClick={() => setMobileOpen(false)} className="absolute right-3 top-4 p-1">
              <X className="h-5 w-5" />
            </button>
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-md border-b border-border px-4 md:px-6 h-14 flex items-center gap-4">
          <button onClick={() => setMobileOpen(true)} className="md:hidden p-1.5 rounded-lg hover:bg-muted">
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex-1" />
          <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full" />
          </button>
          <img src={userAvatar} alt={userName} className="h-8 w-8 rounded-full object-cover md:hidden" />
        </header>
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}