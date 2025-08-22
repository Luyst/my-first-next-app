import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "primary" | "outline" | "ghost" | "circle";
}

export function Button({
    children,
    variant = "default",
    className,
    ...props
}: ButtonProps) {
    const base =
        "px-4 py-2 cursor-pointer    transition duration-300 focus:outline-none";

    const variants = {
        default: "rounded-lg bg-gray-200 text-gray-900 hover:bg-gray-300",
        primary:
            "rounded-full bg-primary text-white hover:[background-image:var(--primary-gradient)]",
        outline:
            "rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-100",
        ghost: "rounded-full text-gray-600 font-semibold hover:bg-gray-200",
        circle: "rounded-full p-2 text-lg aspect-square bg-gray-200 text-gray-900 hover:bg-gray-300",
    };

    return (
        <button className={cn(base, variants[variant], className)} {...props}>
            {children}
        </button>
    );
}
