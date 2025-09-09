import { useState } from "react"

export default function WhoDrop() {
    const [adults, setAdults] = useState(0)

    return (
        <div className="date-drop size-full flex flex-col bg-white py-3 px-8 rounded-4xl shadow-xl ">
            <div className="Adults flex justify-between items-center mb-4">
                <div className="flex flex-col">
                    <span>Adults</span>
                    <span className="subtitle text-gray-500 text-sm">Ages 13 or above</span>
                </div>
                <div className="quanlity flex gap-3 items-center">
                    {/* Minus button */}
                    <button
                        onClick={() => setAdults(adults - 1)}
                        disabled={adults === 0}
                        className={`rounded-full border w-8 h-8 flex justify-center items-center 
              ${adults === 0 ? "border-gray-300 text-gray-300 cursor-not-allowed" : "border-black cursor-pointer"}`}
                    >
                        -
                    </button>

                    {/* Value */}
                    <div>{adults}</div>

                    {/* Plus button */}
                    <button
                        onClick={() => setAdults(adults + 1)}
                        className="cursor-pointer rounded-full border border-black w-8 h-8 flex justify-center items-center"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}
