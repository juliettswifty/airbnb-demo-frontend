import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import arrow from "./Shape.svg";
import logo from "./airbnb-logo2.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

const Footer = styled.footer`
  padding: 48px 0;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
`;
const Select = styled.select`
  font-size: 1.125rem;
  width: 100%;
  padding: 12px 30px 12px 12px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  background: url(${arrow}) no-repeat 94% 50%;
  -webkit-appearance: none;
  font-family: "CircularLight", san-serif;
  &:last-of-type {
    margin-top: 16px;
  }
`;

const Title = styled.p`
  font-family: "CircularBold", san-serif;
  text-align: left;
  margin: 0 0 8px;
  font-size: 0.9375rem;
  color: ##383838;
`;
const LinkSubfooter = styled.a`
  text-align: left;
  margin: 4px 0;
  font-size: 0.9375rem;
  color: #636363;
  text-decoration: none;
`;
const TextLogo = styled.p`
  font-size: 0.9375rem;
  color: #636363;
  margin-left: 12px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
`;

const Link = styled.a`
  color: #636363;
  font-size: 0.9375rem;
  text-decoration: none;
  margin-right: 16px;
  text-align: right;
`;
const LogoLink = styled.a`
  margin-left: 20px;
  text-align: right;
`;

const Divider = styled.div`
  opacity: 0.08;
  background: #484848;
  height: 1px;
  width: 100%;
  margin: 48px 0 34px;
`;

export default () => {
  return (
    <Footer>
      <Grid>
        <Row>
          <Col xs={12} md={3}>
            <Select>
              <option>English</option>
              <option>French</option>
            </Select>
            <Select>
              <option>United States dollar</option>
              <option>French</option>
            </Select>
          </Col>

          <Col xsOffset={1} md={2}>
            <TextContainer>
              <Title>Airbnb</Title>
              <LinkSubfooter href="#">About us</LinkSubfooter>
              <LinkSubfooter href="#">Careers</LinkSubfooter>
              <LinkSubfooter href="#">Press</LinkSubfooter>
              <LinkSubfooter href="#">Policies</LinkSubfooter>
              <LinkSubfooter href="#">Help</LinkSubfooter>
              <LinkSubfooter href="#">Diversity & Belonging</LinkSubfooter>
            </TextContainer>
          </Col>
          <Col xsOffset={1} md={2}>
            <TextContainer>
              <Title>Discover</Title>
              <LinkSubfooter href="#">Trust & Safety</LinkSubfooter>
              <LinkSubfooter href="#">Travel Credit</LinkSubfooter>
              <LinkSubfooter href="#">Gift Cards</LinkSubfooter>
              <LinkSubfooter href="#">Airbnb Citizen</LinkSubfooter>
              <LinkSubfooter href="#">Business Travel</LinkSubfooter>
              <LinkSubfooter href="#">Guidebooks</LinkSubfooter>
              <LinkSubfooter href="#">Airbnbmag</LinkSubfooter>
            </TextContainer>
          </Col>
          <Col xsOffset={1} md={2}>
            <TextContainer>
              <Title>Hosting</Title>
              <LinkSubfooter href="#">Why Host</LinkSubfooter>
              <LinkSubfooter href="#">Hospitality</LinkSubfooter>
              <LinkSubfooter href="#">Responsible Hosting</LinkSubfooter>
              <LinkSubfooter href="#">Community Center</LinkSubfooter>
            </TextContainer>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Divider />
          </Col>
        </Row>
        <Row start="xs" middle="xs">
          <Col md={2}>
            <Container>
              <img src={logo} alt="logo" />
              <TextLogo>© Airbnb Inc.</TextLogo>
            </Container>
          </Col>
          <Col xs={12} sm={12} md={6} lg={5} mdOffset={4} lgOffset={5}>
            <Container>
              <Link href="#">Terms</Link>
              <Link href="#">Privacy</Link>
              <Link href="#">Site map</Link>
              <LogoLink href="#">
                <img src={facebook} alt="facebook" />
              </LogoLink>
              <LogoLink href="#">
                <img src={twitter} alt="twitter" />
              </LogoLink>
              <LogoLink href="#">
                <img src={instagram} alt="instagram" />
              </LogoLink>
            </Container>
          </Col>
        </Row>
      </Grid>
    </Footer>
  );
};
