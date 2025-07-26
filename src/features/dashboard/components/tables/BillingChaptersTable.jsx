import { Table} from 'antd';
import style from '../style.module.scss'
const data = [
    {
        key: '1',
        invoice_number: '#240-120',
        billling_date: '12/05/2025',
        Description: "Apr-June Pro Plan",
        Amount: '₹2,000',
        downloadLink: '#'
    },
    {
        key: '2',
        invoice_number: '#240-120',
        billling_date: '12/05/2025',
        Description: "Apr-June Pro Plan",
        Amount: '₹2,000',
        downloadLink: '#'
    },
    {
        key: '3',
        invoice_number: '#240-120',
        billling_date: '12/05/2025',
        Description: "Apr-June Pro Plan",
        Amount: '₹2,000',
        downloadLink: '#'
    },
    {
        key: '4',
        invoice_number: '#240-120',
        billling_date: '12/05/2025',
        Description: "Apr-June Pro Plan",
        Amount: '₹2,000',
        downloadLink: '#'
    },
    {
        key: '5',
        invoice_number: '#240-120',
        billling_date: '12/05/2025',
        Description: "Apr-June Pro Plan",
        Amount: '₹2,000',
        downloadLink: '#'
    },
    {
        key: '6',
        invoice_number: '#240-120',
        billling_date: '12/05/2025',
        Description: "Apr-June Pro Plan",
        Amount: '₹2,000',
        downloadLink: '#'
    },

];
const columns = [
  {
    title: 'Invoice Number',
    dataIndex: 'invoice_number',
    key: 'invoice_number',
    render: (invoice_number) => (
      <p className="text-xs font-medium text-[#12131A] m-0">{invoice_number}</p>
    ),
  },
  {
    title: 'Billing Date',
    dataIndex: 'billling_date',
    key: 'billling_date',
    render: (date) => (
      <p className="text-xs font-medium text-[#12131A] m-0">{date}</p>
    ),
  },
  {
    title: 'Description',
    dataIndex: 'Description',
    key: 'Description',
    render: (desc) => (
      <p className="text-xs font-medium text-[#12131A] m-0">{desc}</p>
    ),
  },
  {
    title: 'Amount',
    dataIndex: 'Amount',
    key: 'Amount',
    render: (amount) => (
      <p className="text-xs font-medium text-[#12131A] m-0">{amount}</p>
    ),
  },
  {
    title: '',
    key: 'download',
    render: (_, record) => (
      <a
        href={record.downloadLink}
        className="text-xs border-b border-[#F6581C] bg-orange-gradient bg-clip-text text-transparent hover:bg-orange-gradient-hover hover:bg-clip-text hover:text-transparent font-medium"
      >
        Download
      </a>
    ),
  },
];

const BillingChaptersTable = () => {
    return (
        <div className={style.customTablebilling}>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered={false}
                scroll={{ x: 'max-content', y: '500px' }}
            />
        </div>
    );
};

export default BillingChaptersTable;
