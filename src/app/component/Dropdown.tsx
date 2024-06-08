import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'
import React, { useState } from 'react'

function Dropdown() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleDropdown = (index : number) => {
        setOpenIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <div className='min-h-screen flex flex-col items-center px-4'>
            <div className="relative flex flex-col items-center w-full md:w-[640px] lg:w-[940px] mb-4  text-color: '#99008A' rounded-lg">
    <button onClick={() => toggleDropdown(0)} className="bg-white border-2 p-4 w-full flex items-center justify-between font-bold text-lg
     rounded-lg tracking-wider border-gray-50 active:border-white duration-300 active:text-white" style={{ fontFamily: 'DM Sans', fontSize: '20px', fontWeight: 500, lineHeight: '26.04px', letterSpacing: '-0.04em', textAlign: 'left',color: '#99008A'  }}>
        What can therapy help with?
        {openIndex !== 0 ? (
            <AiOutlineCaretDown className="h-8 text-black" />
        ) : (
            <AiOutlineCaretUp className='h-8 text-black' />
        )}
    </button>

    {openIndex === 0 &&
        <div className="flex flex-col items-start rounded-lg p-4 w-full bg-gray-50">
            Therapy at Mindlife can help you with family issues, work stress, anxiety, depression, addiction, relationship issues, and other emotional or behavioral issues you have.
        </div>
    }
</div>

            {/*  */}
            <div className="relative flex flex-col items-center w-full md:w-[640px] lg:w-[940px] mb-4  text-color: '#99008A' rounded-lg">
    <button onClick={() => toggleDropdown(1)} className="bg-white border-2 p-4 w-full flex items-center justify-between font-bold text-lg
     rounded-lg tracking-wider border-gray-50 active:border-white duration-300 active:text-white" style={{ fontFamily: 'DM Sans', fontSize: '20px', fontWeight: 500, lineHeight: '26.04px', letterSpacing: '-0.04em', textAlign: 'left',color: '#99008A'  }}>
                    How long is a typical therapy session?
                    {openIndex !== 1 ? (
                        <AiOutlineCaretDown className="h-8 text-black" />
                    ) : (
                        <AiOutlineCaretUp className='h-8 text-black' />
                    )}
                </button>

                {openIndex === 1 &&
                    <div className="flex flex-col items-start rounded-lg p-4 w-full bg-gray-50">
                        Typical therapy sessions last between 45 to 60 minutes, depending on individual needs and treatment plans.
                    </div>
                }
            </div>
            {/*  3*/}
            <div className="relative flex flex-col items-center w-full md:w-[640px] lg:w-[940px] mb-4  text-color: '#99008A' rounded-lg">
    <button onClick={() => toggleDropdown(2)} className="bg-white border-2 p-4 w-full flex items-center justify-between font-bold text-lg
     rounded-lg tracking-wider border-gray-50 active:border-white duration-300 active:text-white" style={{ fontFamily: 'DM Sans', fontSize: '20px', fontWeight: 500, lineHeight: '26.04px', letterSpacing: '-0.04em', textAlign: 'left',color: '#99008A'  }}>
                What is your cancellation policy?
                    {openIndex !== 2 ? (
                        <AiOutlineCaretDown className="h-8 text-black" />
                    ) : (
                        <AiOutlineCaretUp className='h-8 text-black' />
                    )}
                </button>

                {openIndex === 2 &&
                    <div className="flex flex-col items-start rounded-lg p-4 w-full bg-gray-50">
                        We require a 24-hour notice for cancellations to avoid a cancellation fee. Please contact us as soon as possible if you need to reschedule.
                    </div>
                }
            </div>
            {/* 4 */}
            <div className="relative flex flex-col items-center w-full md:w-[640px] lg:w-[940px] mb-4  text-color: '#99008A' rounded-lg">
    <button onClick={() => toggleDropdown(3)} className="bg-white border-2 p-4 w-full flex items-center justify-between font-bold text-lg
     rounded-lg tracking-wider border-gray-50 active:border-white duration-300 active:text-white" style={{ fontFamily: 'DM Sans', fontSize: '20px', fontWeight: 500, lineHeight: '26.04px', letterSpacing: '-0.04em', textAlign: 'left',color: '#99008A'  }}>
                Do you offer telehealth appointments?
                    {openIndex !== 3 ? (
                        <AiOutlineCaretDown className="h-8 text-black" />
                    ) : (
                        <AiOutlineCaretUp className='h-8 text-black' />
                    )}
                </button>

                {openIndex === 3 &&
                    <div className="flex flex-col items-start rounded-lg p-4 w-full bg-gray-50">
                        Typical therapy sessions last between 45 to 60 minutes, depending on individual needs and treatment plans.
                    </div>
                }
            </div>
            {/* 5 */}
            <div className="relative flex flex-col items-center w-full md:w-[640px] lg:w-[940px] mb-4  text-color: '#99008A' rounded-lg">
    <button onClick={() => toggleDropdown(4)} className="bg-white border-2 p-4 w-full flex items-center justify-between font-bold text-lg
     rounded-lg tracking-wider border-gray-50 active:border-white duration-300 active:text-white" style={{ fontFamily: 'DM Sans', fontSize: '20px', fontWeight: 500, lineHeight: '26.04px', letterSpacing: '-0.04em', textAlign: 'left',color: '#99008A'  }}>
                Is the exploratory session free?
                    {openIndex !== 4 ? (
                        <AiOutlineCaretDown className="h-8 text-black" />
                    ) : (
                        <AiOutlineCaretUp className='h-8 text-black' />
                    )}
                </button>

                {openIndex === 4 &&
                    <div className="flex flex-col items-start rounded-lg p-4 w-full bg-gray-50">
                        Typical therapy sessions last between 45 to 60 minutes, depending on individual needs and treatment plans.
                    </div>
                }
            </div>
            {/* 6 */}
            <div className="relative flex flex-col items-center w-full md:w-[640px] lg:w-[940px] mb-4  text-color: '#99008A' rounded-lg">
    <button onClick={() => toggleDropdown(5)} className="bg-white border-2 p-4 w-full flex items-center justify-between font-bold text-lg
     rounded-lg tracking-wider border-gray-50 active:border-white duration-300 active:text-white" style={{ fontFamily: 'DM Sans', fontSize: '20px', fontWeight: 500, lineHeight: '26.04px', letterSpacing: '-0.04em', textAlign: 'left',color: '#99008A'  }}>
                How often should I meet with you?
                    {openIndex !== 5 ? (
                        <AiOutlineCaretDown className="h-8 text-black" />
                    ) : (
                        <AiOutlineCaretUp className='h-8 text-black' />
                    )}
                </button>

                {openIndex === 5 &&
                    <div className="flex flex-col items-start rounded-lg p-4 w-full bg-gray-50">
                        Typical therapy sessions last between 45 to 60 minutes, depending on individual needs and treatment plans.
                    </div>
                }
            </div>
            {/* 7 */}
            <div className="relative flex flex-col items-center w-full md:w-[640px] lg:w-[940px] mb-4  text-color: '#99008A' rounded-lg">
    <button onClick={() => toggleDropdown(6)} className="bg-white border-2 p-4 w-full flex items-center justify-between font-bold text-lg
     rounded-lg tracking-wider border-gray-50 active:border-white duration-300 active:text-white" style={{ fontFamily: 'DM Sans', fontSize: '20px', fontWeight: 500, lineHeight: '26.04px', letterSpacing: '-0.04em', textAlign: 'left',color: '#99008A'  }}>
                Is therapy confidential?
                    {openIndex !== 6 ? (
                        <AiOutlineCaretDown className="h-8 text-black" />
                    ) : (
                        <AiOutlineCaretUp className='h-8 text-black' />
                    )}
                </button>

                {openIndex === 6 &&
                    <div className="flex flex-col items-start rounded-lg p-4 w-full bg-gray-50">
                        Typical therapy sessions last between 45 to 60 minutes, depending on individual needs and treatment plans.
                    </div>
                }
            </div>
        </div>
    );
}

export default Dropdown
