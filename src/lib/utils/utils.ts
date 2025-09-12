import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { RootState } from "@/redux/store";

export function cn(...inputs: (string | undefined | null | boolean)[]) {
    return twMerge(clsx(inputs));
}

type Position = {
    left: number;
    width: number;
};

export function updateHighlightPosition(
    padding: number,

    e: React.SyntheticEvent<HTMLElement>,
    setPosition: React.Dispatch<React.SetStateAction<Position>>,
    extra: number = padding * 2
) {
    const { currentTarget } = e;
    setPosition({
        left: currentTarget.offsetLeft - padding,
        width: currentTarget.offsetWidth + extra,
    });
}



export function formatGuests(who: RootState["search"]["who"]): string {
    const totalGuests = who.adults + who.children;

    if (
        totalGuests === 0 &&
        who.infants === 0 &&
        who.pets === 0
    ) return "";

    const parts = [
        totalGuests > 0 && `${totalGuests} guests`,
        who.infants > 0 && `${who.infants} infants`,
        who.pets > 0 && `${who.pets} pets`,
    ].filter(Boolean);

    return parts.join(", ");
}

