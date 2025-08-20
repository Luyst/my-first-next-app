import { cn } from "@/lib/utils";

interface TagProps {
    children: React.ReactNode;
    color?: "gray" | "rose" | "green" | "blue";
    className?: string;
}

export function Tag({ children, color = "gray", className }: TagProps) {
    const colors = {
        gray: "bg-gray-200 text-gray-800",
        rose: "bg-rose-100 text-rose-600",
        green: "bg-green-100 text-green-600",
        blue: "bg-blue-100 text-blue-600",
    };

    return (
        <span
            className={cn(
                "px-2 py-1 rounded-md text-xs font-medium",
                colors[color],
                className
            )}
        >
            {children}
        </span>
    );
}
