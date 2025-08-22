import { updateHighlightPosition } from "@/lib/utils";

// Importing Component
import Input from "@/components/search/Input";
import { Button } from "../ui/Button";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function SearchDefault() {
  const [highlight, setHighlight] = useState({ left: 0, width: 0 });

  return (
    <section className="relative w-full max-w-[850px] search-wrap  rounded-full  transition-all duration-300 shadow-lg bg-white focus-within:bg-search-input-focus group ">
      <div
        className="absolute transition-bar top-0 h-full bg-white rounded-full shadow-lg  transition-all duration-500"
        style={{
          left: highlight.left,
          width: highlight.width,
          zIndex: 0,
        }}
      />
      <div className="grid grid-cols-6 relative z-10 ">
        <Input
          title="Where"
          type="text"
          placeholder="Search destiantions"
          className="col-span-2"
          onFocus={(e) => updateHighlightPosition(32, e, setHighlight)}
        />

        <Input
          title="Check in"
          type="text"
          placeholder="Add dates"
          className="col-span-1"
          onFocus={(e) => updateHighlightPosition(32, e, setHighlight)}
        />
        <Input
          title="Check out"
          type="text"
          placeholder="Add dates"
          className="col-span-1"
          onFocus={(e) => updateHighlightPosition(32, e, setHighlight)}
        />
        <Input
          title="Who"
          type="text"
          placeholder="Add guests"
          className="col-span-2"
          onFocus={(e) => updateHighlightPosition(32, e, setHighlight)}
        />
      </div>
      <Button
        variant="primary"
        className="absolute top-1/2 -translate-y-1/2 right-2 z-20 flex items-center justify-start size-12 rounded-full overflow-hidden transition-all duration-500 
                group-focus-within:w-32 group-focus-within:[background-image:var(--primary-gradient)]">
        <FaSearch className="shrink-0 z-10" />

        <span className="absolute left-12 opacity-0 group-focus-within:opacity-100 transition-all duration-500 ">
          Search
        </span>
      </Button>
    </section>
  );
}
