import { DefaultLogo, MinimalLogo } from "@/components/icons/Logo";
import FlexibleHeader from "./FlexibleHeader";
import RightHeader from "./RightHeader";
import Link from "next/link";
export default function Header() {
    return (
        <header className="relative w-full h-24 flex flex-row items-center justify-between  px-12">
            <Link
                href={"/"}
                className="z-10 mb-2 md:mb-0 cursor-pointer text-[#FF385C]"
                aria-label="Airbnb homepage"
            >
                <DefaultLogo className="w-24 h-8 hidden lg:block" />
                <MinimalLogo className="w-8 h-8 sm:block lg:hidden hidden" />
            </Link>
            <div className="z-10">
                <RightHeader />
            </div>
            <div className="absolute h-50 overflow-hidden block w-full top-0 left-0">
                <FlexibleHeader />
            </div>
        </header>
    );
}
