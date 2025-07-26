import { Button, Typography } from 'antd'
import React from 'react'
import DotsIcon from '../../../assets/icons/dotsIcon.png'
import ActivityIcon from '../../../assets/icons/activity-icon.png'
import StepOneIcon from '../../../assets/icons/step-1.png'
import StepTwoIcon from '../../../assets/icons/step-2.png'
import StepThreeIcon from '../../../assets/icons/step-3.png'
import ReferralsTable from '../components/tables/ReferralsTable'

const { Title, Paragraph } = Typography;
const Referrel = () => {
    return (
        <div className='p-5'>
            <div className='p-5 bg-gradient-to-br from-[#fff8ee] to-[#fde8c9] rounded-md mb-5 flex md:flex-row flex-col gap-4 justify-between items-center'>
                <div className="left">
                    <Title className='md:!text-2xl sm:!text-[18px] !text-base !text-left !font-medium !text-[#0C0D12] !m-0'>
                        Refer friends, win exciting rewards
                    </Title>
                    <Paragraph className=" leading-4 text-sm text-left font-regular !m-0 !mt-3 h-full bg-orange-gradient bg-clip-text text-transparent hover:bg-orange-gradient-hover hover:bg-clip-text hover:text-transparent">
                        For every successful referral you can win exciting rewards
                    </Paragraph>
                    <div className='py-4 mt-6 md:max-w-[420px] w-full flex gap-1 items-center justify-between'>
                        <div>
                            <Paragraph className="text-xs text-left font-regular !m-0 h-full text-[#666]">
                                Your referral code
                            </Paragraph>
                            <Title className='md:!text-2xl sm:!text-[18px] !text-base !text-left !font-bold !text-[#0C0D12] !m-0'>
                                CODEABC
                            </Title>
                        </div>
                        <Button
                            type="ghost"
                            className="mt-4 disabled:bg-transparent disabled:border-[#f57900] border-[#f57900] disabled:text-black-800 bg-orange-gradient hover:bg-orange-gradient-hover text-white text-base font-bold leading-4 py-3 px-6 w-fit h-auto" // Tailwind for styling
                        >
                            Share Now
                        </Button>
                    </div>
                </div>
                <div className="right relative p-5 pe-0 max-w-[600px] w-full bg-white shadow-sm rounded-lg">
                    <img src={DotsIcon} alt="" className='w-28 h-28 object-contain' />
                    <Paragraph className=" leading-4 text-xl text-left font-regular !m-0 h-full bg-orange-gradient bg-clip-text text-transparent hover:bg-orange-gradient-hover hover:bg-clip-text hover:text-transparent">
                        Up to ₹2,500
                    </Paragraph>
                    <Paragraph className="text-xs text-left font-regular !m-0 !mt-2 h-full text-[#444]">
                        Vouchers for every referral of ₹2,500+
                    </Paragraph>
                </div>
            </div>
            <div className="grid lg:grid-cols-5 grid-cols-1 gap-5 mb-8">
                <div className="left lg:col-span-3 col-span-1 p-5 bg-white rounded-lg shadow-sm h-max">
                    <h2 className='mb-8 text-xl text-black font-medium text-left'>Your Rewards</h2>
                    <div className="p-6 border border-[#f2f2f2] rounded-2xl flex gap-6 items-center">
                        <img src={ActivityIcon} alt="" className='w-7 h-7 object-contain' />
                        <div>
                            <Title className='!text-base !text-left !font-medium !text-[#0C0D12] !m-0'>
                                O Months
                            </Title>
                            <Paragraph className="text-xs text-left font-regular !m-0 h-full text-[#666]">
                                Plus Subscription
                            </Paragraph>
                        </div>
                    </div>
                     <h2 className='my-7 text-xl text-black font-medium text-left'>Your Referrals</h2>
                     <ReferralsTable />
                </div>
                <div className="right lg:col-span-2 col-span-1 p-5 bg-white rounded-lg shadow-sm h-max">
                    <h2 className='mb-8 text-xl text-black font-medium text-left'>Your Rewards</h2>
                    <div className="p-6 flex gap-6 items-center mb-5">
                        <img src={StepOneIcon} alt="" className='w-10 h-10 object-contain' />
                        <div>
                            <Title className='!text-base !text-left !font-medium !text-[#0C0D12] !m-0 !mb-2'>
                                Step One
                            </Title>
                            <Paragraph className="text-xs text-left font-regular !m-0 h-full text-[#666]">
                                You'll be notified of important dates for CA exams and registration deadlines
                            </Paragraph>
                        </div>
                    </div>
                    <div className="p-6 flex gap-6 items-center mb-5">
                        <img src={StepTwoIcon} alt="" className='w-10 h-10 object-contain' />
                        <div>
                            <Title className='!text-base !text-left !font-medium !text-[#0C0D12] !m-0 !mb-2'>
                                Step Two
                            </Title>
                            <Paragraph className="text-xs text-left font-regular !m-0 h-full text-[#666]">
                                You'll be notified of important dates for CA exams and registration deadlines
                            </Paragraph>
                        </div>
                    </div>
                    <div className="p-6 flex gap-6 items-center">
                        <img src={StepThreeIcon} alt="" className='w-10 h-10 object-contain' />
                        <div>
                            <Title className='!text-base !text-left !font-medium !text-[#0C0D12] !m-0 !mb-2'>
                                Step Three
                            </Title>
                            <Paragraph className="text-xs text-left font-regular !m-0 h-full text-[#666]">
                                You'll be notified of important dates for CA exams and registration deadlines
                            </Paragraph>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Referrel
