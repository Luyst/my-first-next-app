"use client";

import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import { SectionType } from "@/types/Room";
import { Section } from "@/components/ui/Section";
export default function ExperiencesPage() {

    const { data, error, isLoading } = useQuery<{ sections: SectionType[] }>({
        queryKey: ["experients"],
        queryFn: () => apiFetch("/api/experients"),
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong</p>;

    return (
        <main className="home-page mt-26">
            {data?.sections.map((section) => (
                <Section key={section.id} section={section} />
            ))}
        </main>
    );
}
