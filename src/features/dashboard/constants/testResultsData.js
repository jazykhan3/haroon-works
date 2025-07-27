export const testResultsData = [

  {
    id: 1,
    questionNumber: 1,
    type: "Multiple Choice",
    points: 4,
    status: "correct",
    title: "What is the difference between exemption and deduction under Income Tax Act?",
    options: [
      "Exemption reduces taxable income while deduction reduces tax liability",
      "Deduction reduces taxable income while exemption reduces tax liability", 
      "Both exemption and deduction reduce taxable income",
      "Both exemption and deduction reduce tax liability"
    ],
    correctAnswer: 1,
    selectedAnswer: 1,
    explanation: "Deduction reduces taxable income while exemption reduces tax liability directly."
  },
  {
    id: 2,
    questionNumber: 2,
    type: "Multiple Choice", 
    points: 4,
    status: "wrong",
    title: "Which section deals with salary income under Income Tax Act?",
    options: [
      "Section 15",
      "Section 16", 
      "Section 17",
      "All of the above"
    ],
    correctAnswer: 3,
    selectedAnswer: 1,
    explanation: "Section 17 specifically deals with salary income definitions and inclusions."
  },
  {
    id: 3,
    questionNumber: 3,
    type: "Multiple Choice",
    points: 4,
    status: "correct",
    title: "What is the maximum exemption limit for HRA?",
    options: [
      "50% of salary",
      "Actual HRA received",
      "Actual rent paid minus 10% of salary", 
      "Minimum of the above three"
    ],
    correctAnswer: 3,
    selectedAnswer: 3,
    explanation: "HRA exemption is the minimum of actual HRA, 50% of salary, and rent paid minus 10% of salary."
  },
  {
    id: 4,
    questionNumber: 4,
    type: "Multiple Choice",
    points: 4,
    status: "wrong",
    title: "Which method is used for depreciation under Income Tax Act?",
    options: [
      "Straight Line Method",
      "Written Down Value Method",
      "Sum of Years Digit Method",
      "Double Declining Method"
    ],
    correctAnswer: 1,
    selectedAnswer: 0,
    explanation: "Income Tax Act uses Written Down Value (WDV) method for calculating depreciation."
  },
  {
    id: 5,
    questionNumber: 5,
    type: "Multiple Choice",
    points: 4,
    status: "correct",
    title: "What is the rate of TDS on salary?",
    options: [
      "As per slab rates",
      "10%",
      "20%", 
      "30%"
    ],
    correctAnswer: 0,
    selectedAnswer: 0,
    explanation: "TDS on salary is deducted as per applicable income tax slab rates."
  },
  {
    id: 6,
    questionNumber: 6,
    type: "Multiple Choice",
    points: 4,
    status: "unanswered",
    title: "Which form is used for filing income tax return by individuals?",
    options: [
      "ITR-1",
      "ITR-2", 
      "ITR-3",
      "All of the above"
    ],
    correctAnswer: 3,
    selectedAnswer: null,
    explanation: "Different ITR forms are used based on income sources and amount."
  },
  {
    id: 7,
    questionNumber: 7,
    type: "Multiple Choice",
    points: 4,
    status: "correct",
    title: "What is the limit for cash payment to avoid disallowance under section 40A(3)?",
    options: [
      "₹10,000",
      "₹20,000",
      "₹35,000",
      "₹50,000"
    ],
    correctAnswer: 1,
    selectedAnswer: 1,
    explanation: "Cash payments exceeding ₹20,000 are disallowed under section 40A(3)."
  },
  {
    id: 8,
    questionNumber: 8,
    type: "Multiple Choice",
    points: 4,
    status: "wrong",
    title: "Which section deals with capital gains?",
    options: [
      "Section 45",
      "Section 48",
      "Section 49",
      "All of the above"
    ],
    correctAnswer: 3,
    selectedAnswer: 0,
    explanation: "Sections 45-55 collectively deal with capital gains taxation."
  },
  {
    id: 9,
    questionNumber: 9,
    type: "Multiple Choice",
    points: 4,
    status: "correct",
    title: "What is the holding period for long term capital gains on equity shares?",
    options: [
      "12 months",
      "24 months",
      "36 months",
      "No holding period"
    ],
    correctAnswer: 0,
    selectedAnswer: 0,
    explanation: "Equity shares need to be held for more than 12 months for LTCG."
  },
  {
    id: 10,
    questionNumber: 10,
    type: "Multiple Choice",
    points: 4,
    status: "unanswered",
    title: "Which section provides deduction for medical insurance premium?",
    options: [
      "Section 80C",
      "Section 80D",
      "Section 80E",
      "Section 80G"
    ],
    correctAnswer: 1,
    selectedAnswer: null,
    explanation: "Section 80D provides deduction for medical insurance premiums."
  },
  

  {
    id: 11,
    questionNumber: 11,
    type: "Text Answer",
    points: 6,
    status: "correct",
    title: "Explain the concept of Hire-Purchase and prepare Machinery Account for Montrek Limited.",
    userAnswer: "Hire-purchase is a system where the buyer pays for goods in installments and gets ownership only after paying all installments. For Montrek Limited: The machinery account will show the cost, depreciation, and final book value after repossession.",
    modelAnswer: "Hire-purchase is a transaction where goods are purchased through installment payments, with ownership transferring only upon complete payment. The Machinery Account should reflect initial cost, depreciation at 20% p.a., and adjustment for repossession.",
    pointsEarned: 6
  },
  {
    id: 12,
    questionNumber: 12,
    type: "Text Answer",
    points: 6,
    status: "wrong",
    title: "Calculate the partnership profit sharing ratio and prepare dissolution account for ABC Partnership.",
    userAnswer: "The profit sharing ratio is 3:2:1. During dissolution, assets are sold and liabilities are paid off.",
    modelAnswer: "Partnership profit sharing ratio is 3:2:1 for A:B:C. Dissolution account should show assets realized (₹80,000), liabilities paid (₹15,000), dissolution expenses (₹2,000), and profit/loss distribution among partners as per their profit sharing ratio.",
    pointsEarned: 2
  },
  {
    id: 13,
    questionNumber: 13,
    type: "Text Answer",
    points: 6,
    status: "correct",
    title: "Prepare Share Capital Account and Securities Premium Account for XYZ Limited.",
    userAnswer: "Share Capital Account will be debited with application, allotment, and call money. Securities Premium Account will show the premium of ₹2 per share collected during allotment.",
    modelAnswer: "Share Capital Account: Dr. Bank A/c for application, allotment, and calls; Cr. Share Capital A/c. Securities Premium Account: Dr. Bank A/c ₹1,00,000; Cr. Securities Premium A/c ₹1,00,000 (50,000 shares × ₹2 premium).",
    pointsEarned: 5
  },
  {
    id: 14,
    questionNumber: 14,
    type: "Text Answer",
    points: 8,
    status: "unanswered",
    title: "Pass journal entries for accommodation bill transactions in the books of Ram and Shyam.",
    userAnswer: "",
    modelAnswer: "Ram's Books: Dr. Bills Receivable A/c, Cr. Bills Payable A/c; Dr. Bank A/c, Cr. Bills Receivable A/c (discounted); Dr. Shyam A/c, Cr. Bank A/c (reimbursement). Shyam's Books: Dr. Bills Payable A/c, Cr. Ram A/c; Dr. Ram A/c, Cr. Bank A/c (payment at maturity).",
    pointsEarned: 0
  },
  {
    id: 15,
    questionNumber: 15,
    type: "Text Answer",
    points: 7,
    status: "correct",
    title: "Prepare Consignment Account and Mumbai Sales Agency Account for Delhi Trading Co.",
    userAnswer: "Consignment Account will show goods sent, expenses, sales, commission, and closing stock. Mumbai Sales Agency Account will show commission earned and expenses incurred.",
    modelAnswer: "Consignment Account: Dr. Goods sent (₹1,00,000), Expenses (₹5,000); Cr. Sales (₹80,000), Closing stock, P&L. Mumbai Sales Agency A/c: Dr. Commission ₹9,600 (12% of ₹80,000); Cr. Cash, Expenses.",
    pointsEarned: 6
  },
  {
    id: 16,
    questionNumber: 16,
    type: "Text Answer",
    points: 5,
    status: "wrong",
    title: "Explain the differences between Cash Flow Statement and Fund Flow Statement.",
    userAnswer: "Cash Flow Statement shows cash movements while Fund Flow Statement shows fund movements.",
    modelAnswer: "Cash Flow Statement records actual cash receipts and payments during a period, classified into operating, investing, and financing activities. Fund Flow Statement shows movement of working capital between two balance sheet dates, focusing on sources and applications of funds. Key difference: Cash Flow uses cash basis while Fund Flow uses accrual basis.",
    pointsEarned: 1
  },
  {
    id: 17,
    questionNumber: 17,
    type: "Text Answer",
    points: 6,
    status: "correct",
    title: "Calculate Earning Per Share (EPS) and explain its significance.",
    userAnswer: "EPS = Net Profit / Number of Equity Shares. It shows the earning per share and helps investors evaluate company performance.",
    modelAnswer: "EPS = (Net Profit - Preference Dividend) / Weighted Average Number of Equity Shares Outstanding. It indicates the company's profitability on per share basis and is crucial for investment decisions, share valuation, and comparative analysis.",
    pointsEarned: 5
  },
  {
    id: 18,
    questionNumber: 18,
    type: "Text Answer",
    points: 7,
    status: "unanswered",
    title: "Prepare Bank Reconciliation Statement and explain common causes of differences.",
    userAnswer: "",
    modelAnswer: "Bank Reconciliation Statement reconciles bank balance as per cash book with bank statement. Common differences: Cheques issued but not presented, deposits made but not credited, bank charges, interest earned, dishonored cheques, and errors in recording.",
    pointsEarned: 0
  },
  {
    id: 19,
    questionNumber: 19,
    type: "Text Answer",
    points: 6,
    status: "correct",
    title: "Explain the concept of Goodwill and methods of its valuation.",
    userAnswer: "Goodwill represents intangible value of business reputation. Methods include Average Profit Method, Super Profit Method, and Capitalization Method.",
    modelAnswer: "Goodwill is the value of business reputation, customer loyalty, and earning capacity above normal. Valuation methods: 1) Average Profit Method (Average Profit × Number of years), 2) Super Profit Method (Super Profit × Number of years), 3) Capitalization Method (Capitalized value - Net assets).",
    pointsEarned: 6
  },
  {
    id: 20,
    questionNumber: 20,
    type: "Text Answer",
    points: 8,
    status: "wrong",
    title: "Prepare Trading and Profit & Loss Account and explain the purpose of each section.",
    userAnswer: "Trading Account shows gross profit. P&L Account shows net profit.",
    modelAnswer: "Trading Account: Shows gross profit by comparing sales with cost of goods sold (Opening stock + Purchases + Direct expenses - Closing stock). Profit & Loss Account: Shows net profit by deducting indirect expenses from gross profit and adding other incomes. Purpose: Trading A/c measures trading efficiency; P&L A/c measures overall business profitability.",
    pointsEarned: 2
  }
];
