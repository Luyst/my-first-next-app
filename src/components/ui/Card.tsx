import { ListingType } from "@/types/Room";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

interface CardProps {
    listing: ListingType;
}

export function Card({ listing }: CardProps) {
    return (
        <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`/room/${listing.id}`}
            className="flex flex-col shadow"
        >
            <section className="hooms-image-container relative">
                <Image
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="..."
                    src={listing.images[0]}
                    alt={listing.title}
                    width={400}
                    height={176}
                    className="w-full object-cover rounded-2xl aspect-imagecard"
                />


                <div className="absolute top-0 left-0 size-full grid grid-cols-3 grid-rows-3 p-3 cursor-pointer">
                    <div className="self-start grid row-span-1 grid-flow-col col-span-3 gap-2">
                        {listing.tags.length > 0 && (
                            <>
                                <span className="favorite flex items-center text-start justify-center p-1.5 text-xs rounded-full font-medium bg-white/80 shadow-md">
                                    Guest favourite
                                </span>
                                <span className="relative flex items-center justify-center hover:scale-110 transition-transform"> {/* viền */}
                                    <FaRegHeart className="absolute text-xl text-white" />
                                    <FaHeart className="text-xl text-black/60" />
                                </span>
                            </>
                        )}

                    </div>
                </div>
            </section>

            <section className="hooms-simple-info mt-2 grid gap-1">
                <span className="text-sm">{listing.title}</span>


                <span className="text-xs flex items-center text-gray-500">
                    <span>
                        {listing.currency}
                        {listing.pricePerNight} for a night
                    </span>
                    <span className="text-[#c1c1c1] font-bold">&nbsp;·&nbsp;</span>
                    <span className="flex items-center gap-[2.5px]">
                        <FaStar className="text-[0.5rem]" />
                        <span>{listing.rating}</span>
                    </span>
                </span>
            </section>
        </Link>
    );
}
