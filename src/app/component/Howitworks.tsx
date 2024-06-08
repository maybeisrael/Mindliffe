import React from 'react'
import Image from 'next/image'

export default function Howitworks() {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center text-3xl font-bold py-4">HOW IT WORKS</div>
      <div className="text-center text-xl font-semibold mb-4">Path to Healing</div>
      <div className="mt-3 mb-8 text-center">
        At Mindlife, we believe that everyone has the power to overcome challenges and achieve personal growth.
        Our Therapy Packs offer you a transformative journey towards mental and emotional well-being. With dedicated
        sessions, our experienced and compassionate therapists will guide you on a path of self-discovery, resilience, and healing.
        <span className='flex'>Through our evidence-based therapeutic approach, we&apos;ll help you gain a deeper understanding of yourself,
          unraveling the root causes of any emotional distress or psychological barriers. Each session is tailored to
          your unique needs, ensuring a safe and non-judgmental space for you to explore and express your thoughts and feelings.</span>
      </div> 

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="text-lg font-semibold mb-2">Define Your Need</div>
          <div className="text-gray-600 mb-4">Start by defining your counselling needs and the type of support you’re seeking</div>
          <Image
            src="/how1.png"
            alt="Service Image"
            width={560}
            height={118}
            className="rounded-md"
          />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="text-lg font-semibold mb-2">Select Your Preferred Time</div>
          <div className="text-gray-600 mb-4">Pick a convenient date and time slot from our availability to schedule your session</div>
          <Image
            src="/how2.png"
            alt="Service Image"
            width={560}
            height={118}
            className="rounded-md"
          />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="text-lg font-semibold mb-2">Book Your Session</div>
          <div className="text-gray-600 mb-4">Book your session, and we’ll send you a confirmation, so you’ll all set to embark on your journey to well-being</div>
          <Image
            src="/how3.png"
            alt="Service Image"
            width={560}
            height={118}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center mt-8">
  <div className="text-left mr-4 w-full md:w-auto">
    <div className="text-4xl font-bold mb-2 font-dm-sans leading-10 md:leading-72 text-left w-full md:w-[367px] h-[144px]">
      Our <span className="text-purple-700">Success</span> <span className='flex py-1'>Stories</span>
    </div>

    <div className="text-gray-600 font-dm-sans text-base font-normal leading-6 text-left w-full md:w-[433px] h-[212px]" style={{ gap: '20px' }}>
      Here are some of the testimonies of our patients who we have helped into becoming a better version of themselves.
    </div>
  </div>

  <div className="bg-gray-100 rounded-lg w-full md:w-[588px] h-[323px] gap-3 flex">
    <Image
      src="/portraitw.png"
      alt="Service Image"
      width={295}
      height={375}
      className=""
    />
    <div>
      <div className="text-lg font-semibold mt-5 py-5">Eniola Salami</div>
      <div className="text-gray-600">Student</div>
      <div className="">Here are some of the testimonies of our patients who we have helped into becoming a better version of themselves.</div>
      <div className='py-2'>
        <Image
          src="/Rating.png"
          alt="Service Image"
          width={105}
          height={35}
          className=""
        />
      </div>
      <div className='flex space-x-3 items-center'>
        <button>
          <Image
            src="/Arrowp.png"
            alt="Service Image"
            width={55}
            height={55}
            className=""
          />
        </button>
        <button>
          <Image
            src="/Arrow.png"
            alt="Service Image"
            width={55}
            height={55}
            className=""
          />
        </button>
      </div>
    </div>
  </div>
</div>

</div>


      
    
  )
}
