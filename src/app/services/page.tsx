// app/services/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Airbnb Service",
    description: "Search for locations, dates, and guests on Airbnb Clone.",
};

export default function ServicesPage() {
    return (
        <main className="z-90">
            <div className="font-sans service-page flex flex-col min-h-screen">
                <h1 className="text-2xl font-bold">Services</h1>
                <p className="text-gray-600">
                    Explore our services to enhance your stay.
                </p>
            </div>
        </main>
    );
}
