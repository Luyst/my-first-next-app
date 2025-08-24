// app/api/rooms/route.ts
import { NextResponse } from "next/server";
import rooms from "@/data/RoomList.json";

export async function GET() {
    return NextResponse.json(rooms);
}

export async function POST(req: Request) {
    const data = await req.json();
    const newRoom = { id: Date.now(), ...data };
    rooms.push(newRoom);
    return NextResponse.json(newRoom, { status: 201 });
}
