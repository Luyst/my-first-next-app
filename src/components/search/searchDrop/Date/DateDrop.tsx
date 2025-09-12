'use client';
import { useState } from "react";
import DateTypeTabs from "./TypeTabs";
import MonthHeader from "./MonthHeader";
import Weekday from "./Weekday";
import Calendar from "./Calendar";
import Options from "./Options";

export default function DateDrop() {
    const today = new Date();

    // state quản lý tháng + năm hiện tại
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());

    // function back/forward tháng
    const prevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    return (
        <div className="date-drop size-full flex flex-col w-full bg-white py-8.5 px-8 rounded-4xl overflow-scroll">
            <DateTypeTabs />

            <div className="Calender -mx-6.75" aria-label="Calender">
                {/* MonthHeader nhận state và function điều khiển */}
                <MonthHeader
                    currentMonth={currentMonth}
                    currentYear={currentYear}
                    prevMonth={prevMonth}
                    nextMonth={nextMonth}
                />

                <Weekday />

                {/* Calendar nhận props để hiển thị tháng hiện tại và tháng kế tiếp */}
                <Calendar
                    currentMonth={currentMonth}
                    currentYear={currentYear}
                />
            </div>

            <Options />
        </div>
    );
}
