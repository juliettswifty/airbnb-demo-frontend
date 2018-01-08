import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import arrow from "../../Homes/Shape.svg";
import Card from "../../Homes/Card";
import BtnNext from "../BtnNext";
import HorizontalScroll from "../HorizontalScroll";
import Title from "../Title";
import image from "../../Homes/Rectangle.png";
import image2x from "../../Homes/Rectangle@2x.png";
import image2 from "../../Homes/Rectangle2.png";
import image22x from "../../Homes/Rectangle2@2x.png";
import image3 from "../../Homes/Rectangle3.png";
import image32x from "../../Homes/Rectangle3@2x.png";

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

export default () => {
  return (
    <div>
      <Grid>
        <Row end="xs" middle="xs">
          <Col xs>
            <Title>Homes</Title>
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
              <Card
                picSrc={image}
                picSrc2x={image2x}
                price="82"
                title="La Salentina, see, nature & relax"
                rentType="Entire house"
                bedsCount="9"
                reviewsCount="97"
                houseGrade="Superhost"
              />
              <Card
                picSrc={image2}
                picSrc2x={image22x}
                price="82"
                title="Your private 3 bedr. riad and exclusi…"
                rentType="Entire house"
                bedsCount="5"
                reviewsCount="161"
                houseGrade="Superhost"
              />
              <Card
                picSrc={image3}
                picSrc2x={image32x}
                price="200"
                title="Dreamy Tropical Tree House"
                rentType="Entire house"
                bedsCount="1"
                reviewsCount="364"
                houseGrade="Superhost"
              />
              <BtnNext />
            </HorizontalScroll>
          </Row>
        </Container>
      </Grid>
    </div>
  );
};
