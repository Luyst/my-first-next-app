"use client";

import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import { Section } from "@/types/Room";
import Image from "next/image";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import Link from "next/link";
export default function HomePage() {
    const { data, error, isLoading } = useQuery<{ sections: Section[] }>({
        queryKey: ["rooms"],
        queryFn: () => apiFetch("/api/rooms"),
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong</p>;

    return (
        <main className="home-page mt-26">
            {data?.sections.map((section) => (
                <div className="" key={section.id}>
                    <h2 className="text-xl font-semibold mx-12 pt-8 mb-3.5">{section.title}</h2>
                    <div className="overflow-hidden mx-12">
                        <div className="scroller scroll-snap-x ">

                            {section.listings.map((listing) => (
                                <Link target="_blank" rel="noopener noreferrer" href={`/room/${listing.id}`} key={listing.id} className="flex flex-col shadow ">
                                    <section className="hooms-image-container relative">

                                        <Image
                                            loading="lazy"
                                            placeholder="blur" blurDataURL="..."
                                            src={listing.images[0]}
                                            alt={listing.title}
                                            width={400}
                                            height={176}
                                            className="w-full object-cover rounded-2xl aspect-imagecard "
                                        />
                                        <div className="absolute top-0 left-0 size-full grid grid-cols-3 grid-rows-3  rounded-full p-3 cursor-pointer">

                                            <div className="test self-start grid row-span-1 grid-flow-col  col-span-3 gap-2 ">
                                                <span className="favorite flex items-center text-start justify-center p-1.5  text-xs rounded-full  font-medium  bg-white/80  shadow-md">
                                                    Guest favourite
                                                </span>
                                                <span className="relative flex items-center justify-center hover:scale-110 transition-transform">
                                                    {/* viền */}
                                                    <FaRegHeart className="absolute text-xl text-white" />
                                                    {/* fill */}
                                                    <FaHeart className="text-xl text-black/60" />
                                                </span>
                                            </div>

                                        </div>
                                    </section>

                                    <section className="hooms-simple-info mt-2 grid align-middle gap-1">
                                        <span className="text-sm ">{listing.title}</span>
                                        <span className="text-xs align-middle flex items-center text-gray-500">
                                            <span >

                                                ${listing.pricePerNight} for a night
                                            </span>
                                            <span className=" text-[#c1c1c1] font-bold" aria-hidden="true">&nbsp;·&nbsp;</span>
                                            <span className="flex items-center gap-[2.5px]">

                                                <span >
                                                    <FaStar className="text-[0.5rem]" />
                                                </span>
                                                <span className="align-middle">
                                                    {listing.rating}
                                                </span>
                                            </span>
                                        </span>
                                    </section>

                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            ))}
        </main>
    );
}
