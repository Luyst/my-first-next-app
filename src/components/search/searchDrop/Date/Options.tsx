import { FaPlusMinus } from "react-icons/fa6";

export default function FlexibilityOptions() {
    const options: number[] = [1, 2, 3, 7, 14];
    return (
        <div className="w-full my-3.5 px-1 text-sm">
            <div className="flex justify-start gap-3 *:rounded-full *:px-3 *:py-1.5 *:cursor-pointer *:text-xs">
                <div className="bg-gray-100 border-black border-2">Exact dates</div>
                {options.map((day) => (
                    <div
                        key={day}
                        className="flex items-center gap-1 border border-gray-300"
                    >
                        <FaPlusMinus />
                        <span>{day} day</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
