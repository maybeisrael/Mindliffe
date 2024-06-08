import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div>
      <div className="p-5 px-7 flex flex-col md:flex-row items-center justify-between w-full h-auto md:h-[79px]">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={70}
            height={70}
            className="w-14 h-14" 
          />
          <div className="text-2xl ml-2 w-32 h-10 font-dm-sans font-semibold leading-10 text-left text-purple-700">
            Mindlife
          </div>
        </div>

        <ul className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Service</Link></li>
          <li><Link href="/testimonials">Testimonials</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <Link href="" passHref legacyBehavior>
          <a className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800">
            Book Appointment
          </a>
        </Link>
      </div>

      <div className="page flex flex-col mt-5 md:mt-5 px-4">
      <div className="relative w-full md:w-[680px] h-auto md:h-[373px] gap-[40px] top-[167px] md:left-[120px] right-0 md:right-[500px] mx-auto md:mx-0">
          <div className="flex items-center gap-2 mb-6">
            <Image
              src="/Vector.png"
              alt="Logo"
              width={10}
              height={10}
              className="w-5 h-5"
            />
            <span>Therapy and Consulting Available Globally</span>
          </div>
          <div className="font-dm-sans text-4xl md:text-5xl font-medium leading-[50px] md:leading-[75px] text-left text-[#1C1C1C] mb-6">
            Embracing Serenity in Life&apos;s Chaotic Moments
          </div>
          <div className="font-dm-sans text-base md:text-lg font-normal leading-6 md:leading-8 text-left text-[#696969] mb-6">
            Discover how our therapeutic approach can help you find inner peace
            and resilience, even in the midst of life’s challenging moments
          </div>
          <div>
            <button className="w-full md:w-[333px] h-[64px] px-[60px] py-[20px] gap-[8px] rounded-[12px] bg-[#99008A] shadow-[inset_0_6px_18px_0px_#CB03B7,0_1px_5px_0px_#7E0172] text-white">
              Book your first session
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
