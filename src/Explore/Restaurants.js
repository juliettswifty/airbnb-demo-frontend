import React from "react";
import styled from "styled-components";
import pic from "./Rectangle2-3.png";
import pic2x from "./Rectangle2-3@2x.png";
import { Grid, Row, Col } from "react-flexbox-grid";

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
`;

const Text = styled.p`
  color: #383838;
  font-size: 1.0625rem;
  margin-left: 24px;
`;

const Picture = styled.img`
  width: 96px;
  height: 72px;
`;

export default () => {
  return (
    <Col md={4}>
      <Container>
        <Picture src={pic} srcSet={pic2x} alt="img explore" />
        <Text>Restaurants</Text>
      </Container>
    </Col>
  );
};
