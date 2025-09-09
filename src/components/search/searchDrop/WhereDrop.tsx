import Tag from "@/components/ui/Tag";
import { FiNavigation } from "react-icons/fi";
import { FaBuilding, FaLandmark } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";

const destinations = [
    {
        icon: <FiNavigation />,
        title: "Nearby",
        subtitle: "Find what’s around you",
        color: "blue",
        link: "/nearby",
    },
    {
        icon: <FaBuilding />,
        title: "Hanoi, Vietnam",
        subtitle: "Because your wishlist has stays in Hanoi",
        color: "red",
        link: "/hanoi",
    },
    {
        icon: <MdLocationCity />,
        title: "Ho Chi Minh City, Vietnam",
        subtitle: "Because your wishlist has stays in Ho Chi Minh City",
        color: "blue",
        link: "/hcmc",
    },
    {
        icon: <FaLandmark />,
        title: "Bangkok, Thailand",
        subtitle: "For sights like Grand Palace",
        color: "green",
        link: "/bangkok",
    },
    {
        icon: <FaBuilding />,
        title: "Hoi An, Vietnam",
        subtitle: "For its stunning architecture",
        color: "yellow",
        link: "/hoian",
    },
    {
        icon: <MdLocationCity />,
        title: "Paris, France",
        subtitle: "For its bustling nightlife",
        color: "blue",
        link: "/paris",
    }, {
        icon: <MdLocationCity />,
        title: "Paris, France",
        subtitle: "For its bustling nightlife",
        color: "blue",
        link: "/paris",
    }, {
        icon: <MdLocationCity />,
        title: "Paris, France",
        subtitle: "For its bustling nightlife",
        color: "blue",
        link: "/paris",
    }, {
        icon: <MdLocationCity />,
        title: "Paris, France",
        subtitle: "For its bustling nightlife",
        color: "blue",
        link: "/paris",
    }, {
        icon: <MdLocationCity />,
        title: "Paris, France",
        subtitle: "For its bustling nightlife",
        color: "blue",
        link: "/paris",
    }, {
        icon: <MdLocationCity />,
        title: "Paris, France",
        subtitle: "For its bustling nightlife",
        color: "blue",
        link: "/paris",
    }, {
        icon: <MdLocationCity />,
        title: "Paris, France",
        subtitle: "For its bustling nightlife",
        color: "blue",
        link: "/paris",
    }, {
        icon: <MdLocationCity />,
        title: "Paris, France",
        subtitle: "For its bustling nightlife",
        color: "blue",
        link: "/paris",
    },
];

export default function WhereDrop() {
    return (
        <div className="date-drop size-full flex flex-col  bg-white py-8 px-2 rounded-4xl shadow-xl   overflow-y-auto">
            <div className="px-6 mb-1 text-xs font-medium">
                Suggested destinations
            </div>
            {destinations.map((item, i) => (
                <Tag
                    key={i}
                    icon={item.icon}
                    title={item.title}
                    subtitle={item.subtitle}
                    color={item.color}

                />
            ))}
        </div>
    );
}
