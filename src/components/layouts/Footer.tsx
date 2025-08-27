"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
export default function Footer() {
    return (
        <footer className=" bg-search-input mt-12  text-gray-700">
            {/* Top sections */}
            <div className="px-12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8  py-10">
                <div>
                    <h3 className="font-semibold text-black mb-3">Support</h3>
                    <ul className="space-y-3">
                        <li><Link href="#">Help Centre</Link></li>
                        <li><Link href="#">AirCover</Link></li>
                        <li><Link href="#">Anti-discrimination</Link></li>
                        <li><Link href="#">Disability support</Link></li>
                        <li><Link href="#">Cancellation options</Link></li>
                        <li><Link href="#">Report neighbourhood concern</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-black mb-3">Hosting</h3>
                    <ul className="space-y-3">
                        <li><Link href="#">Airbnb your home</Link></li>
                        <li><Link href="#">Airbnb your experience</Link></li>
                        <li><Link href="#">Airbnb your service</Link></li>
                        <li><Link href="#">AirCover for Hosts</Link></li>
                        <li><Link href="#">Hosting resources</Link></li>
                        <li><Link href="#">Community forum</Link></li>
                        <li><Link href="#">Hosting responsibly</Link></li>
                        <li><Link href="#">Join a free Hosting class</Link></li>
                        <li><Link href="#">Find a co-host</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-black mb-3">Airbnb</h3>
                    <ul className="space-y-3">
                        <li><Link href="#">2025 Summer Release</Link></li>
                        <li><Link href="#">Newsroom</Link></li>
                        <li><Link href="#">Careers</Link></li>
                        <li><Link href="#">Investors</Link></li>
                        <li><Link href="#">Gift cards</Link></li>
                        <li><Link href="#">Airbnb.org emergency stays</Link></li>
                    </ul>
                </div>
            </div>


            <div className="">
                <div className=" mx-auto flex flex-col md:flex-row justify-between items-center px-12 py-4 text-gray-700 gap-4">
                    <div className="grid grid-rows-2 items-center gap-2">
                        <span className="row-span-1">© 2025 Airbnb, Inc.</span>

                        <div>
                            <Link href="#">Privacy</Link>
                            <span>·</span>
                            <Link href="#">Terms</Link>
                            <span>·</span>
                            <Link href="#">Sitemap</Link>
                            <span>·</span>
                            <Link href="#">UK Modern Slavery Act</Link>
                            <span>·</span>
                            <Link href="#">Company details</Link>
                            <span>·</span>
                            <Link href="#">Airbnb UK Limited S.172 Statement</Link>
                            <span>·</span>
                            <Link href="#">Airbnb Payments UK Limited S.172 Statement</Link>
                        </div>
                    </div>


                    <div className="flex items-center gap-5">
                        <button className="flex items-center gap-1 hover:underline">
                            <RiGlobalLine size={14} /> English (GB)
                        </button>
                        <button className="hover:underline">£ GBP</button>
                        <div className="flex gap-4 text-lg">
                            <Link href="#"><FaFacebook /></Link>
                            <Link href="#"><FaInstagram /></Link>
                            <Link href="#"><FaTwitter /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
