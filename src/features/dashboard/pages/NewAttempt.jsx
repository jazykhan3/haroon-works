import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import PlayIcon from '../../../assets/icons/play.png'
import flowIcon from '../../../assets/icons/circle-arrow.png'
import { Button } from 'antd'
const NewAttempt = () => {
    const [dropdown1Value, setDropdown1Value] = useState("All Subject");
    const [showDropdown1, setShowDropdown1] = useState(false);

    // Dropdown options arrays
    const subjectOptions = ["All Subject", "Biology", "Mathematics", "General", "Psychology"];
    const closeAllDropdowns = () => {
        setShowDropdown1(false);
    };
    return (
        <div className='p-5'>
            <div className='p-5 rounded-xl bg-white shadow-sm'>
                <h1 className="text-xl font-medium text-black mb-5 text-left">Your Metrices</h1>
                <div className='gap-5 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                    <div className="card-item rounded-lg shadow-sm p-6 bg-gradient-to-br from-[#FFF] to-[#D0F2E7]">
                        <div className='flex gap-2 justify-between items-center'>
                            <Link to="/dashboard/corporate-law" className=" bg-white rounded-sm">
                                <span className='block py-2 px-5 bg-white text-sm font-medium bg-orange-gradient bg-clip-text text-transparent'>Amendments</span>
                            </Link>
                            <Link to="/dashboard/how-attempt" className=" ">
                                <span className='block text-xs font-normal text-[#12131A]'>Start Now →</span>
                            </Link>
                        </div>
                        <div className='mt-11 text-left'>
                            <p className='font-normal text-xs text-[#666] m-0'>Paper 2</p>
                            <h3 className='font-medium text-xl text-[#00] m-0'>Corporate and Other Laws</h3>
                        </div>
                    </div>

                    <div className="card-item rounded-lg shadow-sm p-6 bg-gradient-to-br from-[#FFF] to-[#FEEACD]">
                        <div className='flex gap-2 justify-between items-center'>
                            <Link to="/dashboard/corporate-law" className=" bg-white rounded-sm">
                                <span className='block py-2 px-5 bg-white text-sm font-medium bg-orange-gradient bg-clip-text text-transparent'>Amendments</span>
                            </Link>
                            <Link to="/dashboard/how-attempt" className=" ">
                                <span className='block text-xs font-normal text-[#12131A]'>Start Now →</span>
                            </Link>
                        </div>
                        <div className='mt-11 text-left'>
                            <p className='font-normal text-xs text-[#666] m-0'>Paper 2</p>
                            <h3 className='font-medium text-xl text-[#00] m-0'>Corporate and Other Laws</h3>
                        </div>
                    </div>

                    <div className="card-item rounded-lg shadow-sm p-6 bg-gradient-to-br from-[#FFF] to-[#EEF5FE]">
                        <div className='flex gap-2 justify-between items-center'>
                            <Link to="/dashboard/corporate-law" className=" bg-white rounded-sm">
                                <span className='block py-2 px-5 bg-white text-sm font-medium bg-orange-gradient bg-clip-text text-transparent'>Amendments</span>
                            </Link>
                            <Link to="/dashboard/how-attempt" className=" ">
                                <span className='block text-xs font-normal text-[#12131A]'>Start Now →</span>
                            </Link>
                        </div>
                        <div className='mt-11 text-left'>
                            <p className='font-normal text-xs text-[#666] m-0'>Paper 2</p>
                            <h3 className='font-medium text-xl text-[#00] m-0'>Corporate and Other Laws</h3>
                        </div>
                    </div>
                    <div className="card-item rounded-lg shadow-sm p-6 bg-gradient-to-br from-[#FFF] to-[#EEF5FE]">
                        <div className='flex gap-2 justify-between items-center'>
                            <Link to="/dashboard/corporate-law" className=" bg-white rounded-sm">
                                <span className='block py-2 px-5 bg-white text-sm font-medium bg-orange-gradient bg-clip-text text-transparent'>Amendments</span>
                            </Link>
                            <Link to="/dashboard/how-attempt" className=" ">
                                <span className='block text-xs font-normal text-[#12131A]'>Start Now →</span>
                            </Link>
                        </div>
                        <div className='mt-11 text-left'>
                            <p className='font-normal text-xs text-[#666] m-0'>Paper 2</p>
                            <h3 className='font-medium text-xl text-[#00] m-0'>Corporate and Other Laws</h3>
                        </div>
                    </div>

                    <div className="card-item rounded-lg shadow-sm p-6 bg-gradient-to-br from-[#FFF] to-[#D0F2E7]">
                        <div className='flex gap-2 justify-between items-center'>
                            <Link to="/dashboard/corporate-law" className=" bg-white rounded-sm">
                                <span className='block py-2 px-5 bg-white text-sm font-medium bg-orange-gradient bg-clip-text text-transparent'>Amendments</span>
                            </Link>
                            <Link to="/dashboard/how-attempt" className=" ">
                                <span className='block text-xs font-normal text-[#12131A]'>Start Now →</span>
                            </Link>
                        </div>
                        <div className='mt-11 text-left'>
                            <p className='font-normal text-xs text-[#666] m-0'>Paper 2</p>
                            <h3 className='font-medium text-xl text-[#00] m-0'>Corporate and Other Laws</h3>
                        </div>
                    </div>
                    <div className="card-item rounded-lg shadow-sm p-6 bg-gradient-to-br from-[#FFF] to-[#FEEACD]">
                        <div className='flex gap-2 justify-between items-center'>
                            <Link to="/dashboard/corporate-law" className=" bg-white rounded-sm">
                                <span className='block py-2 px-5 bg-white text-sm font-medium bg-orange-gradient bg-clip-text text-transparent'>Amendments</span>
                            </Link>
                            <Link to="/dashboard/how-attempt" className=" ">
                                <span className='block text-xs font-normal text-[#12131A]'>Start Now →</span>
                            </Link>
                        </div>
                        <div className='mt-11 text-left'>
                            <p className='font-normal text-xs text-[#666] m-0'>Paper 2</p>
                            <h3 className='font-medium text-xl text-[#00] m-0'>Corporate and Other Laws</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between gap-[10px] py-12">
                <h1 className="text-xl font-medium text-black m-0 pe-[10px]">Filter by Subject</h1>

                {/* Dropdown 1 - All Subject */}
                <div className="relative">
                    <button
                        onClick={() => { closeAllDropdowns(); setShowDropdown1(!showDropdown1); }}
                        className="text-sm font-medium flex items-center gap-[6px] px-[10px] py-2 border border-[#f2f2f2] rounded-lg bg-white focus:outline-none focus:border-[#f57900] hover:border-[#f57900]"
                    >
                        <span className="text-black">{dropdown1Value}</span>
                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {/* Dropdown 1 Menu */}
                    {showDropdown1 && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                            {subjectOptions.map((option, index) => (
                                <button
                                    key={option}
                                    onClick={() => { setDropdown1Value(option); setShowDropdown1(false); }}
                                    className={`block w-full text-left px-4 py-2 text-xs text-black hover:bg-gray-100 ${index === 0 ? 'rounded-t-lg' : index === subjectOptions.length - 1 ? 'rounded-b-lg' : ''
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                {Array(6).fill(null).map((_, index) => (
                    <div className="item rounded-xl bg-white border border-[#F7F7F9] shadow-sm p-5 flex flex-col gap-6">
                        <div className="flex items-center gap-1 justify-between">
                            <img src={flowIcon} alt="icon" className='w-10 h-10 object-contain' />
                            <p className='flex items-center gap-2 text-left text-[#6666] font-normal text-[10px] m-0'>
                                <img src={PlayIcon} alt="icon" className='w-3 h-3 object-contain' />
                                <span> <span className='font-bold'>20</span> Minutes</span>
                            </p>
                        </div>
                        <div>
                            <h3 className='text-left text-black font-medium text-base m-0'>Recent Developments in Biology</h3>
                            <p className='text-left text-[#6666] font-normal text-base m-0'>
                                Explore the latest breakthroughs in genetics, biotech, medicine, and environmental science — all curated to boost your exam readiness.
                            </p>
                        </div>
                        <div className="buton-box bg-orange-gradient hover:bg-orange-gradient-hover p-[1px] rounded-lg">
                            <Button
                                type="ghost"
                                onClick={''}
                                className="w-full group bg-[#fff] hover:bg-orange-gradient-hover text-base font-bold leading-4 py-3 px-8 h-auto hover:text-white animate-none transition-none " // Tailwind for styling
                            >
                                <span className='bg-orange-gradient bg-clip-text text-transparent group-hover:text-white'>Watch Now</span>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>  
        </div>
    )
}

export default NewAttempt
