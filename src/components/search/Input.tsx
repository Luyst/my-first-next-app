"use client";
import React from "react";

type InputProps = {
    title?: string;
    type?: string;
    placeholder?: string;

    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
    title,
    type,
    placeholder,

    onChange,
    onFocus,
}) => {
    return (
        <label className="input-wrap flex flex-col items-start py-4 px-8 text-sm rounded-full   transition-colors duration-300">
            <span className="input-title text-gray-700 text-sm">
                {title ? title : ""}
            </span>
            <input
                type={type}
                placeholder={placeholder}
                className="flex-grow transition-colors duration-300   focus:outline-none"
                onChange={onChange}
                onFocus={onFocus}
            />
        </label>
    );
};

export default Input;
