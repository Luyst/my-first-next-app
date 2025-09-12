
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/components/layouts/header/Header";
import { cn } from "@/lib/utils/utils";
import AllProvider from "./providers";
import Footer from "@/components/layouts/Footer";


// Tạo instance cho font
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-roboto",
});


export const metadata: Metadata = {
    title: "Airbnb Clone",
    description: "Search for locations, dates, and guests on Airbnb Clone.",
    icons: {
        icon: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Favicons/original/0d189acb-3f82-4b2c-b95f-ad1d6a803d13.png?im_w=240",
        apple: "https://a0.muscache.com/airbnb/static/icons/apple-touch-icon-76x76-3b313d93b1b5823293524b9764352ac9.png",
        shortcut: "https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-Favicons/original/0d189acb-3f82-4b2c-b95f-ad1d6a803d13.png?im_w=240",
    }
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${roboto.className} antialiased`}  // áp dụng font Roboto
            >


                <AllProvider>
                    <Header />
                    <div className={cn("main-layout px-12 overflow-x-hidden")}>{children}</div>
                    <Footer />
                </AllProvider>

            </body>
        </html>
    );
}
