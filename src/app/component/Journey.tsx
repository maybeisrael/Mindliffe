import React from 'react';
import Image from 'next/image';

export default function Journey() {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-3 text-white bg-[url('/Rectangle.png')] bg-cover bg-center h-[1000px] md:h-[800px]">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 bg-opacity-50 p- rounded-lg">

        {/* Main Content */}
        <div className=" max-w-full h-[550px] md:h-[600px] md:w-[800px] md:mt-6">
          <div className="font-dm-sans text-4xl md:text-[60px] font-bold leading-[64px] md:leading-[80px] text-left mb-8">
            The Journey of Healing Begins Here
          </div>

          <div className="mb-8">
            Obi Esiobu is a psychologist with over a decade of experience coordinating care concerning health and
            wellness, including providing support to individuals enabling the achievement of their goals towards
            improving their quality of life. Commencing his career in Nigeria, within a faith-based psychotherapeutic setting,
            his expertise has since expanded to an international clientele, guiding individuals towards full recovery
            from substance abuse, family disorientation, workplace anxiety, and other mental health concerns.
            Obi&apos;s dedication to his patients extends beyond technical expertise. He is known for his warm and
            welcoming demeanor, fostering a safe and supportive environment for individuals and their families.
          </div>
          <div className="mb-8">
            <h1 className="text-2xl md:text-xl font-semibold mb-2">Specialization</h1>
            <h2 className="mb-2 text-base md:text-sm">Anger Management, Anxiety, Christian Counselling, Depression, Family & Relationships, Loss & Grief,
              Substance Use & Addictions Recovery, PTSD, Self Esteem, Stress & Burnout, Trauma</h2>
            <h2 className="text-base md:text-sm">Mode of Service - Virtual</h2>
          </div>
        </div>

        {/* Badge Section */}
        <div className="flex  px-4 mt-8 md:mt-0">
          <div className="h-[350px] md:h-auto w-auto lg:w-[369px] flex flex-col items-center justify-center bg-white rounded-md p-5">
            <div className="flex flex-col items-center">
              <div className="flex h-[260px] md:h-[360px] mt-5">
                <Image
                  src="/journey.png"
                  alt="badge"
                  width={300}
                  height={360}
                />
              </div>
              <div className="text-center text-orange-400">
                <div className="font-bold text-lg md:text-base">Dr. Obiajulu Esiobu</div>
                <span className="text-sm md:text-xs">Therapist - 7 years</span>
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <Image
                    src="/linkedin.png"
                    alt="badge"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/twitter.png"
                    alt="badge"
                    width={30}
                    height={30}
                  />
                  <Image
                    src="/instagram.png"
                    alt="badge"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
