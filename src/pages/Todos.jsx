import { AiFillPieChart } from 'react-icons/ai';
import { BiDesktop } from 'react-icons/bi';

import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const Todos = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    return () => {
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
    };
  }, []);

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {width >= 576 ? (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <span>Option 2</span>
            </Menu.Item>
          </Menu>
        </Sider>
      ) : (
        <Header style={{ background: '#fff', padding: 0 }}>
          <AiFillPieChart
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
      )}
      <Layout>
        <Content style={{ margin: '16px 16px' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            Content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default Todos;
