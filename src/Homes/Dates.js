import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import "./dayPicker.css";
import close from "./close1.svg";
import arrow from "./arrow-calendar.svg";

const Main = styled.div`
  position: absolute;
  overflow: auto;
  position: fixed;
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
  @media (min-width: 768px) {
    width: 711px;
  }
  @media (min-width: 575px) {
    position: absolute;
    top: 52px;
    height: auto;
    width: 360px;
  }
`;

const FooterBtn = styled.div`
  background: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 102;
  display: flex;
  justify-content: center;
  padding: 8px;
  box-shadow: 0px -1px 0px #d5d5d5;
  @media (min-width: 575px) {
    padding: 0;
    justify-content: space-between;
  }
`;

const BtnCancel = styled.button`
  display: none;
  @media (min-width: 575px) {
    font-size: 1rem;
    text-align: center;
    color: #636363;
    background: #fff;
    border: none;
    width: 110px;
    height: 64px;
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
  }
`;

const SaveBtn = styled.button`
  background: #ff5a5f;
  border-radius: 4px;
  padding: 16px 0;
  width: 100%;
  font-size: 1.125rem;
  color: #ffffff;
  @media (min-width: 575px) {
    display: none;
  }
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

export default class Example extends React.Component {
  static defaultProps = {
    numberOfMonths: 12
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
      <div>
        <HeaderModal>
          <Wrapper>
            <Close />
            <Text>Dates</Text>
            <Reset>Reset</Reset>
          </Wrapper>
          <CheckIn>Check-in</CheckIn>
          <img src={arrow} alt="arrow" />
          <CheckIn>Check-out</CheckIn>
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
            numberOfMonths={this.props.numberOfMonths}
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={this.handleDayClick}
            showWeekDays={false}
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
        </Main>
        <FooterBtn>
          <BtnCancel>Cancel</BtnCancel>
          <BtnApply>Apply</BtnApply>

          <SaveBtn>Save</SaveBtn>
        </FooterBtn>
      </div>
    );
  }
}
