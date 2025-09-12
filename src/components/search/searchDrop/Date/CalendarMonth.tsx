

import { getAllDaysOfMonth, getStartIndex, isPastDate } from '@/lib/utils/dateUtils';
import { cn } from '@/lib/utils/utils';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';


interface CalendarMonthProps {
    year: number;
    month: number; // 0-11
}

export default function CalendarMonth({ year, month }: CalendarMonthProps) {
    const dispatch = useDispatch()
    const { checkIn, checkOut } = useSelector((state: RootState) => state.search.when)
    const days = getAllDaysOfMonth(year, month);
    const startIndex = getStartIndex(year, month);


    return (
        <div className="grid grid-cols-7 w-full mx-6.75 gap-0.5 text-sm font-medium text-center">
            {Array.from({ length: startIndex }).map((_, idx) => (
                <div key={`pad-${idx}`} />
            ))}

            {days.map((day) => {
                const isPast = isPastDate(year, month, day);

                return (
                    <div
                        key={day}
                        className={cn(
                            "py-2 rounded-full aspect-square text-center flex items-center justify-center",
                            isPast
                                ? "text-gray-500 cursor-not-allowed"
                                : "text-gray-700 hover:border-2 cursor-pointer",
                            checkIn === new Date(year, month, day).toISOString() || checkOut === new Date(year, month, day).toISOString()
                                ? "bg-black text-white border-2 border-black"
                                : "bg-transparent border-2 border-transparent"
                        )}
                        onClick={() => {
                            const selectedDate = new Date(year, month, day);

                            dispatch({
                                type: 'search/setWhen',
                                payload: {
                                    checkIn: selectedDate.toISOString(),
                                    checkOut: selectedDate.toISOString(),
                                }
                            });
                        }}
                    >
                        {day}
                    </div>
                );
            })}
        </div>
    );
}
