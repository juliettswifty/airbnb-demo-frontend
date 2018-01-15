import onClickOutside from "react-onclickoutside";
import React from "react";
import styled from "styled-components";
import Dates from "./Dates";
import { PortalWithState } from "react-portal";
import close from "./close1.svg";
import arrow from "./arrow-calendar.svg";
import MediaQuery from "react-responsive";

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

const BtnContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const BtnModal = styled.button`
  display: inline-block;
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
  &:focus {
    background: #008489;
    color: #ffffff;
    border-color: #008489;
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

class Dropdown extends React.Component {
  state = {
    isOpen: false,
    nameBtn: "Dates",
    fromDate: undefined,
    toDate: undefined
  };

  handleClickOutside = () => {
    this.setState(prevState => ({ isOpen: false }));
  };

  openModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  onChange = (fromDate, toDate) => {
    this.setState(prevState => ({ fromDate, toDate }));
  };

  cancelDates = () => {
    console.log(this.state);
  };

  render() {
    return (
      <MediaQuery maxWidth={575}>
        {matches => {
          if (matches) {
            return (
              <PortalWithState closeOnOutsideClick closeOnEsc>
                {({ openPortal, closePortal, isOpen, portal }) => [
                  <BtnModal key="foo" onClick={openPortal}>
                    Dates
                  </BtnModal>,

                  portal(
                    <div>
                      <HeaderModal>
                        <Wrapper>
                          <Close onClick={closePortal} />
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
                        <Dates
                          fromDate={this.fromDate}
                          toDate={this.toDate}
                          onChange={this.onChange}
                        />
                      </Main>
                    </div>
                  )
                ]}
              </PortalWithState>
            );
          } else {
            return (
              <BtnContainer>
                <BtnModal onClick={this.openModal}>Dates</BtnModal>
                {this.state.isOpen && (
                  <Main>
                    <Dates
                      from={this.from}
                      to={this.to}
                      onChange={this.onChange}
                    />
                    <Footer>
                      <BtnCancel onClick={this.cancelDates}>Cancel</BtnCancel>
                      <BtnApply onClick={this.openModal}>Apply</BtnApply>
                    </Footer>
                  </Main>
                )}
              </BtnContainer>
            );
          }
        }}
      </MediaQuery>
    );
  }
}

export default onClickOutside(Dropdown);
