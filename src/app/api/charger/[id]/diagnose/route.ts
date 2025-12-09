// src/app/api/charger/[id]/diagnose/route.ts
import { NextRequest, NextResponse } from "next/server";

/**
 * POST handler for starting diagnostics on a charger.
 * NOTE: In newer Next.js versions context.params might be a Promise,
 * so we await it to be safe for both sync and async typings.
 */
export async function POST(
  req: NextRequest,
  context: { params: any | Promise<any> } // keep flexible for compiler
) {
  try {
    // context.params may be a Promise in Next.js 16+, so await it
    const params = await context.params;
    const id: string | undefined = params?.id;

    if (!id) {
      return NextResponse.json({ error: "missing charger id" }, { status: 400 });
    }

    const startedAt = new Date().toISOString();

    return NextResponse.json({
      diagnosticsStarted: true,
      chargerId: id,
      timestamp: startedAt,
    });
  } catch (err) {
    // return a 500 with a small error message
    return NextResponse.json({ error: "internal_error" }, { status: 500 });
  }
}

// Optional: respond with 405 for GET or other methods (keeps behavior explicit)
export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
