import { NextResponse } from "next/server";

// Placeholder users API — replace with a real database in production
export async function GET() {
  return NextResponse.json({ message: "Users API endpoint" });
}
