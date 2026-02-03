import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Konzept from "./pages/Konzept";
import Abstimmung from "./pages/Abstimmung";
import AnfrageDetail from "./pages/AnfrageDetail";
import Transparenz from "./pages/Transparenz";
import HilfeAnfragen from "./pages/HilfeAnfragen";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import UeberUns from "./pages/UeberUns";
import Kontakt from "./pages/Kontakt";
import Spenden from "./pages/Spenden";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/konzept" element={<Konzept />} />
          <Route path="/abstimmung" element={<Abstimmung />} />
          <Route path="/anfragen/:id" element={<AnfrageDetail />} />
          <Route path="/transparenz" element={<Transparenz />} />
          <Route path="/hilfe-anfragen" element={<HilfeAnfragen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/einstellungen" element={<Settings />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/spenden" element={<Spenden />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
