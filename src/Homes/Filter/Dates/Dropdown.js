import React from "react";
import styled from "styled-components";
import Dates from "./Dates";
import moment from "moment";

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

const Overlay = styled.div`
  display: none;
  @media (min-width: 575px) {
    display: block;
    position: fixed;
    top: 140px;
    width: 100%;
    height: 100vh;
    background: #ffffff;
    opacity: 0.8;
    z-index: 0;
  }
`;

const formatDateLabel = (startDate, endDate) => {
  const start = startDate;
  const end = endDate;

  if ((startDate, endDate)) {
    if (moment(start).format("MMM") === moment(end).format("MMM")) {
      return `${moment(start).format("MMM D")} - ${moment(end).format("D")}`;
    } else {
      return `${moment(start).format("MMM D")} - ${moment(end).format(
        "MMM D"
      )}`;
    }
  } else {
    return "Dates";
  }
};

export default class Dropdown extends React.Component {
  state = {
    isOpen: false,
    startDate: undefined,
    endDate: undefined,
    isApply: false
  };

  handleClickOutside = () => {
    if (!this.state.isApply) {
      this.setState(prevState => ({
        isOpen: false,
        startDate: undefined,
        endDate: undefined
      }));
    } else {
      this.setState(prevState => ({
        isOpen: false
      }));
    }
  };

  applyDates = () => {
    this.setState({ isApply: true });
    this.openModal();
  };

  openModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  onChange = (startDate, endDate) => {
    this.setState({ startDate, endDate });
  };

  cancelDates = (startDate, endDate) => {
    this.setState({ startDate: undefined, endDate: undefined });
  };

  render() {
    return (
      <BtnContainer>
        <BtnModal onClick={this.openModal}>
          {formatDateLabel(this.state.startDate, this.state.endDate)}
        </BtnModal>
        {this.state.isOpen && (
          <Dates
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.onChange}
            cancelDates={this.cancelDates}
            openModal={this.openModal}
            isApply={this.state.isApply}
            applyDates={this.applyDates}
          />
        )}
        {this.state.isOpen ? (
          <Overlay onClick={this.handleClickOutside} />
        ) : null}
      </BtnContainer>
    );
  }
}
