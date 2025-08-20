// ui/Badge.tsx
import { cn } from "@/lib/utils"; // if you use shadcn style utils (optional)

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "success" | "danger" | "outline";
    className?: string;
}

export function Badge({
    children,
    variant = "default",
    className,
}: BadgeProps) {
    const baseStyles =
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors";

    const variants = {
        default: "bg-gray-200 text-gray-900",
        success: "bg-green-500 text-white",
        danger: "bg-red-500 text-white",
        outline: "border border-gray-400 text-gray-700",
    };

    return (
        <span className={cn(baseStyles, variants[variant], className)}>
            {children}
        </span>
    );
}
