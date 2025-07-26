import { Button } from 'antd'
import React from 'react'
import BillingChaptersTable from '../tables/BillingChaptersTable'

const PlansBillingsTab = () => {
  return (
    <div className="px-6 py-7 bg-white border border-[#f2f2f2] rounded-2xl">
      <h2 className="text-left text-xl font-medium text-black mb-0 py-6">Your Current Plan</h2>
      <div className='py-6 border-t border-b border-[#f2f2f2] flex items-center justify-between gap-1'>
        <div>
          <p className="mb-2 text-xs text-left border-[#F6581C] bg-orange-gradient bg-clip-text text-transparent hover:bg-orange-gradient-hover hover:bg-clip-text hover:text-transparent font-medium">Plan Details</p>
          <p className='mb-0 text-base font-medium text-black text-left'>
            Pro Plan – ₹2,000/<span className='text-xs text-[#666]'>3 Months</span>
          </p>
        </div>
        <Button
          type="ghost"
          className="disabled:bg-transparent disabled:border-[#f57900] border-[#f57900] disabled:text-black-800 bg-orange-gradient hover:bg-orange-gradient-hover text-white text-base font-bold leading-4 py-3 px-6 w-fit h-auto" // Tailwind for styling
        >
          Upgrade Now
        </Button>
      </div>
      <h2 className="text-left text-xl font-medium text-black mb-0 py-6">Chapters</h2>
<BillingChaptersTable />
    </div>
  )
}

export default PlansBillingsTab
