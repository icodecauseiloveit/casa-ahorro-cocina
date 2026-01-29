import { useState, useEffect } from "react";
import { ShoppingCart, X } from "lucide-react";

const colombianNames = [
  "María Fernanda",
  "Carlos Andrés",
  "Juliana",
  "Andrés Felipe",
  "Laura Camila",
  "Santiago",
  "Valentina",
  "Juan Pablo",
  "Daniela",
  "Sebastián",
  "Camila Andrea",
  "Diego Alejandro",
  "Paula",
  "Mateo",
  "Isabella",
  "Nicolás",
  "Mariana",
  "Alejandro",
  "Sofía",
  "David",
];

const colombianCities = [
  "Bogotá",
  "Medellín",
  "Cali",
  "Barranquilla",
  "Cartagena",
  "Bucaramanga",
  "Pereira",
  "Manizales",
  "Santa Marta",
  "Ibagué",
];

export const PurchaseNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState({
    name: "",
    city: "",
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const scheduleNext = () => {
      // Random interval between 10 and 30 seconds
      const nextDelay = Math.random() * 25000 + 20000;
      timeoutId = setTimeout(showNotification, nextDelay);
    };

    const showNotification = () => {
      const randomName = colombianNames[Math.floor(Math.random() * colombianNames.length)];
      const randomCity = colombianCities[Math.floor(Math.random() * colombianCities.length)];

      setCurrentPurchase({
        name: randomName,
        city: randomCity,
      });
      setIsVisible(true);

      // Hide after 4 seconds and then schedule the next one
      setTimeout(() => {
        setIsVisible(false);
        scheduleNext();
      }, 4000);
    };

    // Show first notification after 5-10 seconds
    const initialDelay = Math.random() * 5000 + 5000;
    timeoutId = setTimeout(showNotification, initialDelay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-4 z-50 animate-in slide-in-from-left duration-300">
      <div className="bg-card border border-border rounded-lg shadow-lg p-4 max-w-xs relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3 pr-4">
          <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center shrink-0">
            <ShoppingCart className="w-5 h-5 text-success" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              {currentPurchase.name} de {currentPurchase.city}
            </p>
            <p className="text-sm text-muted-foreground">
              acaba de comprar El Vault
            </p>
            <p className="text-sm font-bold text-primary mt-1">
              $188.000 <span className="text-muted-foreground font-normal">(51 USD)</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Hace {Math.floor(Math.random() * 5) + 1} minutos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
