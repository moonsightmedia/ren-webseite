import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { HelpRequestsProvider } from "@/contexts/HelpRequestsContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AdminRoute } from "@/components/AdminRoute";
import { MaintenanceGate } from "@/components/MaintenanceGate";
import Index from "./pages/Index";
import Konzept from "./pages/Konzept";
import Abstimmung from "./pages/Abstimmung";
import AnfrageDetail from "./pages/AnfrageDetail";
import Transparenz from "./pages/Transparenz";
import HilfeAnfragen from "./pages/HilfeAnfragen";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Geschichte from "./pages/Geschichte";
import Uebersicht from "./pages/Uebersicht";
import Kontakt from "./pages/Kontakt";
import Spenden from "./pages/Spenden";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import NotFound from "./pages/NotFound";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminAnfragen from "./pages/admin/AdminAnfragen";
import AdminPool from "./pages/admin/AdminPool";
import AdminAnfrageDetail from "./pages/admin/AdminAnfrageDetail";
import AdminProjekte from "./pages/admin/AdminProjekte";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <HelpRequestsProvider>
          <MaintenanceGate>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/konzept" element={<Konzept />} />
            <Route path="/abstimmung" element={<Abstimmung />} />
            <Route path="/anfragen/:id" element={<AnfrageDetail />} />
            <Route path="/transparenz" element={<Transparenz />} />
            <Route path="/hilfe-anfragen" element={<HilfeAnfragen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/einstellungen" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            <Route path="/geschichte" element={<Geschichte />} />
            <Route path="/uebersicht" element={<Uebersicht />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/spenden" element={<ProtectedRoute><Spenden /></ProtectedRoute>} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/agb" element={<AGB />} />
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <AdminLayout />
                </AdminRoute>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="anfragen" element={<AdminAnfragen />} />
              <Route path="anfragen/:id" element={<AdminAnfrageDetail />} />
              <Route path="projekte" element={<AdminProjekte />} />
              <Route path="pool" element={<AdminPool />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </MaintenanceGate>
          </HelpRequestsProvider>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
