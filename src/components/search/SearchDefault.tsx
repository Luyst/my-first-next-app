import { cn, updateHighlightPosition } from "@/lib/utils";
import Input from "@/components/search/Input";
import DateDrop from "./searchDrop/DateDrop";
import { Button } from "../ui/Button";
import { FaSearch } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import WhereDrop from "./searchDrop/WhereDrop";
import WhoDrop from "./searchDrop/WhoDrop";

export default function SearchDefault() {
  const [highlight, setHighlight] = useState({ left: 0, width: 0 });
  const [activeDrop, setActiveDrop] = useState<"where" | "date" | "who" | null>(null);

  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setActiveDrop(null);
        setHighlight({ left: 0, width: 0 });
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="focus-within:bg-search-input-focus group rounded-full relative "
    >
      <div className="overflow-hidden relative rounded-full">

        <div
          className="absolute transition-bar top-0 h-full bg-white rounded-full shadow-lg transition-all duration-500"
          style={{ left: highlight.left, width: highlight.width, zIndex: 0 }}
        />
        <div className="grid grid-cols-6 relative z-10 ">
          <Input
            title="Where"
            type="text"
            placeholder="Search destinations"
            className="col-span-2"
            onFocus={(e) => {
              updateHighlightPosition(32, e, setHighlight);
              setActiveDrop("where");
            }}
          />

          <Input
            title="Check in"
            type="text"
            placeholder="Add dates"
            className="col-span-1"
            onFocus={(e) => {
              updateHighlightPosition(32, e, setHighlight);
              setActiveDrop("date");
            }}
          />
          <Input
            title="Check out"
            type="text"
            placeholder="Add dates"
            className="col-span-1"
            onFocus={(e) => {
              updateHighlightPosition(32, e, setHighlight);
              setActiveDrop("date");
            }}
          />

          <Input
            title="Who"
            type="text"
            placeholder="Add guests"
            className="col-span-2"
            onFocus={(e) => {
              updateHighlightPosition(32, e, setHighlight);
              setActiveDrop("who");
            }}
          />
        </div>

        <Button
          variant="primary"
          className="absolute top-1/2 -translate-y-1/2 right-2 z-20 flex items-center justify-start size-12 rounded-full overflow-hidden transition-all duration-500 
                group-focus-within:w-32 group-focus-within:[background-image:var(--primary-gradient)]"
        >
          <FaSearch className="shrink-0 z-10" />
          <span className="absolute left-12 opacity-0 group-focus-within:opacity-100 transition-all duration-500">
            Search
          </span>
        </Button>
      </div>

      <div
        className={cn(
          "absolute transition-all duration-300 mt-3  z-50",
          activeDrop === "where" && "left-0  h-[calc(100vh-200px)] w-[425px]",
          activeDrop === "date" && " left-0 h-[calc(100vh-190px)] w-[850px]",
          activeDrop === "who" && "left-1/2 h-80  w-[425px] "
        )}
      >
        {activeDrop === "where" && <WhereDrop />}
        {activeDrop === "date" && <DateDrop />}
        {activeDrop === "who" && <WhoDrop />}
      </div>
    </div>
  );
}
