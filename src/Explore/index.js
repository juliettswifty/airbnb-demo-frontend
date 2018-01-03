import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import Homes from "./Homes";
import Experiences from "./Experiences";
import Restaurants from "./Restaurants";

const Container = styled.div`
  padding: 24px 0;
`;

const Title = styled.h2`
  font-size: 2.125rem;
  line-height: 34px;
  color: #383838;
`;

export default () => {
  return (
    <Container>
      <Grid>
        <Row start="xs">
          <Col xs={12}>
            <Title>Explore Airbnb</Title>
          </Col>
        </Row>
        <Row>
          <Homes />
          <Experiences />
          <Restaurants />
        </Row>
      </Grid>
    </Container>
  );
};
