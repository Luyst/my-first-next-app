export default function Weekday() {
    const days: string[] = ["M", "T", "W", "T", "F", "S", "S"];
    return (
        <div className="relative w-full flex items-center justify-evenly mb-2.5">
            {[0, 1].map((i) => (
                <ol
                    key={i}
                    className="grid grid-cols-7 w-full gap-y-2 px-6.75 text-gray-500 text-sm text-center"
                >
                    {days.map((d, idx) => (
                        <li key={`${d}-${idx}`}>{d}</li>
                    ))}
                </ol>
            ))}
        </div>
    );
}
