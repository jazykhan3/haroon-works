import { Table } from 'antd';
import style from '../style.module.scss'
const data = [
  {
    key: '1',
    date: '12/05/2025',
    user_details: "Mahinder",
    status: 'Successfull',
  },
  {
    key: '2',
    date: '12/05/2025',
    user_details: "Mahinder",
    status: 'Successfull',
  },
  {
    key: '3',
    date: '12/05/2025',
    user_details: "Mahinder",
    status: 'Successfull',
  },
  {
    key: '4',
    date: '12/05/2025',
    user_details: "Mahinder",
    status: 'Step2',
  },

];
const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (date) => (
      <p className="text-xs font-medium text-[#12131A] m-0">{date}</p>
    ),
  },
  {
    title: 'User Details',
    dataIndex: 'user_details',
    key: 'user_details',
    render: (user) => (
      <p className="text-xs font-medium text-[#12131A] m-0">{user}</p>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <span
        className={`text-xs font-medium m-0 py-[6px] px-[22px] text-white rounded-full ${status === 'Successfull'
            ? 'bg-[#08BD80]'
            : 'bg-[#F2CB27]'
          }`}
      >
        {status}
      </span>
    ),
  },
];

const ReferralsTable = () => {
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

export default ReferralsTable;
