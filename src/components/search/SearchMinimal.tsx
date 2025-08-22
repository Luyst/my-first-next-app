import { navLinks } from "@/lib/navLink";
import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";
import { FaSearch } from "react-icons/fa";

const searchMini = [
  { title: "Anywhere", placeholder: "Search destinations" },
  { title: "Anytime", placeholder: "Add dates" },
  { title: "Add guests", placeholder: "Add guests" },
];

export function SearchMinimal() {
  const pathName = usePathname();

  const activeNav = navLinks.find((link) => link.href === pathName);


  return (
    <section className="relative w-full  search-wrap rounded-full transition-all duration-300 shadow hover:shadow-lg ">
      <div className="flex flex-row gap-4 py-3 divide-search-input divide-x-2 px-12 items-center  relative z-10 bg-white rounded-full">

        {searchMini.map((input) => (
          <div className="pr-3 font-medium  cursor-pointer" key={input.title}> {input.title}</div>
        ))}

      </div>

      {activeNav && (
        <div className="absolute top-0 right-o z-10 overflow-hidden h-full">
          <video
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src={activeNav.videoSrcMov}
              type='video/mp4; codecs="hvc1"'
            />
            <source src={activeNav.videoSrcWebm} type="video/webm" />
          </video>
        </div>
      )}
      <Button
        variant="primary"
        className="absolute top-1/2 -translate-y-1/2 right-2 z-20 flex justify-center items-center size-8 aspect-square rounded-full overflow-hidden transition-all duration-500 
    ">
        <FaSearch className="shrink-0 z-10 text-xs" />
      </Button>
    </section>
  );
}
