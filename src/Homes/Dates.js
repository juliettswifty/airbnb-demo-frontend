import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import "./dayPicker.css";

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
const Footer = styled.div`
  display: none;
  @media (min-width: 575px) {
    display: flex;
    justify-content: space-between;
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

export default class Example extends React.Component {
  static defaultProps = {
    numberOfMonths: 1
  };

  monthsNumber() {
    if (window.matchMedia("(min-width: 992px)").matches) {
      console.log("2");
      return 2;
    }
    if (window.matchMedia("(min-width: 575px)").matches) {
      console.log("1");
      return 1;
    } else {
      console.log("12");
      return 12;
    }
  }

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

  handleDayClick(day, { disabled, selected }) {
    if (disabled) return;
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleResetClick() {
    this.setState(this.getInitialState());
  }

  render() {
    //const fromTo = from.toLocaleDateString();
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div>
        <Main>
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
            .Selectable .DayPicker-Day--start:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
              background: #008489 !important;
              border: 1px solid #008489 !important;
            }
            .Selectable .DayPicker-Day--end:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
              background: #008489 !important;
              border: 1px solid #008489 !important;
            }
          `}</style>
          </Helmet>
          <Footer>
            <BtnCancel>Cancel</BtnCancel>

            <BtnApply>Apply</BtnApply>
          </Footer>
        </Main>

        <FooterMobile>
          <SaveBtn>Save</SaveBtn>
        </FooterMobile>
      </div>
    );
  }
}
