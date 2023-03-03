import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  Input,
  theme,
  Image,
  Button,
  ConfigProvider,
} from "antd";

import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar/Topbar";

const { Header, Content, Sider, Footer } = Layout;

const Maintemplate = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  return (
    <Layout>
      {/* Header */}

      <Header className="header bg-transparent absolute w-full z-10 py-6">
        <Topbar />
      </Header>
      <Outlet />
      <Footer className="footer bg-bgSlight" />

      {/* <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout> */}
    </Layout>
  );
};

export default Maintemplate;
