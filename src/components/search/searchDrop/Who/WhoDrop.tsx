import WhoDropInput from "./WhoDropInput";

const guestTypes = [
    { type: "adults", label: "Adults", sub: "Ages 13 or above" },
    { type: "children", label: "Children", sub: "Ages 2–12" },
    { type: "infants", label: "Infants", sub: "Under 2" },
    { type: "pets", label: "Pets", sub: "Bringing a pet?" },
] as const;

export default function WhoDrop() {
    return (
        <div className="date-drop size-full flex flex-col bg-white py-4 px-8 rounded-4xl shadow-xl overflow-hidden">
            <div className="px-1.5">

                {guestTypes.map(({ type, label, sub }) => (
                    <WhoDropInput key={type} type={type} label={label} sub={sub} />
                ))}
            </div>
        </div>
    );
}
