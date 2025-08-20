"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
export function DarkModeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        >
            {dark ? (
                <FaSun className="w-5 h-5 text-yellow-500" />
            ) : (
                <FaMoon className="w-5 h-5 text-gray-800" />
            )}
        </button>
    );
}
