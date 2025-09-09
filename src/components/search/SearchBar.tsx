"use client";
import { useScroll } from "@/hooks/useScroll";
// Importing React
import React, { useState } from "react";
import SearchDefault from "./SearchDefault";
import { SearchMinimal } from "./SearchMinimal";
import { usePathname } from "next/navigation";

interface SearchBarProps {
  onSearch: (params: {
    location: string;
    date: string;
    guests: number;
  }) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const pathname = usePathname();
  const parts = pathname.split("/"); // ["", "room", "listing_005"]

  const hasId = parts.length > 2 && parts[2] !== "";
  const scrollY = useScroll();
  const isScrolled = scrollY > 0;
  return (
    <section className="relative w-full   search-wrap  transition-all duration-300 rounded-full shadow-lg bg-white ">
      {isScrolled || hasId ? (<SearchMinimal />) : (<SearchDefault />)}
    </section>
  );
};

export default SearchBar;
