import React from 'react'
import ProfileIcon from '../../../assets/icons/profile.png'
import TickIcon from '../../../assets/icons/profile.png'
import { Button } from 'antd'

const PricingPro = () => {
    return (
        <div className='p-5'>
            <h2 className="text-left font-medium text-black text-2xl mb-3">Pricings</h2>
            <p className="text-left text-[#666] text-sm font-normal mb-0">Simple Workflow. Smart Results.</p>
            <div className="pricing-cards flex md:flex-row flex-col gap-5 mt-8">
                {Array(2).fill(null).map((_, index) => (
                <div className="pricingcard p-6 bg-white shadow-sm rounded-xl md:max-w-[445px] w-full">
                    <img src={ProfileIcon} alt="Profile" className='w-6 h-6 object-contain' />
                    <h3 className="text-left text-base font-medium text-black mt-3 mb-5">For Individual Learners</h3>
                    <div className="price border-b border-t border-[#EBEBEB] py-6 flex gap-1 items-end">
                        <h3 className='md:text-[28px] sm:text-[22px] text-[18px] font-medium text-[#040303] m-0'>₹2,000</h3>
                        <p className='text-sm font-medium text-[#040303] m-0'>/per user for 3 months</p>
                    </div>
                    <div className="include-list pt-6">
                        <h4 className="text-left text-[#666] text-sm font-normal mb-0">What’s Included?</h4>
                        <ul className='list-none py-6'>
                            <li className='flex items-center gap-2 text-[040303] text-sm font-normal mb-3'>
                                <img src={TickIcon} alt="Tick" className='w-4 h-4' />
                                <span>All Features | All Levels</span>
                            </li>
                            <li className='flex items-center gap-2 text-[040303] text-sm font-normal mb-3'>
                                <img src={TickIcon} alt="Tick" className='w-4 h-4' />
                                <span>No hidden fees</span>
                            </li>
                            <li className='flex items-center gap-2 text-[040303] text-sm font-normal mb-3'>
                                <img src={TickIcon} alt="Tick" className='w-4 h-4' />
                                <span>No auto-renewal</span>
                            </li>
                            <li className='flex items-center gap-2 text-[040303] text-sm font-normal mb-3'>
                                <img src={TickIcon} alt="Tick" className='w-4 h-4' />
                                <span>7-day refund guarantee</span>
                            </li>
                        </ul>
                        <Button
                            type="ghost"
                            className="w-full disabled:bg-transparent disabled:border-[#f57900] border-[#f57900] disabled:text-black-800 bg-orange-gradient hover:bg-orange-gradient-hover text-white text-base font-bold leading-4 py-3 px-6 h-auto" // Tailwind for styling
                        >
                            Upgrade Now
                        </Button>
                    </div>
                </div>
                  ))}
            </div>
        </div>
    )
}

export default PricingPro
