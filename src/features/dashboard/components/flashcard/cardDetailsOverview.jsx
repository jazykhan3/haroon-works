import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Card } from 'antd'
import React from 'react'

const cardDetailsOverview = () => {
    return (
        <div className='p-5'>
            <div className="flex items-center justify-between gap-[10px] flex-wrap mb-8 sm:flex-row flex-col">
                <h1 className="text-xl font-medium text-black m-0 pe-[10px]">Flashcards</h1>
                <div className='flex items-center gap-5'>
                    <Button
                        type="ghost"
                        onClick={''}
                        className="w-fit border-[#EEEFF1] border group bg-[#fff] hover:bg-orange-gradient-hover text-base font-bold leading-4 py-3 px-6 h-auto hover:text-white animate-none transition-none " // Tailwind for styling
                    >
                        <span className='text-black group-hover:text-white'>Previous</span>
                    </Button>
                    <Button
                        type="ghost"
                        onClick={''}
                        className="w-fit border-[#EEEFF1] border group bg-[#fff] hover:bg-orange-gradient-hover text-base font-bold leading-4 py-3 px-6 h-auto hover:text-white animate-none transition-none " // Tailwind for styling
                    >
                        <span className='text-black group-hover:text-white'>Next</span>
                    </Button>
                    <Button
                        type="ghost"
                        onClick={''}
                        className=" disabled:bg-transparent disabled:border-[#f57900] border-[#f57900] disabled:text-black-800 bg-orange-gradient hover:bg-orange-gradient-hover text-white text-base font-bold leading-4 py-3 px-6 w-fit h-auto" // Tailwind for styling
                    >
                        Know More
                    </Button>
                </div>
            </div>
            <div className='bg-white shadow-sm rounded-lg p-6 text-left'>
                <h2 className="text-xl font-semibold text-[#12131A] mb-1">Streak Overview</h2>
                <p className="text-sm text-gray-600 mb-4">
                    Practice for 30 mins or more every day to build your streak.
                </p>

                <div className="relative bg-gradient-to-br from-[#FFF9F0] to-[#FFEFD9] rounded-xl p-6 text-sm text-[#12131A] leading-relaxed">
                    {/* Left Arrow */}
                    <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                        <button className="bg-[#08BD80] text-white p-2 rounded-full shadow">
                            <LeftOutlined />
                        </button>
                    </div>

                    {/* Right Arrow */}
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                        <button className="bg-[#08BD80] text-white p-2 rounded-full shadow">
                            <RightOutlined />
                        </button>
                    </div>
                    <p>
                        <strong>Hire–Purchase Transaction: Montrek Limited</strong><br />
                        Montrek Limited purchased 2 machines costing ₹2,80,000 each from M. K. Traders on 1 April 2021 on hire-purchase basis.
                    </p>
                    <p className="font-semibold mt-4">Terms of payment for both machines together:</p>
                    <p className="font-semibold mt-2">Additional information:</p>
                    <ol className="list-decimal list-inside space-y-1">
                        <li>M. K. Traders charges interest @ 8% p.a., payable half-yearly.</li>
                        <li>Installment payments cover principal + interest.</li>
                        <li>Montrek Ltd. writes off depreciation @ 20% p.a. diminishing-balance method.</li>
                        <li>Montrek Ltd. has paid 3 half-yearly installments but could not pay the 4th installment due on 31 March 2023.</li>
                        <li>M. K. Traders re-possessed one of the machines on 31 March 2023, adjusting its value against amounts due.</li>
                        <li>Re-possession was done on the basis of 25% p.a. depreciation (diminishing balance), assuming the balance due would be paid off in the next year.</li>
                    </ol>

                    <p className="mt-4">
                        You are required to prepare up to 31 March 2023 (books of Montrek Ltd):
                    </p>
                    <ol className="list-decimal list-inside font-semibold">
                        <li>Machinery Account;</li>
                        <li>M. K. Traders Account.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default cardDetailsOverview

