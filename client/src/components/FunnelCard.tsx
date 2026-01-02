import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Calculator,
  FileCheck,
  Check,
  ArrowRight,
  Building2,
  Repeat,
  PiggyBank,
} from "lucide-react";

const purchaseTypes = [
  { id: "neubau", label: "Neubau / Kauf", icon: Home },
  { id: "anschluss", label: "Anschlussfinanzierung", icon: Repeat },
  { id: "umschuldung", label: "Umschuldung", icon: Building2 },
  { id: "kapital", label: "Kapitalanlage", icon: PiggyBank },
];

export default function FunnelCard() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handleTypeSelect = (typeId: string) => {
    setSelectedType(typeId);
    console.log("Selected financing type:", typeId);
  };

  const handleNextStep = () => {
    window.location.href = "https://swisslife-select.finlink.de/lutz-starke/start/finance_type?partner=2a78b047-f5f5-47aa-b7ff-f09906c94fa3&partnerCompany=Swiss%20Life%20Select";
  };

  return (
    <Card
      className="relative p-6 lg:p-8 bg-white/80 dark:bg-card/80 backdrop-blur-xl border border-white/20 dark:border-border/50 shadow-2xl"
      data-testid="card-funnel"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-card/50 rounded-xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="text-center mb-6">
          <h2
            className="font-serif text-2xl lg:text-3xl font-medium mb-2"
            data-testid="text-funnel-title"
          >
            Finanzierung in 60 Sekunden prüfen
          </h2>
          <p className="text-sm text-muted-foreground">
            Erhalten Sie eine erste Einschätzung zu Ihrer Finanzierung
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  step === currentStep
                    ? "bg-primary text-primary-foreground"
                    : step < currentStep
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}
                data-testid={`step-indicator-${step}`}
              >
                {step < currentStep ? <Check className="w-4 h-4" /> : step}
              </div>
              {step < 3 && (
                <div
                  className={`w-8 h-0.5 mx-1 ${
                    step < currentStep ? "bg-primary/40" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground mb-6">
          <div className="flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5" />
            <span>Kaufvorhaben</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            <span>Eckdaten</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Einschätzung</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {purchaseTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleTypeSelect(type.id)}
              className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg border transition-all duration-200 ${
                selectedType === type.id
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border bg-background text-muted-foreground"
              }`}
              data-testid={`button-type-${type.id}`}
            >
              <type.icon className="w-5 h-5" />
              <span className="text-xs font-medium text-center leading-tight">
                {type.label}
              </span>
            </button>
          ))}
        </div>

        <Button
          className="w-full text-base py-6"
          disabled={!selectedType}
          onClick={handleNextStep}
          data-testid="button-funnel-next"
        >
          Jetzt Finanzierung prüfen
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-primary" />
            <span>kostenlos</span>
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-primary" />
            <span>unverbindlich</span>
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-primary" />
            <span>Swiss Life Select Partner</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
