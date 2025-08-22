"use client";
import { useScroll } from "@/hooks/useScroll";
// Importing React
import React, { useState } from "react";
import SearchDefault from "./SearchDefault";
import { SearchMinimal } from "./SearchMinimal";

interface SearchBarProps {
  onSearch: (params: {
    location: string;
    date: string;
    guests: number;
  }) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const scrollY = useScroll();
  const isScrolled = scrollY > 0;
  return (
    <>
      {isScrolled ? (<SearchMinimal />) : (<SearchDefault />)}
    </>
  );
};

export default SearchBar;
