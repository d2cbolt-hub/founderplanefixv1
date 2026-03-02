import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Boltguider from "./pages/services/Boltguider";
import D2CBolt from "./pages/services/D2CBolt";
import BrandToFly from "./pages/services/BrandToFly";
import ScaleRunway from "./pages/services/ScaleRunway";
import B2BBolt from "./pages/services/B2BBolt";
import BoltRunway from "./pages/services/BoltRunway";
import Admin from "./pages/Admin";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import BoltGuiderOnboarding from "./pages/BoltGuiderOnboarding";

import PageTransition from "./components/PageTransition";

const queryClient = new QueryClient();

// Scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />
        <Route
          path="/services/boltguider"
          element={
            <PageTransition>
              <Boltguider />
            </PageTransition>
          }
        />
        <Route
          path="/services/d2cbolt"
          element={
            <PageTransition>
              <D2CBolt />
            </PageTransition>
          }
        />
        <Route
          path="/services/brandtofly"
          element={
            <PageTransition>
              <BrandToFly />
            </PageTransition>
          }
        />
        <Route
          path="/services/scalerunway"
          element={
            <PageTransition>
              <ScaleRunway />
            </PageTransition>
          }
        />
        <Route
          path="/services/b2bbolt"
          element={
            <PageTransition>
              <B2BBolt />
            </PageTransition>
          }
        />
        <Route
          path="/services/boltrunway"
          element={
            <PageTransition>
              <BoltRunway />
            </PageTransition>
          }
        />
        <Route
          path="/admin"
          element={<Admin />}
        />
        <Route
          path="/privacy-policy"
          element={
            <PageTransition>
              <PrivacyPolicy />
            </PageTransition>
          }
        />
        <Route
          path="/terms-of-service"
          element={
            <PageTransition>
              <TermsOfService />
            </PageTransition>
          }
        />
        <Route
          path="/refund-policy"
          element={
            <PageTransition>
              <RefundPolicy />
            </PageTransition>
          }
        />
        <Route
          path="/boltguider-onboarding"
          element={
            <PageTransition>
              <BoltGuiderOnboarding />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
