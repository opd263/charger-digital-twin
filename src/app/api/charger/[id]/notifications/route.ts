// src/app/api/charger/[id]/notifications/route.ts
import { NextRequest, NextResponse } from "next/server";

type Notification = {
  id: string;
  type: "warning" | "critical" | string;
  message: string;
  time: string; // ISO string
};

// sample data (use DB in prod)
const notifications: Notification[] = [
  { id: "000004", type: "warning", message: "OverCurrentFailure", time: "2025-06-13T09:04:34Z" },
  { id: "000013", type: "critical", message: "The EVSE has no internet connectivity", time: "2025-06-13T08:09:13Z" },
  { id: "000014", type: "warning", message: "PowerLoss", time: "2025-06-13T08:04:11Z" },
  { id: "001004", type: "warning", message: "REMOTE_STOP", time: "2025-06-13T07:32:46Z" },
  { id: "001003", type: "warning", message: "NFC_STOP", time: "2025-06-12T22:01:42Z" },
  { id: "002000", type: "warning", message: "UNREGISTERED_THE_CARD", time: "2025-06-12T20:48:14Z" },
  { id: "001000", type: "warning", message: "UNKNOWN_STOP", time: "2025-06-12T20:12:52Z" },
  { id: "001404", type: "warning", message: "REMOTE_STOP", time: "2025-06-12T19:39:38Z" },
  { id: "000021", type: "critical", message: "Over Temperature on Charger", time: "2025-06-11T18:11:02Z" },
  { id: "000022", type: "warning", message: "High Grid Voltage", time: "2025-06-11T16:45:27Z" },
  { id: "000015", type: "warning", message: "Power Loss", time: "2025-06-12T22:04:34Z" }
];

// helper: parse ?limit and ?cursor
function parseQueryParams(url: URL) {
  const limit = Math.min(Math.max(Number(url.searchParams.get("limit") || "20"), 1), 100);
  const cursor = url.searchParams.get("cursor") || null; // cursor = last item's id
  return { limit, cursor };
}

/**
 * Use NextRequest and await context.params (Next 16+ expects params as a Promise)
 */
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  // await params to satisfy Next 16 typing (and for runtime safety)
  const params = await context.params;
  const { id } = params ?? {};

  // basic validation
  if (!id || String(id).trim().length === 0) {
    return NextResponse.json({ error: "Invalid charger id" }, { status: 400 });
  }

  const url = new URL(req.url);
  const { limit, cursor } = parseQueryParams(url);

  // sorted by time desc
  const sorted = [...notifications].sort((a, b) => (a.time < b.time ? 1 : -1));

  // if cursor provided, find index and slice after it
  let startIndex = 0;
  if (cursor) {
    const idx = sorted.findIndex((n) => n.id === cursor);
    startIndex = idx >= 0 ? idx + 1 : 0;
  }

  const page = sorted.slice(startIndex, startIndex + limit);
  const nextCursor = page.length === limit ? page[page.length - 1].id : null;

  const resBody = {
    chargerId: id,
    items: page,
    nextCursor,
    limit
  };

  // short caching for clients / CDN
  const headers = {
    "Cache-Control": "public, max-age=5, s-maxage=5, stale-while-revalidate=10"
  };

  return NextResponse.json(resBody, { status: 200, headers });
}
