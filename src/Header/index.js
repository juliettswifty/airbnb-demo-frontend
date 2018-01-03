import React from "react";
import logo from "./ic-airbnb.svg";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import Nav from "./Nav";
import { Grid, Row, Col } from "react-flexbox-grid";

const Header = styled.header`
  padding: 16px 0;
  background: #ffffff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

export default () => {
  return (
    <Header>
      <Grid>
        <Row middle="xs">
          <Col xs={3} md={3} lg={1}>
            <img src={logo} alt="logo" />
          </Col>
          <Col xs={5} md={5} lg={5}>
            <SearchForm />
          </Col>
          <Col lgOffset={2} xs={4} md={4} lg={4}>
            <Nav />
          </Col>
        </Row>
      </Grid>
    </Header>
  );
};
