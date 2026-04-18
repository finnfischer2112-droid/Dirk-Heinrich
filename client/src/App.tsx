import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import LandingPage from "@/pages/LandingPage";
import WiesbadenPage from "@/pages/WiesbadenPage";
import IdsteinPage from "@/pages/IdsteinPage";
import BadSchwalbachPage from "@/pages/BadSchwalbachPage";
import RheingauPage from "@/pages/RheingauPage";
import MainzPage from "@/pages/MainzPage";
import RechnerPage from "@/pages/RechnerPage";
import ImpressumPage from "@/pages/ImpressumPage";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/baufinanzierung-wiesbaden" component={WiesbadenPage} />
        <Route path="/baufinanzierung-wiesbaden/" component={WiesbadenPage} />
        <Route path="/baufinanzierung-idstein" component={IdsteinPage} />
        <Route path="/baufinanzierung-idstein/" component={IdsteinPage} />
        <Route path="/baufinanzierung-bad-schwalbach" component={BadSchwalbachPage} />
        <Route path="/baufinanzierung-bad-schwalbach/" component={BadSchwalbachPage} />
        <Route path="/baufinanzierung-rheingau" component={RheingauPage} />
        <Route path="/baufinanzierung-rheingau/" component={RheingauPage} />
        <Route path="/baufinanzierung-mainz" component={MainzPage} />
        <Route path="/baufinanzierung-mainz/" component={MainzPage} />
        <Route path="/baufinanzierungsrechner" component={RechnerPage} />
        <Route path="/baufinanzierungsrechner/" component={RechnerPage} />
        <Route path="/impressum" component={ImpressumPage} />
        <Route path="/impressum/" component={ImpressumPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
