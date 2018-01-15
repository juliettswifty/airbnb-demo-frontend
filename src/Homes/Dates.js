import React from "react";
import styled from "styled-components";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import "./dayPicker.css";

const FooterMobile = styled.div`
  background: #fff;
  position: fixed;
  bottom: 0;
  width: 97%;
  z-index: 102;
  display: flex;
  justify-content: center;
  padding: 8px;
  box-shadow: 0px -1px 0px #d5d5d5;
  @media (min-width: 575px) {
    display: none;
  }
`;

const SaveBtn = styled.button`
  background: #ff5a5f;
  border: none;
  border-radius: 4px;
  padding: 16px 0;
  width: 100%;
  font-size: 1.125rem;
  color: #ffffff;
  @media (min-width: 575px) {
    display: none;
  }
`;

export default class Dates extends React.Component {
  monthsNumber() {
    if (window.matchMedia("(min-width: 992px)").matches) {
      return 2;
    }
    if (window.matchMedia("(min-width: 575px)").matches) {
      return 1;
    } else {
      return 12;
    }
  }

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined
    };
  }

  handleDayClick = (day, { disabled, selected }) => {
    if (disabled) return;
    const onChange = this.props.onChange;
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(prevState => {
      onChange(range.from, range.to);
      return range;
    });
  };

  handleResetClick = () => {
    this.setState(this.getInitialState());
  };

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div>
        <DayPicker
          className="Selectable"
          numberOfMonths={this.monthsNumber()}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          showWeekDays={false}
          isOutsideRange={true}
          disabledDays={{ before: new Date() }}
        />
        <FooterMobile>
          <SaveBtn>Save</SaveBtn>
        </FooterMobile>
      </div>
    );
  }
}
