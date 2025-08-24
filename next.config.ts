import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    images: {
        domains: ["a0.muscache.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "source.unsplash.com",
            },
        ],
    },
};

export default nextConfig;
