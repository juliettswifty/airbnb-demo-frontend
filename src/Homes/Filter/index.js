import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Dates from './Dates';
import Guests from './Guests';
import Room from './Room';
import InstantBook from './InstantBook';
import Price from './Price';
import More from './More';
// import Dropdown from './Dropdown';

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
    dates: {
      startDate: null,
      endDate: null,
    },
    guests: {
      adults: 1,
      childrens: 0,
      infants: 0,
    },
    roomType: {
      entire: false,
      privat: false,
      shared: false,
    },
    instantBook: {
      book: false,
    },
    price: {
      min: 1,
      max: 40,
    },
  };

  saveData = (obj) => {
    Object.keys(obj).map(key =>
      this.setState({
        [key]: obj[key],
      }));
  };

  render() {
    return (
      <div>
        <Filter>
          <Grid>
            <Row start="xs">
              <Col xs={12} lg={8}>
                <Dates saveDates={this.saveData} />
                <Guests saveGuests={this.saveData} />
                <Room saveRoom={this.saveData} />
                <Price savePrice={this.saveData} />
                <InstantBook saveBook={this.saveData} book={this.state.instantBook.book} />
                <More
                  saveData={this.saveData}
                  dates={this.state.dates}
                  guests={this.state.guests}
                  roomType={this.state.roomType}
                  price={this.state.price}
                  instantBook={this.state.instantBook}
                />
              </Col>
            </Row>
          </Grid>
        </Filter>
      </div>
    );
  }
}
