import React from "react";
import styled from "styled-components";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import "./dayPicker.css";
import close from "./close1.svg";
import arrow from "../../arrow-calendar.svg";
import moment from "moment";

const Main = styled.div`
  position: fixed;
  overflow: auto;
  z-index: 10;
  left: 0;
  top: 0;
  height: 100%;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background: #fff;
  width: 100%;
  padding: 160px 0 70px;
  box-sizing: border-box;
  @media (min-width: 575px) {
    position: absolute;
    top: 53px;
    left: 0;
    height: auto;
    width: 360px;
    padding: 0;
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  }
  @media (min-width: 768px) {
    width: 720px;
  }
`;

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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 8px 0;
`;

const Close = styled.button`
  background: url(${close}) no-repeat;
  border: none;
  width: 16px;
  height: 16px;
`;
const Text = styled.p`
  margin: 0;
  color: #383838;
  font-size: 0.875rem;
`;
const Reset = styled.button`
  margin: 0;
  font-size: 0.875rem;
  border: none;
  background: none;
  color: #0f7276;
`;

const CheckIn = styled.button`
  font-family: "CircularLight", sans-serif;
  padding: 0 0 6px 0;
  font-size: 1.125rem;
  border: none;
  background: none;
  color: #636363;
  margin: 40px 16px 16px;
  color: #008489;
  border-bottom: 1px solid #008489;
`;

const WeekdayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  margin: 0 auto;
`;
const WeekDay = styled.p`
  font-size: 0.75rem;
`;

const HeaderModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  z-index: 100;
  @media (min-width: 575px) {
    display: none;
  }
`;

const labelCheckIn = startDate => {
  if (startDate) {
    return `${moment(startDate).format("MMM D")}`;
  } else {
    return "Check-in";
  }
};

const labelCheckOut = endDate => {
  if (endDate) {
    return `${moment(endDate).format("MMM D")}`;
  } else {
    return "Check-out";
  }
};

const monthsNumber = () => {
  if (window.matchMedia("(min-width: 768px)").matches) return 2;
  if (window.matchMedia("(min-width: 575px)").matches) return 1;
  return 12;
};

export default class Dates extends React.Component {
  state = {
    startDate: this.props.startDate,
    endDate: this.props.endDate,
    isApply: this.props.isApply,
    from: undefined,
    to: undefined
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
        <HeaderModal>
          <Wrapper>
            <Close onClick={this.props.closePortal} />
            <Text>Dates</Text>
            <Reset onClick={this.handleResetClick}>Reset</Reset>
          </Wrapper>

          <CheckIn>{labelCheckIn(this.state.from)}</CheckIn>
          <img src={arrow} alt="arrow" />
          <CheckIn>{labelCheckOut(this.state.to)}</CheckIn>

          <WeekdayContainer>
            <WeekDay>Su</WeekDay>
            <WeekDay>Mo</WeekDay>
            <WeekDay>Tu</WeekDay>
            <WeekDay>We</WeekDay>
            <WeekDay>Th</WeekDay>
            <WeekDay>Fr</WeekDay>
            <WeekDay>Sa</WeekDay>
          </WeekdayContainer>
        </HeaderModal>
        <Main>
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
            <BtnApply onClick={this.props.applyDates}>Apply</BtnApply>
          </Footer>
        </Main>
        <FooterMobile>
          <SaveBtn onClick={this.props.applyDates}>Save</SaveBtn>
        </FooterMobile>
      </div>
    );
  }
}
