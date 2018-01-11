import React from "react";
import logo from "./ic-airbnb.svg";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import { Grid, Row, Col } from "react-flexbox-grid";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Header = styled.header`
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background: #fff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

const Logo = styled.img`
  display: none;
  cursor: pointer;
  @media (min-width: 769px) {
    display: block;
  }
`;

export default () => {
  return (
    <Header>
      <Grid>
        <Row start="xs" middle="xs">
          <Col xs={2} md={1}>
            <Menu />
            <Link to="/">
              <Logo src={logo} alt="logo" />
            </Link>
          </Col>
          <Col xs={10} sm={7} md={5}>
            <SearchForm />
          </Col>
          <Col mdOffset={1} lgOffset={2} sm={0} md={5} lg={4}>
            <Nav />
          </Col>
        </Row>
      </Grid>
    </Header>
  );
};
