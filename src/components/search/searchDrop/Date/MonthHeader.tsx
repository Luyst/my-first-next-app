'use client';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

interface MonthHeaderProps {
    currentMonth: number;
    currentYear: number;
    prevMonth: () => void;
    nextMonth: () => void;
}

export default function MonthHeader({ currentMonth, currentYear, prevMonth, nextMonth }: MonthHeaderProps) {
    const nextMonthIndex = (currentMonth + 1) % 12;
    const nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear;

    return (
        <div className="relative w-full flex items-center justify-evenly">
            <h2 className="w-full my-5.5 text-center font-medium">
                {monthNames[currentMonth] + ' ' + currentYear}
            </h2>
            <h2 className="w-full my-5.5 text-center font-medium">
                {monthNames[nextMonthIndex] + ' ' + nextMonthYear}
            </h2>

            <div className="absolute w-full p-7 top-1/2 flex justify-between -translate-y-1/2 text-xl text-gray-300 [&>*]:hover:text-black cursor-pointer">
                <IoIosArrowBack onClick={prevMonth} />
                <IoIosArrowForward onClick={nextMonth} />
            </div>
        </div>
    );
}
