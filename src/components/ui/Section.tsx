import { SectionType } from "@/types/Room";
import { Card } from "./Card";

interface SectionProps {
    section: SectionType;
}

export function Section({ section }: SectionProps) {
    return (
        <div>
            <h2 className="text-xl font-semibold mx-12 pt-8 mb-3.5">
                {section.title}
            </h2>
            <div className="overflow-hidden mx-12">
                <div className="scroller">
                    {section.listings.map((listing) => (
                        <Card key={listing.id} listing={listing} />
                    ))}
                </div>
            </div>
        </div>
    );
}
