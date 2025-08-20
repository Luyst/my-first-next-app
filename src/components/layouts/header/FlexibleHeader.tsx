"use client";
import SearchBar from "@/components/search/SearchBar";
import { navLinks } from "@/lib/navLink";
import Link from "next/link";
import { use } from "react";
import { NavbarLink } from "./NavbarLink";

export default function FlexibleHeader() {
    const onSearch = (params: {
        location: string;
        date: string;
        guests: number;
    }) => {
        console.log("Search parameters:", params);
    };
    return (
        <div className="flex w-full h-full flex-col items-center bg-search-input justify-center py-8 space-y-8">
            <nav className="flex flex-row gap-6">
                {navLinks.map((link) => (
                    <NavbarLink key={link.href} {...link} />
                ))}
            </nav>
            <div>
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    );
}
