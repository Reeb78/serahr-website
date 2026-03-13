import { NextResponse } from "next/server";

const LICENCE_API = "https://licence.serahr.de/api/v1/lifetime-remaining";

export async function GET() {
  try {
    const res = await fetch(LICENCE_API, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error(`Licence API returned ${res.status}`);
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { limit: 0, sold: 0, remaining: 0, available: false },
      { status: 502 }
    );
  }
}
