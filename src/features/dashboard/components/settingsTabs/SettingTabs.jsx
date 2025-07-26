import { Tabs } from 'antd';
import React from 'react'
import PlansBillingsTab from './billingTab';
import ProfileTab from './profileTab';
import NotificationsTabs from './notificationTab';
import style from './/style.module.scss'
const SettingTabs = () => {
    const onChange = key => {
        console.log(key);
    };
    const tabitems = [
        {
            key: '1',
            label: 'Profile',
            children: <ProfileTab />,
        },
        {
            key: '2',
            label: 'Manage Notifications',
            children: <NotificationsTabs />,
        },
        {
            key: '3',
            label: 'Plans & Billing',
            children: <PlansBillingsTab />,
        },
    ];
    return (
        <div className={style.setingsTabs}>
            <Tabs defaultActiveKey="1" items={tabitems} onChange={onChange} />
        </div>
    )
}

export default SettingTabs
