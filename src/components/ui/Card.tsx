import { cn } from "@/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <div className={cn("rounded-xl shadow-md bg-white p-4", className)}>
            {children}
        </div>
    );
}
