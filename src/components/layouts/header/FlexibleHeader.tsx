"use client";
import SearchBar from "@/components/search/SearchBar";
import { navLinks } from "@/lib/navLink";
import { NavbarLink } from "./NavbarLink";
import { useState } from "react";
import { useActive } from "@/hooks/useActive";

import { handleSearch } from "@/lib/search";
import { cn, updateHighlightPosition } from "@/lib/utils/utils";
import { useScroll } from "@/hooks/useScroll";
import { usePathname } from "next/navigation";

export default function FlexibleHeader() {
  const pathname = usePathname();
  console.log("Current pathname:", pathname);
  const parts = pathname.split("/"); // ["", "room", "listing_005"]

  const hasId = parts.length > 2 && parts[2] !== "";
  const scrollY = useScroll();
  const isScrolled = scrollY > 0;
  const [devideWidth, setDevideWidth] = useState<{
    left: number;
    width: number;
  }>({
    left: 0,
    width: 0,
  });

  const { isActive } = useActive();

  return (
    <div
      className={cn(
        "flex w-full flex-col items-center border-b border-gray-200 transition-all duration-500 [background-image:var(--search-input_background)]",
        isScrolled || hasId ? "h-24 justify-center" : "h-50  py-8  justify-between"
      )}>
      {/* Nav */}
      <nav
        className={cn(
          "flex flex-row gap-8 px-8 transition-transform duration-500",
          isScrolled || hasId ? "-translate-y-24 absolute" : "translate-y-0 relative"
        )}>
        {navLinks.slice(0, 3).map((link) => (
          <div
            key={link.href}
            className={cn(
              "relative transition-colors duration-500",
              isActive(link.href)
                ? "text-link-active"
                : "text-gray-500 hover:text-gray-700"
            )}
            onClick={(e) => updateHighlightPosition(0, e, setDevideWidth)}>
            <NavbarLink {...link} />
          </div>
        ))
        }

        <div
          className="absolute bottom-0 translate-y-4 h-1 bg-link-active rounded-full transition-all duration-500"
          style={{
            left: devideWidth.left,
            width: devideWidth.width,
          }}
        />
      </nav >

      {/* SearchBar */}
      < div
        className={
          cn(
            "transition-all duration-500 flex justify-center items-center ",
            isScrolled || hasId ? " py-6  w-[380px]" : " w-[850px]"
          )
        } >
        <SearchBar onSearch={handleSearch} />
      </div >
    </div >
  );
}
