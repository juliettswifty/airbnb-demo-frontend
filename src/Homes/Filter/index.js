import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Dates from './Dates';
import Guests from './Guests';
import Room from './Room';
import InstantBook from './InstantBook';
import Price from './Price';

const Filter = styled.div`
  position: fixed;
  top: 83px;
  width: 100%;
  z-index: 1;
  background: #fff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

export default class Filters extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    adults: 1,
    childrens: 0,
    infants: 0,
    entire: false,
    privat: false,
    shared: false,
    book: false,
    min: 1,
    max: 40,
  };

  saveDates = (startDate, endDate) => {
    this.setState({
      startDate,
      endDate,
    });
  };

  saveGuests = (adults, childrens, infants) => {
    this.setState({
      adults,
      childrens,
      infants,
    });
  };

  saveRoom = (entire, privat, shared) => {
    this.setState({
      entire,
      privat,
      shared,
    });
  };

  saveBook = (book) => {
    this.setState({
      book,
    });
  };

  savePrice = (min, max) => {
    this.setState({
      min,
      max,
    });
  };

  render() {
    return (
      <div>
        <Filter>
          <Grid>
            <Row start="xs">
              <Col xs={12} lg={8}>
                <Dates
                  saveDates={this.saveDates}
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                />
                <Guests
                  adults={this.state.adults}
                  childrens={this.state.childrens}
                  infants={this.state.infants}
                  saveGuests={this.saveGuests}
                />
                <Room
                  saveRoom={this.saveRoom}
                  entire={this.state.entire}
                  privat={this.state.privat}
                  shared={this.state.shared}
                />
                <Price savePrice={this.savePrice} min={this.state.min} max={this.state.max} />
                <InstantBook saveBook={this.saveBook} book={this.state.book} />
              </Col>
            </Row>
          </Grid>
        </Filter>
      </div>
    );
  }
}
