import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";
import logo from "../../assets/images/logo.svg";
import MenuItem from "antd/lib/menu/MenuItem";

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
        style={{ color: "grey" }}
      >
          <MenuItem key={1}  style={{ color: "grey" }}>Features</MenuItem>
          <MenuItem key={2}  style={{ color: "grey" }}>Pricing</MenuItem>
          <MenuItem key={3}  style={{ color: "grey" }}>Resources</MenuItem>
          <MenuItem key={4}  style={{ color: "grey", marginLeft: "550px" }}>Login</MenuItem>
          <MenuItem key={5}  style={{ color: "grey" }}>Sign Up</MenuItem>
      </Menu>
    </Header>
  </Layout>
);

export default NavBar;
