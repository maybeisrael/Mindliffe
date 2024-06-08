import React from 'react';
import Image from 'next/image';

export default function Journey() {
  return (
    <div className="h-full flex flex-col items-center justify-center py-8 bage text-white">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">

        {/* Main Content */}
        <div className="max-w-[596px] md:max-w-none md:w-[596px]">
          <div className="font-dm-sans text-[60px] md:text-4xl font-bold leading-[80px] md:leading-[64px] text-left mb-8">
            The Journey of Healing Begins Here
          </div>
          <div className="mb-8">
            Obi Esiobu is a psychologist with over a decade of experience coordinating care concerning health and
            wellness, including providing support to individuals enabling the achievement of their goals towards
            improving their quality of life. Commencing his career in Nigeria, within a
            faith-based psychotherapeutic setting,
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
        <div className="flex items-center justify-center">
          <div className="h-[445px] md:h-[auto] w-[369px] md:w-[280px] lg:w-[369px] flex flex-col items-center justify-center bg-white rounded-md p-5">
            <div className="flex flex-col items-center">
              <div className="flex mt-3 mb-4">
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
