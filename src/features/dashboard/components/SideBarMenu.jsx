import { Menu, Typography } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import TestIcon from '../../../assets/icons/sidebar/test-icon.png'
import ProgressIcon from '../../../assets/icons/sidebar/progress-icon.png'
import askAiIcon from '../../../assets/icons/sidebar/ask-AI-icon.png'
import EvaluationIcon from '../../../assets/icons/sidebar/evaluation-icon.png'
import ParacticeIcon from '../../../assets/icons/sidebar/paractice-icon.png'
import TestsIcon from '../../../assets/icons/sidebar/tests-icon.png'
import MicIcon from '../../../assets/icons/sidebar/mic-icon.png'
import atemptIcon from '../../../assets/icons/sidebar/atempt-icon.png'
import RankIcon from '../../../assets/icons/sidebar/ranker-icon.png'
import flashCardIcon from '../../../assets/icons/sidebar/flash-card-icon.png'
import VoiceIcon from '../../../assets/icons/sidebar/voice-icon.png'
import RatingsbarsIcon from '../../../assets/icons/sidebar//Rating-bars.png'


import style from './style.module.scss';
const { Paragraph } = Typography;
const SideBarMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedKey = location.pathname;
    const handleUpgradeClick = () => {
        navigate('/dashboard/pricings');
    };
    const menuItems = [
        {
            section: null,
            items: [
                {
                    key: 'overview',
                    label: 'Test Overview',
                    icon: <img src={TestIcon} alt="icon"></img>,
                    path: '/dashboard',
                },
                {
                    key: 'progress',
                    label: 'Progress Overview',
                    icon: <img src={ProgressIcon} alt="icon"></img>,
                    path: '/dashboard/progress-overview',
                },
            ],
        },
        {
            section: 'AI Support',
            items: [
                {
                    key: 'askai',
                    label: 'Ask AI',
                    icon: <img className={style.askai} src={askAiIcon} alt="icon"></img>,
                    path: '/dashboard/ask-ai',
                },
                {
                    key: 'evaluation',
                    label: 'Evaluation',
                    icon: <img src={EvaluationIcon} alt="icon"></img>,
                    path: '/dashboard/evaluation',
                },
            ],
        },
        {
            section: 'Study',
            items: [
                {
                    key: 'practice',
                    label: 'Practice',
                    icon: <img src={ParacticeIcon} alt="icon"></img>,
                    path: '/dashboard/practice',
                },
                {
                    key: 'tests',
                    label: 'Tests',
                    icon: <img src={TestsIcon} alt="icon"></img>,
                    path: '/dashboard/tests',
                },
                {
                    key: 'voice-mode',
                    label: 'Voice Mode',
                    icon: <img src={MicIcon} alt="icon"></img>,
                    path: '/dashboard/voice-mode',
                },
            ],
        },
        {
            section: 'Others',
            items: [
                {
                    key: 'new-attempt',
                    label: 'New This Attempt',
                    icon: <img src={atemptIcon} alt="icon"></img>,
                    path: '/dashboard/new-attempt',
                },
                {
                    key: 'insights',
                    label: 'Ranker Insights',
                    icon: <img src={RankIcon} alt="icon"></img>,
                    path: '/dashboard/rankers-insights',
                },
                {
                    key: 'flash-cards',
                    label: 'Flash Cards',
                    icon: <img src={flashCardIcon} alt="icon"></img>,
                    path: '/dashboard/flash-cards',
                },
                {
                    key: 'voice-revision',
                    label: 'Voice Revision',
                    icon: <img src={VoiceIcon} alt="icon"></img>,
                    path: '/dashboard/voice-revision',
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
                                    <span>
                                        {item.icon}
                                    </span>
                                }
                            >
                                <Link to={item.path}>
                                    <span>
                                        {item.label}
                                    </span>
                                </Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </div>
            ))}
            <div className="plan-card p-3 rounded-lg shadow-sm bg-light-orange-yellow-gradient ">
                <div className='flex items-center justify-between mb-9 gap-1'>
                    <Paragraph className="text-sm text-left font-medium !m-0 h-full bg-orange-gradient bg-clip-text text-transparent">
                        Free Plan
                    </Paragraph>
                    <button onClick={handleUpgradeClick} className='py-1 px-[10px] font-medium text-xs text-[#666] bg-white rounded-md'>
                        Upgrade
                    </button>
                </div>
                <div className='flex justify-between items-center gap-1'>
                    <img src={RatingsbarsIcon} alt="" className='w-[50px] h-[22px] object-contain' />
                    <p className='font-normal text-[10px] text-[#666] text-right m-0 flex flex-col'>
                        <span className='font-bold'>8/10</span>
                        <span>Daily Free Limits</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SideBarMenu;
