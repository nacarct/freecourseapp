import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import React from "react";
import Dashboard from "./Dashboard";

const { Header, Sider, Content } = Layout;

class MainLayout extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            Eğitmenler
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            Kurslar
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            Bilgi
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content className="site-layout-background"
                        style={{
                            padding: 5,
                            height: '100vh',
                        }}>
                        <Dashboard />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default MainLayout;