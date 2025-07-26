import { Table, Progress } from 'antd';
import NameBeforeIcon from '../../../../assets/icons/name-icon.png'
import style from '../style.module.scss'
const data = [
    {
        key: '1',
        name: 'Introduction to Business Economics',
        topics: [
            'Meaning and scope of Business Economics',
            'Basic Problems of an Economy and Role of Price Mechanism.',
        ],
        questions: 120,
        progress: 91,
    },
        {
        key: '2',
        name: 'Introduction to Business Economics',
        topics: [
            'Meaning and scope of Business Economics',
            'Basic Problems of an Economy and Role of Price Mechanism.',
        ],
        questions: 20,
        progress: 65,
    },
        {
        key: '3',
        name: 'Introduction to Business Economics',
        topics: [
            'Meaning and scope of Business Economics',
            'Basic Problems of an Economy and Role of Price Mechanism.',
        ],
        questions: 110,
        progress: 70,
    },
        {
        key: '4',
        name: 'Introduction to Business Economics',
        topics: [
            'Meaning and scope of Business Economics',
            'Basic Problems of an Economy and Role of Price Mechanism.',
        ],
        questions: 140,
        progress: 80,
    },

];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (_, record) => (
            <div className="flex items-start gap-3 flex-col">
                <img src={NameBeforeIcon} alt="" className='w-7 h-7 object-contain' />
                <p className="text-xs font-normal text-black m-0">{record.name}</p>
            </div>
        ),
    },
    {
        title: 'Topics',
        dataIndex: 'topics',
        render: (topics) => (
            <div className="flex flex-col gap-3">
                {topics.map((topic, i) => (
                    <div key={i} className="max-w-[290px] px-3 py-2 shadow-inner-border rounded-lg w-fit">
                        <p className='text-[10px] font-bold text-[#12131A] m-0' >{topic}</p>
                    </div>
                ))}
            </div>
        ),
    },
    {
        title: 'Questions Practiced',
        dataIndex: 'questions',
        render: (count) => (
            <p className='text-[#12131A] font-medium text-[10px] m-0'>
                <span className="font-semibold">{count}</span> Questions
            </p>

        ),
    },
    {
        title: 'Progress',
        dataIndex: 'progress',
        render: (progress) => (
            <div className="flex items-center gap-2">
                <Progress type="circle" percent={progress} width={40} strokeColor="#f57900" />
                <span className="text-sm font-medium">Completed</span>
            </div>
        ),
    },
    {
        title: '',
        dataIndex: 'action',
        render: () => (
            <a className="text-xs border-b border-[#F6581C] bg-orange-gradient bg-clip-text text-transparent hover:bg-orange-gradient-hover hover:bg-clip-text hover:text-transparent font-medium">Start Practicing</a>
        ),
    },
];

const PracticeTable = () => {
    return (
        <div className={style.customTableDashboard}>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered={false}
                scroll={{ x: 'max-content' }}
            />
        </div>
    );
};

export default PracticeTable;
