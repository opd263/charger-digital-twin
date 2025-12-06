// src/app/api/charger/[id]/notifications/route.ts
import { NextResponse } from "next/server"

const notifications = [
  {
    id: "000004",
    type: "warning",
    message: "OverCurrentFailure",
    time: "13/06/2025 | 09:04:34",
  },
  {
    id: "000013",
    type: "critical",
    message: "The EVSE has no internet connectivity",
    time: "13/06/2025 | 08:09:13",
  },
  {
    id: "000014",
    type: "warning",
    message: "PowerLoss",
    time: "13/06/2025 | 08:04:11",
  },
  {
    id: "001004",
    type: "warning",
    message: "REMOTE_STOP",
    time: "13/06/2025 | 07:32:46",
  },
   {
    id: "001003",
    type: "warning",
    message: "NFC_STOP",
    time: "12/06/2025 | 22:01:42",
  },
  {
    id: "002000",
    type: "warning",
    message: "UNREGISTERED_THE_CARD",
    time: "12/06/2025 | 20:48:14",
  },
  {
    id: "001000",
    type: "warning",
    message: "UNKNOWN_STOP",
    time: "12/06/2025 | 20:12:52",
  },
  {
    id: "001404",
    type: "warning",
    message: "REMOTE_STOP",
    time: "12/06/2025 | 19:39:38",
  },
  {
    id: "000021",
    type: "critical",
    message: "Over Temperature on Charger",
    time: "11/06/2025 | 18:11:02",
  },
  {
    id: "000022",
    type: "warning",
    message: "High Grid Voltage",
    time: "11/06/2025 | 16:45:27",
  },
  {
    id: "000015",
    type: "warning",
    message: "Power Loss",
    time: "12/06/2025 | 22:04:34",
  },
]

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  // you can use params.id later if you want per-charger notifications
  return NextResponse.json(notifications)
}
