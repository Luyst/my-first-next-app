
export function getAllDaysOfMonth(year: number, month: number): number[] {
    const date = new Date(year, month, 1);
    const days: number[] = [];
    while (date.getMonth() === month) {
        days.push(date.getDate());
        date.setDate(date.getDate() + 1);
    }
    return days;
}


export function getStartIndex(year: number, month: number): number {
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    return (firstDayOfWeek + 6) % 7;
}


export function getMonthName(year: number, month: number, locale = 'en'): string {
    const date = new Date(year, month, 1);
    return date.toLocaleString(locale, { month: 'long' });
}

export function isPastDate(year: number, month: number, day: number): boolean {
    const currentDate = new Date(year, month, day);
    const today = new Date();
    return currentDate < today;
}