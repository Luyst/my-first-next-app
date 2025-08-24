// app/api/rooms/route.ts
import { NextResponse } from "next/server";
import rooms from "@/data/RoomList.json";

export async function GET() {
    return NextResponse.json(rooms);
}

