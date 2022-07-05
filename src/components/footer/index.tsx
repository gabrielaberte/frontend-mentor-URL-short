import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import logo from "../../assets/images/logo.svg";
import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";
import iconPinterest from "../../assets/images/icon-pinterest.svg";
import iconInsta from "../../assets/images/icon-instagram.svg";

import { DivFooter, DivRedesSociais } from "../styles/styles";

const { Footer } = Layout;

const FooterBar = () => (
  <Layout>
    <Footer
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        height: "250px",
        flexDirection: "row",
        flexWrap: "nowrap",
        backgroundColor: "#202124",
      }}
    >
      <DivFooter>
        <img src={logo} className={"logo"} />
      </DivFooter>
      <DivFooter>
        <p>Features</p>
        <span>Link Shortening</span>
        <span>Branded Link</span>
        <span>Analytics</span>
      </DivFooter>
      <DivFooter>
        <p>Resources</p>
        <span>Blog</span>
        <span>Developers</span>
        <span>Support</span>
      </DivFooter>
      <DivFooter>
        <p>Company</p>
        <span>About</span>
        <span>Our Team</span>
        <span>Careers</span>
        <a href="//google.com"><span>Contact</span></a>
      </DivFooter>
      <DivRedesSociais>
        <a href="//facebook.com"><img src={iconFacebook} /> </a>
        <a href="//twitter.com"><img src={iconTwitter} /></a>
        <a href="//pinterest.com"><img src={iconPinterest} /> </a>
        <a href="//instagram.com"><img src={iconInsta} /></a>
      </DivRedesSociais>
    </Footer>
  </Layout>
);

export default FooterBar;
