// app/api/rooms/route.ts
import { NextResponse } from "next/server";
import experients from "@/data/ExperientsList.json";

export async function GET() {
    return NextResponse.json(experients);
}

