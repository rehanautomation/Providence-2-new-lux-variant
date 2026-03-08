import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Experiences from "./pages/Experiences";
import Membership from "./pages/Membership";
import Responsibility from "./pages/Responsibility";
import Contact from "./pages/Contact";
import Residences from "./pages/Residences";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/responsibility" element={<Responsibility />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/residences" element={<Residences />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
