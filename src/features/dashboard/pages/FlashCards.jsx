import { React, useState } from 'react'
import flowIcon from '../../../assets/icons/circle-arrow.png'
import starIcon from '../../../assets/icons/star.png'
import PlayIcon from '../../../assets/icons/play.png'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const FlashCards = () => {
    const navigate = useNavigate();
    const [dropdown1Value, setDropdown1Value] = useState("All Subject");
    const [dropdown2Value, setDropdown2Value] = useState("Bookmarked");
    const [dropdown3Value, setDropdown3Value] = useState("Marked");
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showDropdown3, setShowDropdown3] = useState(false);

    // Dropdown options arrays
    const subjectOptions = ["All Subject", "Biology", "Mathematics", "General", "Psychology"];
    const bookmarkedOptions = ["All Bookmarked", "Biology", "Mathematics", "General", "Psychology"];
    const markedOptions = ["All Marked", "Biology", "Mathematics", "General", "Psychology"];
    const closeAllDropdowns = () => {
        setShowDropdown1(false);
        setShowDropdown2(false);
        setShowDropdown3(false);
    };
    const openDetails = () => {
  navigate('/dashboard/card-details');
    }
    return (
        <div className='p-5'>
            <div className="flex items-center gap-[10px] flex-wrap mb-8">
                <h1 className="text-xl font-medium text-black m-0 pe-[10px]">Flashcards</h1>

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

                {/* Dropdown 2 - Bookmarked */}
                <div className="relative">
                    <button
                        onClick={() => { closeAllDropdowns(); setShowDropdown2(!showDropdown2); }}
                        className="text-sm font-medium flex items-center gap-[6px] px-[10px] py-2 border border-[#f2f2f2] rounded-lg bg-white focus:outline-none focus:border-[#f57900] hover:border-[#f57900]"
                    >
                        <span className="text-black">{dropdown2Value}</span>
                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {/* Dropdown 2 Menu */}
                    {showDropdown2 && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-[#f2f2f2] rounded-lg shadow-lg z-10">
                            {bookmarkedOptions.map((option, index) => (
                                <button
                                    key={option}
                                    onClick={() => { setShowDropdown2(false); setDropdown2Value(option); }}
                                    className={`block w-full text-left px-4 py-2 text-xs text-black hover:bg-gray-100 ${index === 0 ? 'rounded-t-lg' : index === bookmarkedOptions.length - 1 ? 'rounded-b-lg' : ''
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Dropdown 3 - Marked */}
                <div className="relative">
                    <button
                        onClick={() => { closeAllDropdowns(); setShowDropdown3(!showDropdown3); }}
                        className="text-sm font-medium flex items-center gap-[6px] px-[10px] py-2 border border-[#f2f2f2] rounded-lg bg-white focus:outline-none focus:border-[#f57900] hover:border-[#f57900]"
                    >
                        <span className="text-gray-700">{dropdown3Value}</span>
                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {/* Dropdown 3 Menu */}
                    {showDropdown3 && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                            {markedOptions.map((option, index) => (
                                <button
                                    key={option}
                                    onClick={() => { setDropdown3Value(option); setShowDropdown3(false); }}
                                    className={`block w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 ${index === 0 ? 'rounded-t-lg' : index === markedOptions.length - 1 ? 'rounded-b-lg' : ''
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
                            <img src={starIcon} alt="icon" className='w-4 h-4 object-contain' />
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
                                onClick={openDetails}
                                className="w-full group bg-[#fff] hover:bg-orange-gradient-hover text-base font-bold leading-4 py-3 px-8 h-auto hover:text-white animate-none transition-none " // Tailwind for styling
                            >
                                <span className='bg-orange-gradient bg-clip-text text-transparent group-hover:text-white'>Read Now</span>
                            </Button>
                        </div>
                        <div className='flex items-center gap-6'>
                            <p className='font-bold text-[#12131A] text-[10px] m-0 flex gap-[10px] items-center text-nowrap'>
                                <img src={PlayIcon} alt="icon" className='w-3 h-3 object-contain' />
                                <span>Play Now</span>
                            </p>
                            <Button
                                type="ghost"
                                onClick={''}
                                className="flex-grow border-[#EEEFF1] border w-full group bg-[#fff] hover:bg-orange-gradient-hover text-base font-bold leading-4 py-3 px-8 h-auto hover:text-white animate-none transition-none " // Tailwind for styling
                            >
                                <span className='text-black group-hover:text-white'>Mark as Done</span>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FlashCards
