// Tag.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TagProps {
    icon: ReactNode;
    title: string;
    subtitle: string;
    color?: string;
    onclick?: () => void;
    className?: string;

}
const colors: Record<string, { text: string; bg: string }> = {
    red: { text: "text-red-500", bg: "bg-red-50" },
    green: { text: "text-green-500", bg: "bg-green-50" },
    blue: { text: "text-blue-500", bg: "bg-blue-50" },
    yellow: { text: "text-yellow-500", bg: "bg-yellow-50" },
};

export default function Tag({ icon, title, subtitle, color, onclick, className }: TagProps) {
    const { text, bg } = colors[color as keyof typeof colors] || colors.blue;
    return (
        <div
            className={cn(
                "flex items-center gap-3 mx-4 p-2 hover:bg-gray-100 cursor-pointer rounded-xl transition-colors",
                className
            )}
            onClick={onclick}
        >
            <div className={cn("text-2xl size-14 aspect-square flex items-center justify-center bg-green-200 rounded-xl", text, bg)}>{icon}</div>
            <div className="flex flex-col text-sm">
                <span className="font-medium">{title}</span>
                <span className="text-gray-500 text-xs break-words ">{subtitle}</span>
            </div>
        </div>
    );
}
