import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import ReactDayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import arrow from "./close.svg";

const Container = styled.div`
  position: absolute;
  z-index: 10;
  top: 52px;
  left: 0;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background: #fff;
  width: 360px;
  @media (min-width: 768px) {
    width: 711px;
  }
`;

const WrapperBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BtnCancel = styled.button`
  font-size: 1rem;
  text-align: center;
  color: #636363;
  background: #fff;
  border: none;
  width: 110px;
  height: 64px;
`;

const BtnApply = styled.button`
  font-size: 1rem;
  text-align: center;
  color: #0f7276;
  background: #fff;
  border: none;
  width: 110px;
  height: 64px;
`;

const DayPicker = styled(ReactDayPicker)`
  .DayPicker {
    display: flex;
    justify-content: center;
    width: auto;
  }

  .DayPicker-Month {
    margin: 1.26rem;
    display: block;
    @media (min-width: 575px) {
      &:last-of-type {
        display: none;
      }
    }
    @media (min-width: 768px) {
      &:last-of-type {
        display: block;
      }
    }
  }

  .DayPicker-Weekdays {
    color: #636363;
    font-size: 0.75rem;
    &:last-of-type {
      display: none;
    }
    @media (min-width: 768px) {
      &:last-of-type {
        display: block;
      }
    }
  }

  .DayPicker-Caption {
    font-family: "CircularBold", sans-serif;
    font-size: 1rem;
    text-align: center;
    margin: 1.5rem 0;
  }
  .DayPicker-NavButton {
    top: 2rem;
    width: 40px;
    height: 32px;
    border: 1px solid rgba(118, 118, 118, 0.3);
    box-sizing: border-box;
    border-radius: 2px;
  }
  .DayPicker-NavButton--prev {
    margin-right: 39rem;
    background-image: url(${arrow});
  }
  .DayPicker-NavButton--next {
    background-image: url(${arrow});
    transform: rotate(180deg);
  }
  .DayPicker-Day {
    width: 2.75rem;
    height: 2.75rem;
    border: 1px solid #d5d5d5;
    font-size: 0.85rem;
    padding: 0;
    &:hover {
      background: #e4e7e7 !important;
      border: 1px solid #d4d9d9 !important;
      border-radius: 0 !important;
      //в доке тоже добавляют important для стилизации, без него не работает http://react-day-picker.js.org/examples/selected-range
    }
  }
  .DayPicker-Day--outside {
    border: none;
  }
`;

export default class Example extends React.Component {
  static defaultProps = {
    numberOfMonths: 2
  };

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined
    };
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleResetClick() {
    this.setState(this.getInitialState());
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <Container>
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
        <Helmet>
          <style>{`
            .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
              background: rgba(0, 132, 137, 0.1) !important;
              border: 1px solid #9CD9D9 !important;
              color: #383838;
            }
            .Selectable .DayPicker-Day {
              border-radius: 0 !important;
            }
            .Selectable .DayPicker-Day--start {
              background: #008489 !important;
              border: 1px solid #008489 !important;
            }
            .Selectable .DayPicker-Day--end {
              background: #008489 !important;
              border: 1px solid #008489 !important;
            }
          `}</style>
        </Helmet>
        <WrapperBtn>
          <BtnCancel>Cancel</BtnCancel>
          <BtnApply>Apply</BtnApply>
        </WrapperBtn>
      </Container>
    );
  }
}
