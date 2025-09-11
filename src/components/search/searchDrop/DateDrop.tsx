import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaPlusMinus } from "react-icons/fa6";

export default function DateDrop() {
    // Tạo mảng giả lập ngày 1–30
    const days = Array.from({ length: 30 }, (_, i) => i + 1);

    return (
        <div className="date-drop size-full flex flex-col w-full bg-white py-8.5 px-8 rounded-4xl overflow-scroll">
            <div className="time-tab w-full pb-1.5 flex items-center justify-center ">
                <div className="flex flex-row items-center px-1 bg-gray-200 rounded-full ">
                    <div className="grid grid-cols-3 text-sm font-medium [&>*]:cursor-pointer">
                        <div className="px-6 py-1.5 my-1 border border-transparent me-0.5 bg-white rounded-full text-center">
                            Dates
                        </div>
                        <div className="px-6 py-1.5 my-1 border border-transparent mx-0.5 hover:bg-black/5 rounded-full text-center">
                            Months
                        </div>
                        <div className="px-6 py-1.5 my-1 border border-transparent ms-0.5 hover:bg-black/5 rounded-full text-center">
                            Flexible
                        </div>
                    </div>
                </div>
            </div>


            <div className="Calender -mx-6.75" aria-label="Calender">
                <div className="relative w-full flex items-center justify-evenly ">
                    <h2 className="month-left w-full my-5.5 text-center font-medium">
                        September 2025
                    </h2>
                    <h2 className="month-right w-full my-5.5 text-center font-medium">
                        October 2025
                    </h2>
                    <div className="absolute w-full p-7 top-1/2 flex justify-between -translate-y-1/2 text-xl text-gray-300 [&>*]:hover:text-black cursor-pointer">
                        <IoIosArrowBack />
                        <IoIosArrowForward />
                    </div>
                </div>


                <div className="relative w-full flex items-center justify-evenly mb-2.5">

                    <ol className="grid grid-cols-7  w-full gap-y-2 px-6.75 text-gray-500 text-sm text-center">
                        <li>M</li>
                        <li>T</li>
                        <li>W</li>
                        <li>T</li>
                        <li>F</li>
                        <li>S</li>
                        <li>S</li>
                    </ol>
                    <ol className="grid grid-cols-7  w-full gap-y-2 px-6.75 text-gray-500 text-sm text-center">
                        <li>M</li>
                        <li>T</li>
                        <li>W</li>
                        <li>T</li>
                        <li>F</li>
                        <li>S</li>
                        <li>S</li>

                    </ol>
                </div>

                <div className="relative w-full flex items-center justify-evenly ">

                    <div className="grid grid-cols-7 w-full mx-6.75 py-0.25 gap-0.5 text-sm font-medium text-center ">
                        {days.map((day) => (
                            <div
                                key={day}
                                className="py-2 rounded-full hover:border-2 cursor-pointer aspect-square text-center flex items-center justify-center"
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 w-full mx-6.75 text-sm text-center">
                        {days.map((day) => (
                            <div
                                key={day}
                                className="py-2 rounded-full hover:border-2  cursor-pointer aspect-square text-center flex items-center justify-center"
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full  my-3.5 px-1 text-sm ">
                <div className="flex justify-start gap-3  *:rounded-full *:px-3 *:py-1.5 *:cursor-pointer  *:text-xs">
                    <div className="bg-gray-100 border-black border-2">
                        Exact dates
                    </div>
                    <div className="flex items-center gap-1 border border-gray-300">
                        <FaPlusMinus />
                        <span>
                            1 day
                        </span>
                    </div>
                    <div className="flex items-center gap-1 border border-gray-300">

                        <FaPlusMinus />
                        <span>
                            2 day
                        </span>
                    </div>
                    <div className="flex items-center gap-1 border border-gray-300">
                        <FaPlusMinus />
                        <span>
                            3 day
                        </span>
                    </div>
                    <div className="flex items-center gap-1 border border-gray-300">
                        <FaPlusMinus />
                        <span>
                            7 day
                        </span>
                    </div>
                    <div className="flex items-center gap-1 border border-gray-300">
                        <FaPlusMinus />
                        <span>
                            14 day
                        </span>
                    </div>


                </div>
            </div>
        </div>
    );
}
