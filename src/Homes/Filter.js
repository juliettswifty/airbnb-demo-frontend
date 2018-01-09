import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const Button = styled.button`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 7px 16px;
  font-size: 0.875rem;
  margin: 12px 11px 12px 0;
  &:hover {
    background: #f2f2f2;
    border-color: #f2f2f2;
  }
`;

const ButtonHide = styled.button`
  display: none;
  &:hover {
    background: #f2f2f2;
    border-color: #f2f2f2;
  }
  @media (min-width: 768px) {
    display: inline-block;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 7px 16px;
    font-size: 0.875rem;
    margin: 12px 11px 12px 0;
  }
`;

const Filter = styled.div`
  position: fixed;
  top: 82px;
  width: 100%;
  z-index: 0;
  background: #fff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

export default () => {
  return (
    <Filter>
      <Grid>
        <Row start="xs">
          <Col xs={12} md={8}>
            <Button>Dates</Button>
            <Button>Guests</Button>
            <ButtonHide>Room type</ButtonHide>
            <ButtonHide>Price</ButtonHide>
            <ButtonHide>Instant book</ButtonHide>
            <Button>More filters</Button>
          </Col>
        </Row>
      </Grid>
    </Filter>
  );
};
