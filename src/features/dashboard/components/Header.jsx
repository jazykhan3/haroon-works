import React from 'react'
import mobileLogo from '../../../assets/icons/LogoIcon.svg'
import logoText from '../../../assets/icons/Logo-text.svg'
import flameIcon from '../../../assets/icons/flame.svg'
import RankBadgeIcon from '../../../assets/icons/RANK-BADGES.png'
import { Avatar, Image, Popover, Typography } from 'antd';
import { Link } from 'react-router-dom'
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { useAuth } from '../../auth/AuthContext'

const { Title, Paragraph } = Typography;
const MainHeader = ({ collapsed, setCollapsed }) => {
    const { logout } = useAuth();
    const profilePopour = (
        <nav>
            <ul>
                <li className="mb-4">
                    <Link to="" className="flex items-center gap-2 text-sm text-black hover:text-[#f57900]">
                        <UserOutlined />
                        My Profile
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="" className="flex items-center gap-2 text-sm text-black hover:text-[#f57900]">
                        <SettingOutlined />
                        Settings
                    </Link>
                </li>
                <li className="mb-4">
                    <Link onClick={logout} className="flex items-center gap-2 text-sm text-black hover:text-[#f57900]">
                        <LogoutOutlined />
                        Log Out
                    </Link>
                </li>
            </ul>
        </nav>
    )
    return (
        <React.Fragment>
            <div className='h-[60px] pe-5 bg-white flex'>
                <div className='flex items-center gap-2 lg:w-[235px] w-24 ps-5 pt-6 hover:cursor-pointer'
                    onClick={() => setCollapsed(!collapsed)}
                >
                    <Image
                        preview={false}
                        className=''
                        src={mobileLogo}
                    />
                    {!collapsed &&
                        <Image
                            preview={false}
                            className='mb-[2px]'
                            src={logoText}
                        />
                    }
                </div>
                <div className="right-header ps-5 py-[15px] grow flex items-center h-full justify-between">
                    <Paragraph className="text-xs text-left font-medium text-[#444] flex items-center gap-2 !m-0 h-full">
                        <span>First Item /</span>
                        <span>First Item /</span>
                        <span className='text-black'>First Item</span>
                    </Paragraph>
                    <div className='grow flex items-center h-full justify-end gap-5'>
                        <div className="count-days flex items-center gap-2">
                            <Image
                                preview={false}
                                className=''
                                src={flameIcon}
                            />
                            <Paragraph className="text-sm text-left font-medium !m-0 h-full bg-orange-gradient bg-clip-text text-transparent">
                                x3
                            </Paragraph>
                        </div>
                        <div className="count-rank-badge flex items-center gap-1 py-2 px-4 rounded-full bg-[#08BD80]">
                            <Image
                                preview={false}
                                className='max-w-5 h-5 object-contain'
                                src={RankBadgeIcon}
                            />
                            <Paragraph className="text-sm text-left font-medium !m-0 h-full text-white">
                                2,406 PTS
                            </Paragraph>
                        </div>
                        <div className="prfile-avator flex items-center gap-1">
                            <Paragraph className="text-sm text-left font-medium !m-0 h-full text-black md:block hidden">
                                Name here
                            </Paragraph>
                            <Popover placement='bottomRight' content={profilePopour} title="" trigger="click">
                                <Avatar size={38} src={<img src={mobileLogo} alt="avatar" />} />
                            </Popover>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default MainHeader;