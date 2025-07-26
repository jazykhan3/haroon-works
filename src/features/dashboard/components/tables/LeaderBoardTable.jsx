import React from 'react';
import { Table, Avatar, Tag } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import avatorIcon from '../../../../assets/icons/pfp.png'
import style from '../style.module.scss'

const LeaderBoardTable = () => {
    const columns = [
        {
            title: 'RANK',
            dataIndex: 'rank',
            key: 'rank',
            render: (text, record) => (
                <p className='font-bold text-sm text-[#12131A] m-0 flex flex-row gap-1 items-center'>
                    <span className="">{text}</span>
                    {record.rankChange === 'up' && <CaretUpOutlined className="text-[#08BD80]" />}
                    {record.rankChange === 'down' && <CaretDownOutlined className="text-[#FF5B28]" />}
                </p>
            ),
            width: 100,
        },
        {
            title: 'USER NAME',
            dataIndex: 'userName',
            key: 'userName',
            render: (text, record) => (
                <p className="font-bold text-sm text-[#666] m-0 flex flex-row gap-1 items-center">
                    <Avatar src={record.avatarUrl} className='w-6 h-6'/>
                    <span className="">{text}</span>
                </p>
            ),
        },
        {
            title: 'POINTS',
            dataIndex: 'points',
            key: 'points',
            render: (text) => (
                <Tag color="#08BD80" className="rounded-full px-3 py-1 font-medium text-[10px] text-white leading-[10px]">
                    {text} PTS
                </Tag>
            ),
            width: 120,
        },
        {
            title: 'ACCURACY',
            dataIndex: 'accuracy',
            key: 'accuracy',
            render: (text) => (
                <span className="font-bold text-sm" style={{ color: text >= 70 ? '#08BD80' : (text >= 50 ? '#F2CB27' : '#F02111') }}>
                    {text}%
                </span>
            ),
            width: 120,
        },
    ];

    const data = [
        {
            key: '1',
            rank: '#4',
            rankChange: 'up',
            userName: 'Rajdeep Sarkar',
            avatarUrl: avatorIcon,
            points: '2,406',
            accuracy: 80,
        },
        {
            key: '2',
            rank: '#4',
            rankChange: 'up',
            userName: 'Rajdeep Sarkar',
            avatarUrl: avatorIcon,
            points: '2,406',
            accuracy: 30,
        },
        {
            key: '3',
            rank: '#4',
            rankChange: 'up',
            userName: 'Rajdeep Sarkar',
            avatarUrl: avatorIcon,
            points: '2,406',
            accuracy: 65,
        },
        {
            key: '4',
            rank: '#4',
            rankChange: 'up',
            userName: 'Rajdeep Sarkar',
            avatarUrl: avatorIcon,
            points: '2,406',
            accuracy: 48,
        },
        {
            key: '5',
            rank: '#4',
            rankChange: 'up',
            userName: 'Rajdeep Sarkar',
            avatarUrl: avatorIcon,
            points: '2,406',
            accuracy: 80,
        },
        {
            key: '6',
            rank: '#10',
            rankChange: 'down',
            userName: 'Rajdeep Sarkar',
            avatarUrl: avatorIcon,
            points: '2,406',
            accuracy: 80,
        },
        {
            key: '7',
            rank: '#4',
            rankChange: 'up',
            userName: 'Rajdeep Sarkar',
            avatarUrl: avatorIcon,
            points: '2,406',
            accuracy: 45,
        },
        {
            key: '8',
            rank: '#4',
            rankChange: 'up',
            userName: 'Rajdeep Sarkar',
            avatarUrl: avatorIcon,
            points: '2,406',
            accuracy: 80,
        },
    ];

    return (
        <div className={style.leaderboardTable}>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                showHeader={true}
                 scroll={{ x: 'max-content', y: '560px' }}
            />
        </div>
    );
};

export default LeaderBoardTable;
