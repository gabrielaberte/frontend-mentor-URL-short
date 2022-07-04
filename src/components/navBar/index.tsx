import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";
import logo from "../../assets/images/logo.svg";
import Conteudo from "../conteudo";
import { DivFooter } from "../styles/styles";
import LinkShorter from "../linkShorter";

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
    <Content
      style={{
        width: "100vw",
        padding: "0 50px",
      }}
    >
      <Layout
        className="site-layout-background"
        style={{
          width: "100vw",
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
          {/* <LinkShorter/> */}
        </Content>
      </Layout>
    </Content>
    <Footer
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        height: "300px",
        flexDirection: "column",
        flexWrap: "nowrap",
        backgroundColor: "#202124",
      }}
    >
      <img src={logo} className={"logo"} />
      <DivFooter>
        <p>Features</p>
        <p>Resources</p>
        <p>Company</p>
      </DivFooter>
      <DivFooter>
        <p>Link Shortening</p>
        <p>Blog</p>
        <p>About</p>
      </DivFooter>
      <DivFooter>
        <p>Branded Link</p>
        <p>Developers</p>
        <p>Our Team</p>
      </DivFooter>
      <DivFooter>
        <p>Analytics</p>
        <p>Support</p>
        <p>Careers</p>
      </DivFooter>
    </Footer>
  </Layout>
);

export default NavBar;
