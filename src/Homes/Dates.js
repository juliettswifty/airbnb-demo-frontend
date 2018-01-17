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
const Footer = styled.div`
  display: none;
  @media (min-width: 575px) {
    display: flex;
    justify-content: space-between;
  }
`;

const BtnCancel = styled.button`
  display: none;
  @media (min-width: 575px) {
    display: inline-block;
    font-size: 1rem;
    text-align: center;
    color: #636363;
    background: #fff;
    border: none;
    width: 110px;
    height: 64px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const BtnApply = styled.button`
  display: none;
  @media (min-width: 575px) {
    display: inline-block;
    font-size: 1rem;
    text-align: center;
    color: #0f7276;
    background: #fff;
    border: none;
    width: 110px;
    height: 64px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const monthsNumber = () => {
  if (window.matchMedia("(min-width: 992px)").matches) return 2;
  if (window.matchMedia("(min-width: 575px)").matches) return 1;
  return 12;
};

export default class Dates extends React.Component {
  state = {
    startDate: this.props.startDate,
    endDate: this.props.endDate
  };

  handleDayClick = (day, { disabled, selected }) => {
    if (disabled) return;

    const range = DateUtils.addDayToRange(day, this.state);

    this.setState(prevState => {
      return range;
    });

    this.props.onChange(range.from, range.to);
  };

  handleResetClick = () => {
    this.props.onChange(this.state.startDate, this.state.fromDate);
    this.setState(prevState => {
      return {
        from: undefined,
        to: undefined
      };
    });
  };

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div>
        <DayPicker
          className="Selectable"
          numberOfMonths={monthsNumber()}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          showWeekDays={false}
          isOutsideRange={true}
          disabledDays={{ before: new Date() }}
        />
        <Footer>
          <BtnCancel onClick={this.handleResetClick}>Cancel</BtnCancel>
          <BtnApply onClick={this.props.openModal}>Apply</BtnApply>
        </Footer>
        <FooterMobile>
          <SaveBtn>Save</SaveBtn>
        </FooterMobile>
      </div>
    );
  }
}
