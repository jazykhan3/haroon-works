// SideBarMenu.jsx
import { Menu, Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
    BarChartOutlined,
    PieChartOutlined,
    RobotOutlined,
    AppstoreOutlined,
    ThunderboltOutlined,
    BookOutlined,
    AudioOutlined,
    BulbOutlined,
    IdcardOutlined,
    DeploymentUnitOutlined,
    SoundOutlined
} from '@ant-design/icons';
import style from './style.module.scss';
const { Title, Paragraph } = Typography;
const SideBarMenu = () => {
    const location = useLocation();
    const selectedKey = location.pathname;
    const menuItems = [
        {
            section: null,
            items: [
                {
                    key: 'overview',
                    label: 'Test Overview',
                    icon: <BarChartOutlined />,
                    path: '/dashboard',
                },
                {
                    key: 'progress',
                    label: 'Progress Overview',
                    icon: <PieChartOutlined />,
                    path: '/progress',
                },
            ],
        },
        {
            section: 'AI Support',
            items: [
                {
                    key: 'askai',
                    label: 'Ask AI',
                    icon: <RobotOutlined />,
                    path: '/ask-ai',
                },
                {
                    key: 'evaluation',
                    label: 'Evaluation',
                    icon: <AppstoreOutlined />,
                    path: '/evaluation',
                },
            ],
        },
        {
            section: 'Study',
            items: [
                {
                    key: 'practice',
                    label: 'Practice',
                    icon: <ThunderboltOutlined />,
                    path: '/practice',
                },
                {
                    key: 'tests',
                    label: 'Tests',
                    icon: <BookOutlined />,
                    path: '/tests',
                },
                {
                    key: 'voice-mode',
                    label: 'Voice Mode',
                    icon: <AudioOutlined />,
                    path: '/voice-mode',
                },
            ],
        },
        {
            section: 'Others',
            items: [
                {
                    key: 'new-attempt',
                    label: 'New This Attempt',
                    icon: <BulbOutlined />,
                    path: '/new-attempt',
                },
                {
                    key: 'insights',
                    label: 'Ranker Insights',
                    icon: <IdcardOutlined />,
                    path: '/insights',
                },
                {
                    key: 'flash-cards',
                    label: 'Flash Cards',
                    icon: <DeploymentUnitOutlined />,
                    path: '/flash-cards',
                },
                {
                    key: 'voice-revision',
                    label: 'Voice Revision',
                    icon: <SoundOutlined />,
                    path: '/voice-revision',
                },
            ],
        },
    ];
    return (
        <div className={style.sideMenu}>
            {menuItems.map((group, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                    {group.section && (
                        <Paragraph className={`text-xs font-medium text-[#BABDCC] uppercase text-left pt-5 ${style.menuheading}`}>
                            {group.section}
                        </Paragraph>
                    )}
                    <Menu
                        theme="light"
                        mode="inline"
                        selectedKeys={[selectedKey]}
                        className="border-0"
                    >
                        {group.items.map((item) => (
                            <Menu.Item
                                key={item.path}
                                icon={
                                    <span
                                    // className={`${selectedKey === item.path
                                    //     ? 'bg-orange-gradient bg-clip-text text-transparent'
                                    //     : 'text-gray-500 group-hover:text-orange-400'
                                    //     }`}
                                    >
                                        {item.icon}
                                    </span>
                                }
                            >
                                <Link to={item.path}>
                                    <span
                                    // className={`${selectedKey === item.path
                                    //     ? 'bg-text-gradient-orange bg-clip-text text-transparent'
                                    //     : ''
                                    //     }`}
                                    >
                                        {item.label}
                                    </span>
                                </Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </div>
            ))}
        </div>
    );
};

export default SideBarMenu;
