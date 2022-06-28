import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";
import logo from "../../assets/images/logo.svg";
import Conteudo from "../conteudo";

const { Header, Content, Footer } = Layout;

const menuNavBar = ["Features", "Pricing", "Resources"].map((key) => ({
  key,
  label: `${key}`,
}));

const NavBar = () => (
  <Layout>
    <Header
      className="header"
      style={{
        backgroundColor: "white",
        color: "black",
      }}
    >
      <img src={logo} className={"logo"} />

      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={menuNavBar}
        style={{ color: "grey" }}
      />
    </Header>
    <Content
      style={{
        padding: "0 50px",
      }}
    >
      <Layout
        className="site-layout-background"
        style={{
          padding: "24px 0",
        }}
      >
        <Content
          style={{
            padding: "0 24px",
            minHeight: 200,
          }}
        >
          <Conteudo />
        </Content>
      </Layout>
    </Content>
    <Footer
      style={{
        textAlign: "center",
        height: "100px",
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default NavBar;
