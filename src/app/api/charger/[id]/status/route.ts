import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  return NextResponse.json({
    id,
    status: "online",
    temperature: 36,
    weather: "Cloudy",
    location: "Dubai",
    health: "Good",
    power: { l1: 12.3, l2: 11.7, l3: 13.0 },
    energyConsumed: 62,
    connectivity: { wifi: true, lan: false, sim: true },
    doors: { front: "Closed", left: "Closed", right: "Open" },
    mcb: { l1: 1000, l2: 1000, l3: 1000, a: 60 },
    gun: { 
      gun1: { status: "ARMED", temp: 29 }, 
      gun2: { status: "Charging", temp: 39 } 
    },
    humidity: { external: 30, charger: 34 },
  });
}
