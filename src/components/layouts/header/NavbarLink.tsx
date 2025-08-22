"use client";

import Link from "next/link";

interface NavLinkVideoProps {
    href: string;
    label: string;
    videoSrcMov: string;
    videoSrcWebm: string;
}

export function NavbarLink({
    href,
    label,
    videoSrcMov,
    videoSrcWebm,
}: NavLinkVideoProps) {
    return (
        <Link
            href={href}
            className="flex flex-row items-center gap-3 text-sm font-medium group transition-colors"
        >
            <span className="video-container relative size-9 overflow-hidden group-hover:scale-120 transition-transform duration-500">
                <video
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    className="absolute w-full h-full object-contain scale-200 transition duration-500"
                >
                    <source src={videoSrcMov} type='video/mp4; codecs="hvc1"' />
                    <source src={videoSrcWebm} type="video/webm" />
                </video>
            </span>
            <span className="font-semibold">{label}</span>
        </Link>
    );
}
