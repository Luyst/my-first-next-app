import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/components/layouts/header/Header";
import { cn } from "@/lib/utils";

// Tạo instance cho font
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"], // chọn các font weight cần dùng
    variable: "--font-roboto",     // nếu muốn dùng qua CSS
});


export const metadata: Metadata = {
    title: "Airbnb Service",
    description: "Search for locations, dates, and guests on Airbnb Clone.",
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
                <Header />
                <div className={cn("main-layout ")}>{children}</div>
            </body>
        </html>
    );
}
