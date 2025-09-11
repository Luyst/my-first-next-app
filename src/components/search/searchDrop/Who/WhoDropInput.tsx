"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { increment, decrement } from "@/redux/searchSlice";

interface WhoItemProps {
    type: "adults" | "children" | "infants" | "pets";
    label: string;
    sub: string;
}

export default function WhoDropInput({ type, label, sub }: WhoItemProps) {
    const dispatch = useDispatch();
    const value = useSelector((state: RootState) => state.search.who[type]);

    return (
        <div className="flex justify-between items-center py-6 pe-1">
            <div className="flex flex-col">
                <span>{label}</span>
                <span className="text-sm text-gray-500">{sub}</span>
            </div>

            <div className="flex gap-3 items-center">
                {/* Minus */}
                <button
                    onClick={() => dispatch(decrement(type))}
                    disabled={value === 0}
                    className={`rounded-full border w-8 h-8 flex justify-center items-center 
            ${value === 0 ? "border-gray-300 text-gray-300 cursor-not-allowed" : "border-black cursor-pointer"}`}
                >
                    -
                </button>

                <div>{value}</div>

                <button
                    onClick={() => dispatch(increment(type))}
                    className="cursor-pointer rounded-full border border-black w-8 h-8 flex justify-center items-center"
                >
                    +
                </button>
            </div>
        </div>
    );
}
