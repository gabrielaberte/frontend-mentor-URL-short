import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";
import logo from "../../assets/images/logo.svg";

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
        width: "100vw",
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
  </Layout>
);

export default NavBar;
