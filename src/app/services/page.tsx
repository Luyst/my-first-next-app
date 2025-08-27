"use client"
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { apiFetch } from "@/lib/api";
import { SectionType } from "@/types/Room";
import { useQuery } from "@tanstack/react-query";
export default function ServicesPage() {

    const { data, error, isLoading } = useQuery<{ sections: SectionType[] }>({
        queryKey: ["service"],
        queryFn: () => apiFetch("/api/serviceApi")
    }

    )
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong</p>;
    console.log(data?.sections[0])
    return (
        <main className="mt-26">
            <section className="suggest-area ">

                <h2 className="text-xl font-semibold mx-12 pt-8 mb-3.5">
                    {data?.sections[0].title}
                </h2>
                <div className="overflow-hidden mx-12">
                    <div className="scroller-service">
                        {data?.sections[0].listings.map((listing) => (
                            <Card key={listing.id} listing={listing} />
                        ))}
                    </div>
                </div>
            </section>

            {data?.sections.map((section) => (
                <Section key={section.id} section={section} />
            ))}
        </main>
    );
}
