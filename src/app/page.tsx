// pages/index.tsx
import React from "react"
import Sidebar from "./components/layout/Sidebar"
import Topbar from "./components/layout/Topbar"
import ChargerHeaderBar from "./components/layout/ChargerHeaderBar"
import ChargerTabsBar from "./components/layout/ChargerTabsBar"
import PageContainer from "./components/layout/PageContainer"
import ChargerVisualization from "./components/left-panel/ChargerVisualization"
import DiagnoseCard from "./components/middle-panel/DiagnoseCard"
import DoorStatusCard from "./components/middle-panel/DoorStatusCard"
import MCBCard from "./components/middle-panel/MCBCard"
import EmergencyStopCard from "./components/middle-panel/EmergencyStopCard"
import TemperatureCard from "./components/middle-panel/TemperatureCard"
import GunStatusCard from "./components/middle-panel/GunStatusCard"
import NotificationsPanel from "./components/right-panel/NotificationsPanel"

export default function Home() {
  return (
    <div className="bg-[rgba(7,15,36,1)] flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col min-h-screen">
        <Topbar />
        <PageContainer>
          <ChargerHeaderBar />
          <ChargerTabsBar />

          <div className="grid grid-cols-[440px_1fr_360px] gap-6">
            {/* left */}
            <ChargerVisualization />

            {/* middle - stack cards / grid */}
            <div>
              <div className="bg-[rgba(7,15,36,0.98)] grid grid-cols-2 gap-6">
                <DiagnoseCard />
                <DoorStatusCard />
              </div>

              <div className="grid grid-cols-2 gap-6 mt-6">
                <MCBCard />
                <EmergencyStopCard />
              </div>

              <div className="grid grid-cols-2 gap-6 mt-6">
                <TemperatureCard />
                <GunStatusCard />
              </div>
            </div>

            {/* right */}
            <NotificationsPanel />
          </div>
        </PageContainer>
      </div>
    </div>
  )
}
