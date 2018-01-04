import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import next from "./next.svg";
import image from "./Rectangle.png";
import image2x from "./Rectangle@2x.png";
import image2 from "./Rectangle2.png";
import image22x from "./Rectangle2@2x.png";
import image3 from "./Rectangle3.png";
import image32x from "./Rectangle3@2x.png";
import image4 from "./Rectangle4.png";
import image42x from "./Rectangle4@2x.png";
import image5 from "./Rectangle5.png";
import image52x from "./Rectangle5@2x.png";
import image6 from "./Rectangle6.png";
import image62x from "./Rectangle6@2x.png";

const Title = styled.h2`
  font-size: 2.125rem;
  line-height: 34px;
  color: #383838;
  text-align: left;
`;
const Container = styled.div`
  position: relative;
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
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Text = styled.p`
  font-size: 0.9375rem;
  text-align: left;
  margin: 8px 0 0;
  font-family: "CircularBold", san-serif;
`;

const BtnNext = styled.button`
  position: absolute;
  top: 46%;
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
export default () => {
  return (
    <div>
      <Grid>
        <Row end="xs" middle="xs">
          <Col xs>
            <Title>Featured</Title>
          </Col>
        </Row>
        <Container>
          <Row>
            <HorizontalScroll>
              <Col xs={4} sm={3} md={2}>
                <Image src={image} srcSet={image2x} alt="image experiense" />
                <Text>Paris</Text>
              </Col>
              <Col xs={4} sm={3} md={2}>
                <Image src={image2} srcSet={image22x} alt="image experiense" />
                <Text>Miami</Text>
              </Col>
              <Col xs={4} sm={3} md={2}>
                <Image src={image3} srcSet={image32x} alt="image experiense" />
                <Text>Tokyo</Text>
              </Col>
              <Col xs={4} sm={3} md={2}>
                <Image src={image4} srcSet={image42x} alt="image experiense" />
                <Text>Cape town</Text>
              </Col>
              <Col xs={4} sm={3} md={2}>
                <Image src={image5} srcSet={image52x} alt="image experiense" />
                <Text>Seoul</Text>
              </Col>
              <Col xs={4} sm={3} md={2}>
                <Image src={image6} srcSet={image62x} alt="image experiense" />
                <Text>Los Angeles</Text>
              </Col>
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