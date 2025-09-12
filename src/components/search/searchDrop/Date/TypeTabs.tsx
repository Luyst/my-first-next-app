
const tabs = ["Dates", "Months", "Flexible"];

export default function DateTypeTabs() {
    return (
        <div className="time-tab w-full pb-1.5 flex items-center justify-center">
            <div className="flex flex-row items-center px-1 bg-gray-200 rounded-full">
                <div className="grid grid-cols-3 text-sm font-medium [&>*]:cursor-pointer">
                    {tabs.map((tab, i) => (
                        <div
                            key={tab}
                            className={`px-6 py-1.5 my-1 border border-transparent mx-0.5 hover:bg-black/5 rounded-full text-center ${i === 0 ? "bg-white me-0.5" : ""
                                }`}
                        >
                            {tab}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
