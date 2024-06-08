import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className="w-full h-[399px] bg-[#FFFCF6] flex flex-col md:flex-row md:space-x-4 p-4">
            <div className="flex-1 flex flex-col items-center justify-center mb-4 md:mb-0">
                <div className="flex items-center mb-4">
                    <Image
                        src="/Logo.png"
                        alt="Logo"
                        width={70}
                        height={70}
                        className="w-14 h-14"
                    />
                    <span className="ml-2 text-lg font-semibold">Mindlife</span>
                </div>
                <div className="text-2xl ml-2 w-52 h-10 font-dm-sans font-semibold leading-10  text-purple-700 mb-7">
                    “Your Sanctuary for Mental Health”
                </div>
                <div className="ml-2 py-4 text-center text-gray-600">
                    {/* Add an SVG icon here */}
                    themindlifebalance@gmail.com
                </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center mb-4 md:mb-0">
                <ul className="text-gray-800 space-y-2 text-left">
                    <li className="font-bold">Explore</li>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Testimonials</li>
                    <li>Book a session</li>
                </ul>
                <div className="flex mt-4 space-x-4">
                    <Image
                        src="/Insta.png"
                        alt="Instagram"
                        width={30}
                        height={30}
                        className="w-8 h-8"
                    />
                    <Image
                        src="/fb.png"
                        alt="Facebook"
                        width={30}
                        height={30}
                        className="w-8 h-8"
                    />
                    <Image
                        src="/Twiter.png"
                        alt="Twitter"
                        width={30}
                        height={30}
                        className="w-8 h-8"
                    />
                </div>
            </div>
            <div className="flex-1 flex flex-col items-left justify-center">
                <div className="font-bold text-lg mb-2">Book an appointment</div>
                <div className="text-gray-700 mb-4 text-left">
                    Let’s help you attain a state of mental wholeness, book a session with a trained professional today.
                </div>
                {/* Add a form here */}
            </div>
        </div>
    );
}
