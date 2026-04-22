import { LayoutDashboard, Wallet, Briefcase, MessageSquare, Calendar, Bot, BarChart3, Star, User } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { currentProvider } from "@/data/mockData";
import { Outlet } from "react-router-dom";

const navItems = [
  { label: "Tableau de bord", path: "/provider", icon: <LayoutDashboard className="h-4.5 w-4.5" /> },
  { label: "Revenus", path: "/provider/earnings", icon: <Wallet className="h-4.5 w-4.5" /> },
  { label: "Missions", path: "/provider/gigs", icon: <Briefcase className="h-4.5 w-4.5" />, badge: 4 },
  { label: "Messages", path: "/provider/messages", icon: <MessageSquare className="h-4.5 w-4.5" />, badge: 2 },
  { label: "Calendrier", path: "/provider/calendar", icon: <Calendar className="h-4.5 w-4.5" /> },
  { label: "Portefeuille", path: "/provider/wallet", icon: <Wallet className="h-4.5 w-4.5" /> },
  { label: "Assistant IA", path: "/provider/ai", icon: <Bot className="h-4.5 w-4.5" /> },
  { label: "Analytiques", path: "/provider/analytics", icon: <BarChart3 className="h-4.5 w-4.5" /> },
  { label: "Réputation", path: "/provider/reputation", icon: <Star className="h-4.5 w-4.5" /> },
  { label: "Profil", path: "/provider/profile", icon: <User className="h-4.5 w-4.5" /> },
];

export default function ProviderDashboard() {
  return (
    <DashboardLayout
      navItems={navItems}
      userAvatar={currentProvider.avatar}
      userName={currentProvider.name}
      userRole="Prestataire"
    >
      <Outlet />
    </DashboardLayout>
  );
}