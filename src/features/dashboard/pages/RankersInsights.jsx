import { React, useState } from 'react'
import FileIcon from '../../../assets/icons/aFile.png'
import FlowIcon from '../../../assets/icons/rocket-flow.png'
import BGPlayIcon from '../../../assets/icons/playBg.png'
import PlayIcon from '../../../assets/icons/play.png'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const RankersInsights = () => {
    const navigate = useNavigate();
    const openDetails = () => {
        navigate('/dashboard/rankers-details');
    }
    return (
        <div className='p-5'>
            <div className="flex items-center gap-[10px] flex-wrap mb-8">
                <h1 className="text-xl font-medium text-black m-0 pe-[10px]">Rankers Insights</h1>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                {Array(2).fill(null).map((_, index) => (
                    <div className="item rounded-xl bg-white border border-[#F7F7F9] shadow-sm p-5 flex flex-col gap-6">
                        <div className="flex items-center gap-1 justify-between">
                            <img src={FileIcon} alt="icon" className='w-10 h-10 object-contain' />
                            <p className='text-left text-[#6666] font-normal text-[10px] m-0'>20 Minutes read</p>
                        </div>
                        <div>
                            <h3 className='text-left text-black font-medium text-base m-0'>Tips to score maximum in your next attempt</h3>
                            <p className='text-left text-[#6666] font-normal text-base m-0'>
                                Explore the latest breakthroughs in genetics, biotech, medicine, and environmental science — all curated to boost your exam readiness.
                            </p>
                        </div>
                        <div className="buton-box bg-orange-gradient hover:bg-orange-gradient-hover p-[1px] rounded-lg">
                            <Button
                                type="ghost"
                                onClick={openDetails}
                                className="w-full group bg-[#fff] hover:bg-orange-gradient-hover text-base font-bold leading-4 py-3 px-8 h-auto hover:text-white animate-none transition-none " // Tailwind for styling
                            >
                                <span className='bg-orange-gradient bg-clip-text text-transparent group-hover:text-white'>Read Now</span>
                            </Button>
                        </div>
                    </div>
                ))}
                {Array(2).fill(null).map((_, index) => (
                    <div className="item rounded-xl bg-white border border-[#F7F7F9] shadow-sm p-5 flex flex-col gap-6">
                        <div className="flex items-center gap-1 justify-between">
                            <img src={BGPlayIcon} alt="icon" className='w-10 h-10 object-contain' />
                            <p className='flex items-center gap-2 text-left text-[#6666] font-normal text-[10px] m-0'>
                                <img src={PlayIcon} alt="icon" className='w-3 h-3 object-contain' />
                                <span> <span className='font-bold'>20</span> Minutes</span>
                            </p>
                        </div>
                        <div>
                            <h3 className='text-left text-black font-medium text-base m-0'>Topper Interviews</h3>
                            <p className='text-left text-[#6666] font-normal text-base m-0'>
                                Explore the latest breakthroughs in genetics, biotech, medicine, and environmental science — all curated to boost your exam readiness.
                            </p>
                        </div>
                        <div className="buton-box bg-orange-gradient hover:bg-orange-gradient-hover p-[1px] rounded-lg">
                            <Button
                                type="ghost"
                                onClick={openDetails}
                                className="w-full group bg-[#fff] hover:bg-orange-gradient-hover text-base font-bold leading-4 py-3 px-8 h-auto hover:text-white animate-none transition-none " // Tailwind for styling
                            >
                                <span className='bg-orange-gradient bg-clip-text text-transparent group-hover:text-white'>Watch Now</span>
                            </Button>
                        </div>
                    </div>
                ))}
                {Array(2).fill(null).map((_, index) => (
                    <div className="item rounded-xl bg-white border border-[#F7F7F9] shadow-sm p-5 flex flex-col gap-6">
                        <div className="flex items-center gap-1 justify-between">
                            <img src={FlowIcon} alt="icon" className='w-10 h-10 object-contain' />
                            <p className='flex items-center gap-2 text-left text-[#6666] font-normal text-[10px] m-0'>
                                <img src={PlayIcon} alt="icon" className='w-3 h-3 object-contain' />
                                <span> <span className='font-bold'>20</span> Questions</span>
                            </p>
                        </div>
                        <div>
                            <h3 className='text-left text-black font-medium text-base m-0'>Tricks, Tips and Techniques</h3>
                            <p className='text-left text-[#6666] font-normal text-base m-0'>
                                Explore the latest breakthroughs in genetics, biotech, medicine, and environmental science — all curated to boost your exam readiness.
                            </p>
                        </div>
                        <div className="buton-box bg-orange-gradient hover:bg-orange-gradient-hover p-[1px] rounded-lg">
                            <Button
                                type="ghost"
                                onClick={openDetails}
                                className="w-full group bg-[#fff] hover:bg-orange-gradient-hover text-base font-bold leading-4 py-3 px-8 h-auto hover:text-white animate-none transition-none " // Tailwind for styling
                            >
                                <span className='bg-orange-gradient bg-clip-text text-transparent group-hover:text-white'>Read Now</span>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RankersInsights
