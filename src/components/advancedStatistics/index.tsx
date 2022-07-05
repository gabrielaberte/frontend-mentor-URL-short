import {
  Container,
  AdvancedStatisticsStyle,
  DivBoost,
  ButtonStyle,
} from "../styles/styles";
import "./index.css";
import { Card, Col, Row, Avatar } from "antd";
import React, { useState } from "react";
import fullyCusto from "../../assets/images/icon-fully-customizable.svg";
import detailRecords from "../../assets/images/icon-detailed-records.svg";
import brandReco from "../../assets/images/icon-brand-recognition.svg";


const { Meta } = Card;

export default function AdvancedStatistics() {
  return (
    <Container>
      <AdvancedStatisticsStyle>
        <p> Advanced Statistics </p>
        <span>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </span>

        <br />
      </AdvancedStatisticsStyle>
      <br />
      <div className="site-card-wrapper">
        <Row style={{ marginTop: "10px", marginBottom: "40px" }} gutter={16}>
          <Col style={{ paddingRight: "50px" }} span={8}>
            <Card style={{ width: "275px", color: "grey" }}>
              <Meta
                avatar={
                  <Avatar
                    style={{
                      display: "flex",
                      backgroundColor: "#5c5388",
                      position: "absolute",
                      marginBottom: "50px",
                      marginRight: "0",
                       width: "50px",
                      height: "50px",
                    }}
                    src={brandReco}
                  />
                }
                title="Brand Recognition"
                description=" Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instill confidence in your
              content."
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ marginTop: "30px", width: "275px", color: "grey" }}>
              <Meta
                avatar={
                  <Avatar
                    style={{
                      display: "flex",
                      backgroundColor: "#5c5388",
                      position: "absolute",
                      marginBottom: "50px",
                      marginRight: "0",
                       width: "50px",
                      height: "50px",
                    }}
                    src={detailRecords}
                  />
                }
                title="Detailed Records"
                description="Gain insights into who is clicking your links. Knowing when and
              where people engage with your content gelps inform better
              decisions."
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ marginTop: "80px", width: "275px", color: "grey" }}>
              <Meta
                avatar={
                  <Avatar
                    style={{
                      display: "flex",
                      backgroundColor: "#5c5388",
                      width: "50px",
                      height: "50px",
                      position: "absolute",
                      marginBottom: "50px",
                      marginRight: "0",
                    }}
                    src={fullyCusto}
                  />
                }
                title="Fully Customizable"
                description="Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement."
              />
            </Card>
          </Col>
        </Row>
      </div>
      <DivBoost>
        <p>Boost your links today</p>
        <ButtonStyle>Get Started!</ButtonStyle>
      </DivBoost>
    </Container>
  );
}
