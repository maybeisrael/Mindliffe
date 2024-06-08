"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Dropdown from './Dropdown';


export default function Faq() {
    return (
        <div className='min-h-screen w-full py-6 pb-8 flex flex-col items-center justify-center'>
            <div className="text-center">
                <div className="text-3xl font-bold mb-2">Faq</div>
                <div className="text-lg">We have answers to your questions</div>
            </div>

            {/* FAQ items */}
            <Dropdown />

            {/* End of FAQ items */}

            <div className="mt-8 items-center">
                <div className="font-dm-sans text-4xl font-bold leading-[72px] w-[945px] h-[144px] text-center">
                    Discover Strength, Discover Hope
                    <div className="mb-4">Your Guide to <span className="font-bold text-custom-purple">Inner Peace </span>
                        and Resilience</div>
                </div>


                <div className="flex justify-center items-center mt-5 mb-3">
  <Link href="/" passHref legacyBehavior>
    <a className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800">
      Book Appointment
    </a>
  </Link>
</div>

            </div>
        </div>
    )

}
