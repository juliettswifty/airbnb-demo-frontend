import image4 from "./Rectangle4.png";
import image42x from "./Rectangle4@2x.png";
import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import star from "./star.svg";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Price = styled.p`
  margin: 0 6px 0 0;
  font-family: "CircularBold", san-serif;
  display: inline-block;
`;
const Name = styled.p`
  margin: 8px 0 7px;
  font-family: CircularLight, san-serif;
  font-size: 0.9375rem;
`;

const Reviews = styled.p`
  margin: 0;
  font-size: 0.75rem;
`;

const Star = styled.img`
  margin-right: 4px;
  &:last-of-type {
    margin-right: 8px;
  }
`;
export default () => {
  return (
    <Col xs={6} sm={4} md={3}>
      <Card>
        <Image src={image4} srcSet={image42x} alt="image experiense" />
        <Row start="xs" top="xs">
          <Col xs>
            <TextContainer>
              <Name>
                <Price>$50</Price>
                Salsa Night
              </Name>
            </TextContainer>
          </Col>
        </Row>
        <Row start="xs">
          <Col xs>
            <TextContainer>
              <Star src={star} alt="star" />
              <Star src={star} alt="star" />
              <Star src={star} alt="star" />
              <Star src={star} alt="star" />
              <Star src={star} alt="star" />

              <Reviews>44 reviews</Reviews>
            </TextContainer>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};