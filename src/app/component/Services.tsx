import React from 'react'
import Image from 'next/image'

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 ">
      <div className="text-3xl font-bold mb-8">Services</div>
      <div className="text-lg font-medium mb-12 text-center">
        Nurturing your Mental Wellness
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Service Card */}
        <div className="w-[588px] h-[461px] bg-gray-100 shadow-md rounded-lg">
          <div className="flex flex-col p-5 space-y-4">
            <div className="flex items-center mb-4">
              <Image
                src="/service1.png"
                alt="Service Image"
                width={560}
                height={118}
                className="rounded-md"
              />
            </div>
            <div className="text-left">
              <div className="font-medium text-xl">The Exploration Session</div>
              <span className="text-gray-600">
                A free meeting to discuss your concerns and explore potential solutions with our qualified psychologist.
              </span>
            </div>
            <div className="mt-4">
              <ul className="list-disc list-inside">
                <li>Discuss your concerns and challenges in a safe and confidential space.</li>
                <li>Gain a deeper understanding of your thoughts, feelings, and behaviors.</li>
                <li>Ask questions and get a sense of the therapeutic process.</li>
                <li>Learn about different treatment options and resources available.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Another Service Card */}
        <div className="w-[588px] h-[461px] bg-gray-100 shadow-md rounded-lg">
          <div className="flex flex-col p-5 space-y-4">
            <div className="flex items-center mb-4">
              <Image
                src="/service2.png"
                alt="Service Image"
                width={560}
                height={118}
                className="rounded-md"
              />
            </div>
            <div className="text-left">
              <div className="font-medium text-xl">The Clarity and Action Sessions (2-session pack)</div>
              <span className="text-gray-600">
              Tackle specific concerns and gain immediate tools for a happier, healthier you with our 
              C&A sessions. This two-session pack equips you with practical strategies to navigate life&apos;s challenges with newfound strength and clarity.
              </span>
            </div>
            <div className="mt-4">
              <ul className="list-disc list-inside">
                <li>Reduced stress or anxiety related to the specific issue.</li>
                <li>Increased self-awareness and confidence.</li>
                <li>Improved communication skills for personal or professional life.</li>
                <li>A sense of direction to continue making positive changes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Another Service Card */}
        <div className="w-[588px] h-[461px] bg-gray-100 shadow-md rounded-lg">
          <div className="flex flex-col p-5 space-y-4">
            <div className="flex items-center mb-4">
              <Image
                src="/service3.png"
                alt="Service Image"
                width={560}
                height={118}
                className="rounded-md"
              />
            </div>
            <div className="text-left">
              <div className="font-medium text-xl">Deep Dive Therapy Sessions (3-Session pack)</div>
              <span className="text-gray-600">
              This offers a comprehensive approach to unlock your resilience. Over three personalized sessions,
               we&apos;ll work collaboratively to identify areas for improvement and develop effective coping mechanisms for 
               navigating life&apos;s uncertainties.
              </span>
            </div>
            <div className="mt-4">
              <ul className="list-disc list-inside">
                <li>Learn and practice effective coping mechanisms for managing stress and anxiety.</li>
                <li>Develop a personalized plan for long-term emotional well-being.</li>
                <li>Strengthen emotional intelligence and communication skills.</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Another Service Card */}
        <div className="w-[588px] h-[461px] bg-gray-100 shadow-md rounded-lg">
          <div className="flex flex-col p-5 space-y-4">
            <div className="flex items-center mb-4">
              <Image
                src="/service4.png"
                alt="Service Image"
                width={560}
                height={118}
                className="rounded-md"
              />
            </div>
            <div className="text-left">
              <div className="font-medium text-xl">The Complete Wellness Package: 4-Session Recovery Path</div>
              <span className="text-gray-600">
                This intensive package provides the time and support necessary to develop effective coping mechanisms,
                 build resilience, and navigate the road to lasting well-being through our tailored system for Cognitive Behavioral Therapy.
              </span>
            </div>
            <div className="mt-4">
              <ul className="list-disc list-inside">
                <li>Building self-esteem, resilience, and healthy coping skills.</li>
                <li>Exploring root causes of addiction or other emotional issues.</li>
                <li>Guidance and support for navigating difficult life transitions.</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
