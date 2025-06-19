import { useState } from "react";
import TabNavigation from "@/components/ambulance/tab-navigation";
import DriverApp from "@/components/ambulance/driver-app";
import PublicApp from "@/components/ambulance/public-app";

export default function AmbulanceControl() {
  const [activeTab, setActiveTab] = useState<"driver" | "public">("driver");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        {activeTab === "driver" ? <DriverApp /> : <PublicApp />}
      </div>
    </div>
  );
}
