// src/app/api/charger/[id]/diagnose/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const startedAt = new Date().toISOString();

  return NextResponse.json({
    diagnosticsStarted: true,
    chargerId: params.id,
    timestamp: startedAt
  });
}

export function GET() {
  return NextResponse.json(
    { message: "Method Not Allowed" },
    { status: 405 }
  );
}