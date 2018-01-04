import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import arrow from "./Shape.svg";
import next from "./next.svg";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

const Title = styled.h2`
  font-size: 2.125rem;
  line-height: 34px;
  color: #383838;
  text-align: left;
`;

const Container = styled.div`
  position: relative;
`;

const BtnAll = styled.button`
  background: none;
  border: none;
  color: #383838;
  line-height: 24px;
  font-size: 0.875rem;
`;

const Arrow = styled.img`
  transform: rotate(-90deg);
  margin-bottom: 2px;
`;

const BtnNext = styled.button`
  position: absolute;
  top: 30%;
  right: -20px;
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const HorizontalScroll = styled.div`
  display: flex;
  @media (max-width: 768px) {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    width: auto;
  }
`;

export default () => {
  return (
    <div>
      <Grid>
        <Row end="xs" middle="xs">
          <Col xs>
            <Title>Popular</Title>
          </Col>
          <Col xs>
            <BtnAll>
              See all <Arrow src={arrow} alt="Arrow" />
            </BtnAll>
          </Col>
        </Row>
        <Container>
          <Row>
            <HorizontalScroll>
              <Card />
              <Card2 />
              <Card3 />
              <Card4 />
              <BtnNext>
                <img src={next} alt="arrow" />
              </BtnNext>
            </HorizontalScroll>
          </Row>
        </Container>
      </Grid>
    </div>
  );
};