// src/app/api/charger/[id]/diagnose/route.ts
import { NextRequest, NextResponse } from "next/server";

/**
 * Exact signature expected by Next.js 16+:
 * POST(request: NextRequest, context: { params: Promise<{ id: string }> })
 */
export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
): Promise<Response> {
  try {
    // context.params is a Promise in Next 16+, so await it
    const params = await context.params;
    const id = params?.id;

    if (!id) {
      return NextResponse.json({ error: "missing charger id" }, { status: 400 });
    }

    const startedAt = new Date().toISOString();

    return NextResponse.json(
      {
        diagnosticsStarted: true,
        chargerId: id,
        timestamp: startedAt,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: "internal_error" }, { status: 500 });
  }
}

// Optional explicit 405 for other methods
export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
