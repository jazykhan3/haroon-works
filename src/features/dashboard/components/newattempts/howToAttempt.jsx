
import React from 'react'
import { Button, Image, Typography } from 'antd'
import rankerInsights from '../../../../assets/icons/ranker-insight.png'
import TwitterIcon from '../../../../assets/icons/twitter.png'
import TelegramIcon from '../../../../assets/icons/telegram.png'
import WhatsappIcon from '../../../../assets/icons/whatsapp.png'


const { Title, Paragraph } = Typography;
const HowToAttempt = () => {
    const repeatedText = "Most of the UPSC aspirants like YOU find it troublesome to find proper resources for their preparation.";
    return (
        <div className='p-5 bg-white text-left lg:col-span-3 col-span-1 shadow-inner-border rounded-2xl p-7'>
            <h2 className="text-2xl font-semibold text-[#111314] mb-6">
                How to make the most out of SuperKalam Dashboard?
            </h2>

            <p className="text-sm text-[#12131A] mb-6">
                Most of the UPSC aspirants like YOU find it troublesome to find proper resources for their
                preparation.                    </p>

            <p className="text-sm text-[#12131A] mb-4">
                All your doubts regarding resources, tests, and your progress will be resolved here in your
                Student Dashboard on SuperKalam. 🌟                    </p>
            <p className='text-sm text-[#12131A] mb-4'>
                Glen Ltd. began construction of a new building on 1st January, 2022.<br/>
                On 1st April, 2022, following two loans were obtained to fund the construction cost :<br/><br/>

                (i) Loan of ₹ 60,00,000 from Data Bank Ltd. was taken at interest rate of 8% per annum. This loan was fully utilized for construction of the new building.<br/>
                (ii) Loan of ₹ 20,00,000 from Satya Bank Ltd. Out of this, loan amount of ₹ 6,00,000 was utilized for working capital purpose. Total interest of ₹ 1,92,000 were paid to Satya Bank Ltd. for the financial year 2022–23.<br/>
                Construction of the new building was completed on 31st January, 2023 and was ready for its intended use on the same date.<br/><br/>

                None of the loan was repaid during the year. The building is a qualifying asset for the purpose of AS-16.<br/>
                Out of loan from Data Bank Ltd., surplus funds were temporarily invested for the short period of time. This temporary investment earned interest of ₹ 30,000.<br/><br/>

                You are required to calculate the amount of interest (a) to be capitalized, (b) to be charged to profit and loss account from the total interest incurred as borrowing cost during the year 2022–23. (as per AS–16).
            </p>

            <div className="border-l-4 border-[#f57900] pl-4 text-sm bg-orange-gradient bg-clip-text text-transparent font-medium mb-6">
                Let's watch this short video to learn how you can empower yourself with SuperKalam
                Dashboard👇
            </div>
            {[...Array(2)].map((_, i) => (
                <p key={i} className="text-sm font-medium text-[#111314] mb-6">
                    {repeatedText}
                </p>
            ))}

            <p className="text-sm text-[#12131A] mt-4">
                All your doubts regarding resources, tests, and your progress will be resolved here in your <strong>Student Dashboard</strong> on SuperKalam. ✨
            </p>

        </div>
    )
}

export default HowToAttempt
