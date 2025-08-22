import clsx from "clsx";
import { twMerge } from "tailwind-merge";

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
