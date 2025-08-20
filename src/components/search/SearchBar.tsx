"use client";
// Importing React
import React, { useState, FocusEvent } from "react";

// Importing Component
import Input from "@/components/search/Input";
interface SearchBarProps {
    onSearch: (params: {
        location: string;
        date: string;
        guests: number;
    }) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [highlight, setHighlight] = useState({ left: 0, width: 0 });

    const handleFocus = ({ currentTarget }: FocusEvent<HTMLLabelElement>) => {
        setHighlight({
            left: currentTarget.offsetLeft - 32,
            width: currentTarget.offsetWidth + 64,
        });
    };

    return (
        <section className="relative search-wrap flex items-center justify-start rounded-full  transition-all duration-300 shadow bg-white focus-within:bg-search-input-focus ">
            {/* Highlight */}
            <div
                className="absolute transition-bar top-0 h-full bg-white rounded-full shadow-lg  transition-all duration-500"
                style={{
                    left: highlight.left,
                    width: highlight.width,
                    zIndex: 0,
                }}
            />
            <div className="flex relative z-10 *:hover:bg-search-input-hover">
                <Input
                    title="Địa điểm"
                    type="text"
                    placeholder="Tìm kiếm sân chơi"
                />
                <Input title="Ngày" type="text" placeholder="Chọn ngày" />
                <Input title="Khách" type="text" placeholder="Thêm khách" />
            </div>
        </section>
    );
};

export default SearchBar;
