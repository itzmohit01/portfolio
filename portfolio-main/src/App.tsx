import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectsPage from "./pages/ProjectsPage";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import React from "react";

const queryClient = new QueryClient();

const WhatsAppButton = () => (
  <a
    href="https://wa.me/9817728182"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 1000,
      background: '#25D366',
      borderRadius: '50%',
      width: 56,
      height: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      color: 'white',
      fontSize: 32,
      textDecoration: 'none',
    }}
    aria-label="Chat on WhatsApp"
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path d="M23.472 19.339c-.355-.177-2.096-1.034-2.42-1.153-.324-.118-.56-.177-.797.178-.237.355-.914 1.153-1.12 1.39-.207.237-.414.266-.769.089-.355-.178-1.5-.553-2.86-1.763-1.057-.944-1.77-2.108-1.98-2.463-.207-.355-.022-.546.155-.723.159-.158.355-.414.532-.62.178-.207.237-.355.355-.592.118-.237.06-.444-.03-.62-.089-.177-.797-1.92-1.09-2.63-.287-.691-.58-.597-.797-.608-.207-.009-.444-.011-.68-.011-.237 0-.62.089-.944.444-.324.355-1.23 1.201-1.23 2.924 0 1.723 1.26 3.389 1.435 3.624.177.237 2.48 3.79 6.013 5.163.841.289 1.496.461 2.007.589.843.214 1.61.184 2.217.112.676-.08 2.096-.857 2.393-1.687.296-.83.296-1.541.207-1.687-.089-.148-.324-.237-.68-.414z" fill="white"/>
    </svg>
  </a>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
