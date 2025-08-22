"use client";

import React from "react";
import { cn } from "@/lib/utils";

type InputProps = {
    title?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
    title,
    type = "text",
    placeholder,
    className,

    ...props
}: InputProps) {
    const base =
        "flex flex-col items-start rounded-full transition-colors duration-300 cursor-pointer";

    return (
        <label className={cn(base, "py-3 px-8", className)}>
            {title && (
                <span className=" text-xs font-semibold text-gray-700">
                    {title}
                </span>
            )}
            <input
                type={type}
                placeholder={placeholder}
                className="w-full text-gray-900 placeholder-gray-500 focus:outline-none bg-transparent cursor-pointer"
                {...props}
            />
        </label>
    );
}
