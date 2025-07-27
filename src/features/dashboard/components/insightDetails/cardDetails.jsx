
import { React, useState } from 'react'
import { Button, Card, Image, Typography } from 'antd'
import { useNavigate } from 'react-router-dom';
import rankerInsights from '../../../../assets/icons/ranker-insight.png'
import TwitterIcon from '../../../../assets/icons/twitter.png'
import TelegramIcon from '../../../../assets/icons/telegram.png'
import WhatsappIcon from '../../../../assets/icons/whatsapp.png'
import videoICon from '../../../../assets/images/Container.png'


const { Title, Paragraph } = Typography;
const RankersCardDetails = () => {
    const navigate = useNavigate();
    const openDetails = () => {
        navigate('/dashboard/card-overview');
    }
    const repeatedText = "Most of the UPSC aspirants like YOU find it troublesome to find proper resources for their preparation.";
    return (
        <div className='grid lg:grid-cols-5 grid-cols-1 gap-5 p-5'>
            <div className='bg-white text-left lg:col-span-3 col-span-1 shadow-inner-border rounded-2xl p-7'>
                    <h2 className="text-2xl font-semibold text-[#111314] mb-6">
                        How to make the most out of SuperKalam Dashboard?
                    </h2>

                    <p className="text-sm text-[#12131A] mb-6">
                        Most of the UPSC aspirants like <strong>YOU</strong> find it troublesome to find proper resources for their preparation.
                    </p>

                    <p className="text-sm text-[#12131A] mb-4">
                        All your doubts regarding resources, tests, and your progress will be resolved here in your <strong>Student Dashboard</strong> on SuperKalam. ✨
                    </p>

                    <div className="border-l-4 border-[#f57900] pl-4 text-sm bg-orange-gradient bg-clip-text text-transparent font-medium mb-6">
                        Let’s watch this short video to learn how you can empower yourself with SuperKalam Dashboard👇
                    </div>
                    <Image
                        preview={false}
                        className=' object-contain'
                        src={videoICon}
                    />
                    {[...Array(2)].map((_, i) => (
                        <p key={i} className="text-sm font-medium text-[#111314] mb-6">
                            {repeatedText}
                        </p>
                    ))}

                    <p className="text-sm text-[#12131A] mt-4">
                        All your doubts regarding resources, tests, and your progress will be resolved here in your <strong>Student Dashboard</strong> on SuperKalam. ✨
                    </p>
      
            </div>
            <div className='right lg:col-span-2 col-span-1 shadow-inner-border rounded-2xl p-5'>
                <div className="relative p-5 pe-0 w-full bg-white shadow-sm rounded-lg mb-5">
                    <div className="titleBox flex flex-col gap-1">
                        <Title className='sm:!text-[18px] !text-base !text-left !font-semibold !text-[#0C0D12] !m-0'>
                            Test Progress / Insight
                        </Title>
                        <Paragraph className="sm:max-w-[300px] max-w-full leading-4 text-sm text-left font-regular text-[#666666] !m-0 h-full">
                            Practice problems and complete lessons every day to build your streak.
                        </Paragraph>
                        <Button
                            type="ghost"
                            className="mt-4 disabled:bg-transparent disabled:border-[#f57900] border-[#f57900] disabled:text-black-800 bg-orange-gradient hover:bg-orange-gradient-hover text-white text-base font-bold leading-4 py-3 px-6 w-fit h-auto" // Tailwind for styling
                        >
                            Know More
                        </Button>
                    </div>
                    <div className="absolute bottom-0 right-0">
                        <Image
                            preview={false}
                            className='ml-auto max-w-[100%] max-h-[130px] object-contain'
                            src={rankerInsights}
                        />
                    </div>
                </div>
                <div className="relative p-5 pe-0 w-full bg-white shadow-sm rounded-lg">
                    <Title className='sm:!text-[18px] !text-base !text-left !font-semibold !text-[#0C0D12] !m-0'>
                        Share
                    </Title>
                    <div className="flex items-center flex-wrap gap-5">
                        <Image
                            preview={false}
                            className='!w-9 !h-9 !object-contain'
                            src={TwitterIcon}
                        />
                        <Image
                            preview={false}
                            className='!w-5 !h-5 !object-contain'
                            src={WhatsappIcon}
                        />
                        <Image
                            preview={false}
                            className='!w-5 !h-5 !object-contain'
                            src={TelegramIcon}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RankersCardDetails
