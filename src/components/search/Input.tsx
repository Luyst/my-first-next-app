"use client";

import React from "react";
import { cn } from "@/lib/utils";

type InputProps = {
    title?: string;
    readOnlyMode?: boolean; // 👈 thêm prop này
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
    title,
    type = "text",
    placeholder,
    className,
    readOnlyMode = false,
    ...props
}: InputProps) {
    const base =
        "flex flex-col items-start rounded-full transition-colors duration-300";

    return (
        <label className={cn(base, "py-3 px-8 cursor-pointer", className)}>
            {title && (
                <span className="text-xs font-medium text-gray-700">
                    {title}
                </span>
            )}
            <input
                type={type}
                placeholder={placeholder}
                readOnly={readOnlyMode}
                className={cn(
                    "w-full text-sm  placeholder-gray-500 focus:outline-none bg-transparent",
                    readOnlyMode && "cursor-pointer select-none font-medium text-black",
                )}
                {...props}
            />
        </label>
    );
}
