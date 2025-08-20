import { Button } from "@/components/ui/Button";
import { TbWorld } from "react-icons/tb";
import { PiList } from "react-icons/pi";
export default function RightHeader() {
    return (
        <nav className="flex flex-row items-center space-x-4 font-bold-">
            <Button
                variant="ghost"
                className="text-sm font-bold hidden md:inline-flex"
            >
                Become a host
            </Button>
            <Button variant="circle" className="hidden sm:inline-flex">
                <TbWorld />
            </Button>
            <Button variant="circle" className="hidden sm:inline-flex">
                <PiList />
            </Button>
        </nav>
    );
}
