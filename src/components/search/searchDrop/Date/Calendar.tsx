'use client';
import CalendarMonth from "./CalendarMonth";

interface CalendarProps {
    currentMonth: number;
    currentYear: number;
}

export default function Calendar({ currentMonth, currentYear }: CalendarProps) {
    const nextMonth = (currentMonth + 1) % 12;
    const nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear;

    return (
        <div className="flex gap-4 justify-center">
            {/* Tháng hiện tại */}
            <CalendarMonth year={currentYear} month={currentMonth} />

            {/* Tháng tiếp theo */}
            <CalendarMonth year={nextMonthYear} month={nextMonth} />
        </div>
    );
}
