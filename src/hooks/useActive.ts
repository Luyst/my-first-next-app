"use client";
import { usePathname } from "next/navigation";

export function useActive() {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    return { pathname, isActive };
}
