import { Search, ShoppingBag, MessageSquare, Heart, LayoutDashboard, Star, Bot, User } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { currentClient } from "@/data/mockData";
import { Outlet } from "react-router-dom";

const navItems = [
  { label: "Tableau de bord", path: "/client", icon: <LayoutDashboard className="h-4.5 w-4.5" /> },
  { label: "Rechercher", path: "/client/search", icon: <Search className="h-4.5 w-4.5" /> },
  { label: "Commandes", path: "/client/orders", icon: <ShoppingBag className="h-4.5 w-4.5" />, badge: 2 },
  { label: "Messages", path: "/client/messages", icon: <MessageSquare className="h-4.5 w-4.5" />, badge: 3 },
  { label: "Favoris", path: "/client/favorites", icon: <Heart className="h-4.5 w-4.5" /> },
  { label: "Avis", path: "/client/reviews", icon: <Star className="h-4.5 w-4.5" /> },
  { label: "Recommandations IA", path: "/client/recommendations", icon: <Bot className="h-4.5 w-4.5" /> },
  { label: "Profil", path: "/client/profile", icon: <User className="h-4.5 w-4.5" /> },
];

export default function ClientDashboard() {
  return (
    <DashboardLayout
      navItems={navItems}
      userAvatar={currentClient.avatar}
      userName={currentClient.name}
      userRole="Client Premium"
    >
      <Outlet />
    </DashboardLayout>
  );
}