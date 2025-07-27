export const testInsightsData = [
  {
    id: 1,
    questionNumber: 1,
    type: "Multiple Choice",
    points: 4,
    title: "Hire-Purchase Transaction: Montrek Limited",
    description:
      "Montrek Limited purchased 2 machines costing ₹2,80,000 each from M. K. Traders on 1 April 2021 on hire-purchase basis.",
    termsTitle: "Terms of payment for both machines together:",
    additionalInfoTitle: "Additional Information:",
    additionalInfo: [
      "M. K. Traders charges interest @ 8% p.a., payable half-yearly.",
      "Instalment payments cover principal + interest.",
      "Montrek Ltd. writes off depreciation @ 20% p.a. diminishing-balance method.",
      "Montrek Ltd. has paid 3 half-yearly instalments but could not pay the 4th instalment due on 31 March 2023.",
      "M. K. Traders re-possessed one of the machines on 31 March 2023, adjusting its value against amounts due.",
      "Re-possession was done on the basis of 25% p.a. depreciation (diminishing balance), assuming the balance due would be paid off in the next year.",
    ],
    requirement:
      "You are required to prepare up to 31 March 2023 (books of Montrek Ltd):",
    requirementPoints: ["1. Machinery Account;", "2. M. K. Traders Account."],
    answers: [
      {
        label: "Machinery Account",
        placeholder: "Type your answer here",
      },
      {
        label: "M.K Traders Account",
        placeholder: "Type your answer here",
      },
    ],
  },
  {
    id: 2,
    questionNumber: 2,
    type: "Multiple Choice",
    points: 6,
    title: "Partnership Dissolution: ABC Partnership",
    description:
      "ABC Partnership consists of three partners A, B, and C sharing profits in the ratio 3:2:1. The partnership is being dissolved on 31st March 2023.",
    termsTitle: "Partnership details:",
    additionalInfoTitle: "Balance Sheet information:",
    additionalInfo: [
      "Capital accounts: A - ₹50,000, B - ₹40,000, C - ₹30,000",
      "Current accounts: A - ₹5,000 (Cr), B - ₹3,000 (Dr), C - ₹2,000 (Cr)",
      "Assets realized for ₹80,000 against book value of ₹90,000",
      "Liabilities paid off at ₹15,000",
      "Dissolution expenses amounted to ₹2,000",
    ],
    requirement: "You are required to prepare:",
    requirementPoints: [
      "1. Realization Account;",
      "2. Partners' Capital Accounts.",
    ],
    answers: [
      {
        label: "Realization Account",
        placeholder: "Enter the realization account details",
      },
      {
        label: "Partners' Capital Accounts",
        placeholder: "Enter the capital accounts details",
      },
    ],
  },
  {
    id: 3,
    questionNumber: 3,
    type: "Multiple Choice",
    points: 5,
    title: "Company Accounts: Share Capital",
    description:
      "XYZ Limited was incorporated with an authorized capital of ₹10,00,000 divided into 1,00,000 equity shares of ₹10 each.",
    termsTitle: "Share issue details:",
    additionalInfoTitle: "Transaction details:",
    additionalInfo: [
      "50,000 shares were issued to the public at ₹12 per share (including premium of ₹2)",
      "All shares were fully subscribed and paid",
      "Application money: ₹3 per share",
      "Allotment money: ₹4 per share (including premium)",
      "First call: ₹3 per share",
      "Final call: ₹2 per share",
    ],
    requirement: "Prepare the following accounts:",
    requirementPoints: [
      "1. Share Capital Account;",
      "2. Securities Premium Account.",
    ],
    answers: [
      {
        label: "Share Capital Account",
        placeholder: "Enter share capital account entries",
      },
      {
        label: "Securities Premium Account",
        placeholder: "Enter securities premium account entries",
      },
    ],
  },
  {
    id: 4,
    questionNumber: 4,
    type: "Multiple Choice",
    points: 8,
    title: "Bills of Exchange: Accommodation Bill",
    description:
      "Ram and Shyam are friends. Ram needs cash urgently and requests Shyam to help him by way of accommodation bill.",
    termsTitle: "Bill details:",
    additionalInfoTitle: "Transaction sequence:",
    additionalInfo: [
      "Ram draws a bill for ₹20,000 on Shyam for 3 months",
      "Shyam accepts the bill",
      "Ram discounts the bill with bank @ 12% p.a.",
      "On maturity, Shyam pays the bill",
      "Ram reimburses Shyam immediately",
    ],
    requirement: "Pass journal entries in the books of:",
    requirementPoints: ["1. Ram (Drawer);", "2. Shyam (Drawee)."],
    answers: [
      {
        label: "Ram's Books (Drawer)",
        placeholder: "Enter journal entries for Ram",
      },
      {
        label: "Shyam's Books (Drawee)",
        placeholder: "Enter journal entries for Shyam",
      },
    ],
  },
  {
    id: 5,
    questionNumber: 5,
    type: "Multiple Choice",
    points: 7,
    title: "Consignment: Goods sent on Consignment",
    description:
      "Delhi Trading Co. consigned goods worth ₹1,00,000 to Mumbai Sales Agency on 1st January 2023.",
    termsTitle: "Consignment terms:",
    additionalInfoTitle: "Transaction details:",
    additionalInfo: [
      "Commission: 10% on sales plus 2% del credere commission",
      "Expenses incurred by consignee: ₹5,000",
      "Sales made by consignee: ₹80,000",
      "Goods stolen from consignee's godown: ₹10,000 (insured for 80%)",
      "Consignee sent account sales along with payment",
    ],
    requirement: "Prepare in the books of Delhi Trading Co.:",
    requirementPoints: [
      "1. Consignment Account;",
      "2. Mumbai Sales Agency Account.",
    ],
    answers: [
      {
        label: "Consignment Account",
        placeholder: "Enter consignment account details",
      },
      {
        label: "Mumbai Sales Agency Account",
        placeholder: "Enter consignee account details",
      },
    ],
  },
  //   question 6
  {
    id: 6,
    questionNumber: 6,
    type: "Multiple Choice",
    points: 9,
    title: "Joint Venture: Joint Venture Agreement",
    description:
      "A and B entered into a joint venture to construct a building. A contributed ₹2,00,000 and B contributed ₹1,50,000.",
    termsTitle: "Joint venture terms:",
    additionalInfoTitle: "Transaction details:",
    additionalInfo: [
      "A's share of profit is 60% and B's share is 40%",
      "Total expenses incurred were ₹3,00,000",
      "Building sold for ₹5,00,000",
    ],
    requirement: "Prepare the following accounts:",
    requirementPoints: [
      "1. Joint Venture Account;",
      "2. A's Capital Account;",
      "3. B's Capital Account.",
    ],
    answers: [
      {
        label: "Joint Venture Account",
        placeholder: "Enter joint venture account details",
      },
      {
        label: "A's Capital Account",
        placeholder: "Enter A's capital account details",
      },
      {
        label: "B's Capital Account",
        placeholder: "Enter B's capital account details",
      },
    ],
  },
  {
    id: 7,
    questionNumber: 7,
    type: "Multiple Choice",
    points: 10,
    title: "Final Accounts: Manufacturing Account",
    description:
      "XYZ Manufacturing Co. prepares its final accounts for the year ended 31st March 2023.",
    termsTitle: "Financial details:",
    additionalInfoTitle: "Transaction details:",
    additionalInfo: [
      "Opening stock of raw materials: ₹50,000",
      "Purchases of raw materials during the year: ₹2,00,000",
      "Direct wages paid: ₹1,00,000",
      "Factory overheads incurred: ₹30,000",
      "Closing stock of raw materials: ₹40,000",
    ],
    requirement: "Prepare the following accounts:",
    requirementPoints: ["1. Manufacturing Account;", "2. Trading Account."],
    answers: [
      {
        label: "Manufacturing Account",
        placeholder: "Enter manufacturing account details",
      },
      {
        label: "Trading Account",
        placeholder: "Enter trading account details",
      },
    ],
  },
  {
    id: 8,
    questionNumber: 8,
    type: "Multiple Choice",
    points: 11,
    title: "Ratio Analysis: Financial Ratios",
    description:
      "ABC Ltd. has the following financial data for the year ended 31st March 2023.",
    termsTitle: "Financial data:",
    additionalInfoTitle: "Transaction details:",
    additionalInfo: [
      "Net profit: ₹1,50,000",
      "Total assets: ₹10,00,000",
      "Current liabilities: ₹2,00,000",
      "Shareholders' equity: ₹5,00,000",
      "Sales revenue: ₹8,00,000",
    ],
    requirement: "Calculate the following ratios:",
    requirementPoints: [
      "1. Return on Assets (ROA);",
      "2. Current Ratio;",
      "3. Return on Equity (ROE).",
    ],
    answers: [
      {
        label: "Return on Assets (ROA)",
        placeholder: "Enter ROA calculation",
      },
      {
        label: "Current Ratio",
        placeholder: "Enter current ratio calculation",
      },
      {
        label: "Return on Equity (ROE)",
        placeholder: "Enter ROE calculation",
      },
    ],
  },
  {
    id: 9,
    questionNumber: 9,
    type: "Multiple Choice",
    points: 12,
    title: "Cash Flow Statement: Cash Flow from Operations",
    description:
      "XYZ Ltd. prepares its cash flow statement for the year ended 31st March 2023.",
    termsTitle: "Financial data:",
    additionalInfoTitle: "Transaction details:",
    additionalInfo: [
      "Net income: ₹2,00,000",
      "Depreciation expense: ₹50,000",
      "Increase in accounts receivable: ₹20,000",
      "Decrease in accounts payable: ₹10,000",
      "Cash paid for interest: ₹5,000",
    ],
    requirement:
      "Prepare the cash flow statement for cash flows from operating activities.",
    requirementPoints: ["1. Cash Flow from Operations."],
    answers: [
      {
        label: "Cash Flow from Operations",
        placeholder: "Enter cash flow from operations details",
      },
    ],
  },
  {
    id: 10,
    questionNumber: 10,
    type: "Multiple Choice",
    points: 13,
    title: "Financial Statements: Balance Sheet",
    description: "ABC Ltd. prepares its balance sheet as of 31st March 2023.",
    termsTitle: "Financial data:",
    additionalInfoTitle: "Transaction details:",
    additionalInfo: [
      "Total assets: ₹15,00,000",
      "Total liabilities: ₹8,00,000",
      "Shareholders' equity: ₹7,00,000",
      "Retained earnings: ₹2,00,000",
    ],
    requirement: "Prepare the balance sheet in vertical format.",
    requirementPoints: ["1. Balance Sheet."],
    answers: [
      {
        label: "Balance Sheet",
        placeholder: "Enter balance sheet details",
      },
    ],
  },
  {
    id: 11,
    questionNumber: 11,
    type: "Multiple Choice",
    points: 14,
    title: "Depreciation Accounting: Straight-Line Method",
    description:
      "XYZ Ltd. purchased a machine for ₹1,00,000 on 1st April 2022 with an estimated useful life of 5 years and a residual value of ₹10,000.",
    termsTitle: "Depreciation details:",
    additionalInfoTitle: "Transaction details:",
    additionalInfo: [
      "Depreciation is calculated using the straight-line method.",
      "The company closes its books on 31st March each year.",
    ],
    requirement:
      "Calculate the annual depreciation expense and prepare the depreciation account for the first two years.",
    requirementPoints: ["1. Depreciation Account."],
    answers: [
      {
        label: "Depreciation Account",
        placeholder: "Enter depreciation account details",
      },
    ],
  },
  {
    id: 12,
    questionNumber: 12,
    type: "Multiple Choice",
    points: 15,
    title: "Inventory Valuation: FIFO Method",
    description:
      "ABC Ltd. has the following inventory transactions during the year ended 31st March 2023.",
    termsTitle: "Inventory transactions:",
    additionalInfoTitle: "Transaction details:",
    additionalInfo: [
      "Opening inventory: 100 units at ₹50 each",
      "Purchases: 200 units at ₹60 each",
      "Sales: 250 units at ₹80 each",
    ],
    requirement:
      "Calculate the cost of goods sold and closing inventory using the FIFO method.",
    requirementPoints: ["1. Cost of Goods Sold;", "2. Closing Inventory."],
    answers: [
      {
        label: "Cost of Goods Sold",
        placeholder: "Enter COGS calculation",
      },
      {
        label: "Closing Inventory",
        placeholder: "Enter closing inventory calculation",
      },
    ],
  },
  {
    id: 13,
    questionNumber: 13,
    type: "Multiple Choice",
    points: 16,
    title: "Financial Analysis: Profitability Ratios",
    description:
      "XYZ Ltd. has the following financial data for the year ended 31st March 2023.",
    termsTitle: "Financial data:",
    additionalInfoTitle: "Transaction details:",
    additionalInfo: [
      "Net profit: ₹3,00,000",
      "Sales revenue: ₹20,00,000",
      "Total assets: ₹25,00,000",
      "Shareholders' equity: ₹10,00,000",
    ],
    requirement: "Calculate the following profitability ratios:",
    requirementPoints: [
      "1. Gross Profit Margin;",
      "2. Net Profit Margin;",
      "3. Return on Assets (ROA).",
    ],
    answers: [
      {
        label: "Gross Profit Margin",
        placeholder: "Enter gross profit margin calculation",
      },
      {
        label: "Net Profit Margin",
        placeholder: "Enter net profit margin calculation",
      },
      {
        label: "Return on Assets (ROA)",
        placeholder: "Enter ROA calculation",
      },
    ],
  },
  {
    id: 14,
    questionNumber: 14,
    type: "Multiple Choice",
    points: 17,
    title: "Budgeting: Flexible Budget",
    description:
      "XYZ Ltd. prepares a flexible budget for the year ended 31st March 2023.",
    termsTitle: "Budget details:",
    additionalInfoTitle: "Transaction details:",
    additionalInfo: [
      "Estimated sales volume: 10,000 units",
      "Estimated variable cost per unit: ₹20",
      "Estimated fixed costs: ₹1,00,000",
    ],
    requirement:
      "Prepare a flexible budget for sales and costs at different levels of activity (5,000, 10,000, and 15,000 units).",
    requirementPoints: ["1. Flexible Budget."],
    answers: [
      {
        label: "Flexible Budget",
        placeholder: "Enter flexible budget details",
      },
    ],
  },
  {
    id: 15,
    questionNumber: 15,
    type: "Multiple Choice",
    points: 18,
    title: "Financial Reporting: Segment Reporting",
    description: "ABC Ltd. operates in two segments: Manufacturing and Retail.",
    termsTitle: "Segment details:",
    additionalInfoTitle: "Transaction details:",
    additionalInfo: [
      "Manufacturing segment revenue: ₹50,00,000",
      "Retail segment revenue: ₹30,00,000",
      "Manufacturing segment expenses: ₹40,00,000",
      "Retail segment expenses: ₹20,00,000",
    ],
    requirement: "Prepare a segment reporting statement for the two segments.",
    requirementPoints: ["1. Segment Reporting Statement."],
    answers: [
      {
        label: "Segment Reporting Statement",
        placeholder: "Enter segment reporting details",
      },
    ],
  },
  {
    id: 16,
    questionNumber: 16,
    type: "Multiple Choice",
    points: 19,
    title: "Financial Management: Capital Budgeting",
    description:
      "XYZ Ltd. is considering a new project with the following cash flows.",
    termsTitle: "Project cash flows:",
    additionalInfoTitle: "Transaction details:",
    additionalInfo: [
      "Initial investment: ₹5,00,000",
      "Year 1 cash flow: ₹2,00,000",
      "Year 2 cash flow: ₹2,50,000",
      "Year 3 cash flow: ₹3,00,000",
      "Discount rate: 10%",
    ],
    requirement: "Calculate the Net Present Value (NPV) of the project.",
    requirementPoints: ["1. Net Present Value (NPV)."],
    answers: [
      {
        label: "Net Present Value (NPV)",
        placeholder: "Enter NPV calculation",
      },
    ],
  },
  {
    id: 17,
    questionNumber: 17,
    type: "Multiple Choice",
    points: 20,
    title: "Financial Management: Working Capital Management",
    description: "XYZ Ltd. is analyzing its working capital requirements.",
    termsTitle: "Working capital details:",
    additionalInfoTitle: "Transaction details:",
    additionalInfo: [
      "Current assets: ₹10,00,000",
      "Current liabilities: ₹5,00,000",
    ],
    requirement: "Calculate the following working capital metrics:",
    requirementPoints: [
      "1. Working Capital;",
      "2. Current Ratio;",
      "3. Quick Ratio.",
    ],
    answers: [
      {
        label: "Working Capital",
        placeholder: "Enter working capital calculation",
      },
      {
        label: "Current Ratio",
        placeholder: "Enter current ratio calculation",
      },
      {
        label: "Quick Ratio",
        placeholder: "Enter quick ratio calculation",
      },
    ],
  },
  {
    id: 18,
    questionNumber: 18,
    type: "Multiple Choice",
    points: 21,
    title: "Financial Management: Cost of Capital",
    description: "XYZ Ltd. is calculating its cost of capital.",
    termsTitle: "Capital structure details:",
    additionalInfoTitle: "Transaction details:",
    additionalInfo: [
      "Equity capital: ₹5,00,000",
      "Debt capital: ₹3,00,000",
      "Cost of equity: 12%",
      "Cost of debt (after tax): 8%",
    ],
    requirement: "Calculate the Weighted Average Cost of Capital (WACC).",
    requirementPoints: ["1. Weighted Average Cost of Capital (WACC)."],
    answers: [
      {
        label: "Weighted Average Cost of Capital (WACC)",
        placeholder: "Enter WACC calculation",
      },
    ],
  },
  {
    id: 19,
    questionNumber: 19,
    type: "Multiple Choice",
    points: 22,
    title: "Financial Management: Dividend Policy",
    description: "XYZ Ltd. is reviewing its dividend policy.",
    termsTitle: "Dividend details:",
    additionalInfoTitle: "Transaction details:",
    additionalInfo: [
      "Net income for the year: ₹4,00,000",
      "Retained earnings at the beginning of the year: ₹2,00,000",
      "Proposed dividend payout ratio: 40%",
    ],
    requirement: "Calculate the following:",
    requirementPoints: [
      "1. Total dividends to be paid;",
      "2. Retained earnings at the end of the year.",
    ],
    answers: [
      {
        label: "Total Dividends",
        placeholder: "Enter total dividends calculation",
      },
      {
        label: "Retained Earnings",
        placeholder: "Enter retained earnings calculation",
      },
    ],
  },
  {
    id: 20,
    questionNumber: 20,
    type: "Multiple Choice",
    points: 23,
    title: "Financial Management: Financial Leverage",
    description: "XYZ Ltd. is analyzing its financial leverage.",
    termsTitle: "Leverage details:",
    additionalInfoTitle: "Transaction details:",
    additionalInfo: [
      "Total assets: ₹15,00,000",
      "Total liabilities: ₹8,00,000",
      "Equity capital: ₹7,00,000",
      "Earnings before interest and taxes (EBIT): ₹3,00,000",
    ],
    requirement: "Calculate the following leverage metrics:",
    requirementPoints: [
      "1. Debt to Equity Ratio;",
      "2. Financial Leverage Ratio.",
    ],
    answers: [
      {
        label: "Debt to Equity Ratio",
        placeholder: "Enter debt to equity ratio calculation",
      },
      {
        label: "Financial Leverage Ratio",
        placeholder: "Enter financial leverage ratio calculation",
      },
    ],
  },
];
