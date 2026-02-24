import { useState, useEffect } from "react";
import MaintenanceScreen, { isMaintenanceUnlocked } from "@/pages/MaintenanceScreen";

const MAINTENANCE_MODE = import.meta.env.VITE_MAINTENANCE_MODE === "true";
const MAINTENANCE_PASSWORD = import.meta.env.VITE_MAINTENANCE_PASSWORD ?? "ren-dev";

type MaintenanceGateProps = {
  children: React.ReactNode;
};

export const MaintenanceGate = ({ children }: MaintenanceGateProps) => {
  const [unlocked, setUnlocked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isUnlocked = mounted && (unlocked || isMaintenanceUnlocked());

  if (!MAINTENANCE_MODE) {
    return <>{children}</>;
  }

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <MaintenanceScreen
      expectedPassword={MAINTENANCE_PASSWORD}
      onUnlock={() => setUnlocked(true)}
    />
  );
};
