
import { React, useState } from 'react'
import { Button, Card } from 'antd'
import { useNavigate } from 'react-router-dom';

const FlashCardDetails = () => {
    const navigate = useNavigate();
    const openDetails = () => {
        navigate('/dashboard/card-overview');
    }
    const repeatedText = "Most of the UPSC aspirants like YOU find it troublesome to find proper resources for their preparation.";
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
                        onClick={openDetails}
                        className=" disabled:bg-transparent disabled:border-[#f57900] border-[#f57900] disabled:text-black-800 bg-orange-gradient hover:bg-orange-gradient-hover text-white text-base font-bold leading-4 py-3 px-6 w-fit h-auto" // Tailwind for styling
                    >
                        Know More
                    </Button>
                </div>
            </div>
            <div className='bg-white rounded-lg shadow-sm p-6'>
                <div className="max-w-[700px] w-full text-left">
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

                    {[...Array(8)].map((_, i) => (
                        <p key={i} className="text-sm font-medium text-[#111314] mb-6">
                            {repeatedText}
                        </p>
                    ))}

                    <p className="text-sm text-[#12131A] mt-4">
                        All your doubts regarding resources, tests, and your progress will be resolved here in your <strong>Student Dashboard</strong> on SuperKalam. ✨
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FlashCardDetails
