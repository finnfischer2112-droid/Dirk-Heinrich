import { Switch, Route } from "wouter";
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

function Router() {
  return (
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
      <Route component={NotFound} />
    </Switch>
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
