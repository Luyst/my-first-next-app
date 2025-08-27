// app/api/rooms/route.ts
import { NextResponse } from "next/server";
import services from "@/data/ServiceList.json";

export async function GET() {
    return NextResponse.json(services);
}

