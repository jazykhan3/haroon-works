import { Outlet} from 'react-router-dom';
import React, { useState } from 'react';
import { Layout} from 'antd';
import MainHeader from '../features/dashboard/components/Header';
import SideBarMenu from '../features/dashboard/components/SideBarMenu';
import style from './style.module.scss'
const { Sider, Content } = Layout;


const DashboardLayout = () => {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={style.mainDashboardLayoutbox}>
      <Layout>
        <MainHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout className='bg-[#F7F7F9] pt-6'>

          <Sider className={`${style.mainDashboardLayoutboxsider} !bg-transparent`} trigger={null} collapsible collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            breakpoint="lg"
            collapsedWidth={80}
            onBreakpoint={(broken) => {
              setCollapsed(broken);
            }}
            width={235}
          >
            <div className="demo-logo-vertical" />
            <SideBarMenu collapsed={collapsed}/>
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