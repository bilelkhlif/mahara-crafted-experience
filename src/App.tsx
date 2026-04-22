import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProviderDashboard from "./pages/provider/ProviderDashboard.tsx";
import ProviderOverview from "./pages/provider/ProviderOverview.tsx";
import ProviderEarnings from "./pages/provider/ProviderEarnings.tsx";
import ProviderGigs from "./pages/provider/ProviderGigs.tsx";
import ProviderMessages from "./pages/provider/ProviderMessages.tsx";
import ProviderCalendar from "./pages/provider/ProviderCalendar.tsx";
import ProviderWallet from "./pages/provider/ProviderWallet.tsx";
import ProviderAI from "./pages/provider/ProviderAI.tsx";
import ProviderAnalytics from "./pages/provider/ProviderAnalytics.tsx";
import ProviderReputation from "./pages/provider/ProviderReputation.tsx";
import ProviderProfile from "./pages/provider/ProviderProfile.tsx";
import ClientDashboard from "./pages/client/ClientDashboard.tsx";
import ClientOverview from "./pages/client/ClientOverview.tsx";
import ClientSearch from "./pages/client/ClientSearch.tsx";
import ClientOrders from "./pages/client/ClientOrders.tsx";
import ClientMessages from "./pages/client/ClientMessages.tsx";
import ClientFavorites from "./pages/client/ClientFavorites.tsx";
import ClientReviews from "./pages/client/ClientReviews.tsx";
import ClientRecommendations from "./pages/client/ClientRecommendations.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/provider" element={<ProviderDashboard />}>
            <Route index element={<ProviderOverview />} />
            <Route path="earnings" element={<ProviderEarnings />} />
            <Route path="gigs" element={<ProviderGigs />} />
            <Route path="messages" element={<ProviderMessages />} />
            <Route path="calendar" element={<ProviderCalendar />} />
            <Route path="wallet" element={<ProviderWallet />} />
            <Route path="ai" element={<ProviderAI />} />
            <Route path="analytics" element={<ProviderAnalytics />} />
            <Route path="reputation" element={<ProviderReputation />} />
            <Route path="profile" element={<ProviderProfile />} />
          </Route>
          <Route path="/client" element={<ClientDashboard />}>
            <Route index element={<ClientOverview />} />
            <Route path="search" element={<ClientSearch />} />
            <Route path="orders" element={<ClientOrders />} />
            <Route path="messages" element={<ClientMessages />} />
            <Route path="favorites" element={<ClientFavorites />} />
            <Route path="reviews" element={<ClientReviews />} />
            <Route path="recommendations" element={<ClientRecommendations />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
