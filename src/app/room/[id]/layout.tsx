import { Metadata } from "next";

export const metadata: Metadata = {
    title: ["Room Detail", "Rooms"].join(" | "),
    description: "Detailed information about the room.",
};


export default function RoomLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}