import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import SocialMedia from "@/pages/SocialMedia";
import DataAnalysis from "@/pages/DataAnalysis";

const queryClient = new QueryClient();

function ThemeSync() {
  const [location] = useLocation();
  useEffect(() => {
    const isDataPage = location === "/data" || location.startsWith("/data/");
    if (isDataPage) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ThemeSync />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/social" component={SocialMedia} />
        <Route path="/data" component={DataAnalysis} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
