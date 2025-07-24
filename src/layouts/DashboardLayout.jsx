// src/layouts/DashboardLayout.jsx
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthContext'; // To access logout
import React, { useState } from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import MainHeader from '../features/dashboard/components/Header';
import SideBarMenu from '../features/dashboard/components/SideBarMenu';
import style from './style.module.scss'
const { Sider, Content } = Layout;


const DashboardLayout = () => {
  const { logout } = useAuth(); // Assume you have a logout function in your AuthContext

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div className={style.mainDashboardLayoutbox}>
      <Layout>
        <MainHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout className='bg-[#F7F7F9] pt-6'>

          <Sider className={style.mainDashboardLayoutbox} trigger={null} collapsible collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            breakpoint="lg"
            collapsedWidth={80} // Set to 0 for full hide on small screens
            onBreakpoint={(broken) => {
              setCollapsed(broken); // Auto collapse on breakpoint
            }}
            className="!bg-transparent"
            width={235}
          >
            <div className="demo-logo-vertical" />
            <SideBarMenu />
          </Sider>
          <Content className={style.mainContentcontainer}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardLayout; 