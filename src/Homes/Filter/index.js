import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Dates from './Dates';
import Guests from './Guests';
import Room from './Room';
import InstantBook from './InstantBook';
import Price from './Price';
import More from './More';

const Filter = styled.div`
  position: fixed;
  top: 82px;
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
    isAnyOpen: null,
  };

  save = (field, value) => {
    this.setState({ [field]: value }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <div>
        <Filter>
          <Grid>
            <Row start="xs">
              <Col xs={12} lg={8}>
                <Dates save={this.save} />
                <Guests save={this.save} />
                <Room save={this.save} />
                <Price save={this.save} />
                <InstantBook save={this.save} />
                <More save={this.save} />
              </Col>
            </Row>
          </Grid>
        </Filter>
      </div>
    );
  }
}

// Object.keys(obj).forEach(key =>
//   this.setState(
//     {
//       [key]: obj[key],
//     },
//     () => {
//       console.log(this.state.instantBook);
//     },
//   ));
