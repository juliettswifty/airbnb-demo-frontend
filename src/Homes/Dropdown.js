//import onClickOutside from "react-onclickoutside";
import React from "react";
import styled from "styled-components";
import Dates from "./Dates";
import { PortalWithState } from "react-portal";
import MediaQuery from "react-responsive";
import moment from "moment";

const BtnContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const BtnModal = styled.input`
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

const labelCheckIn = startDate => {
  if (startDate) {
    return `${moment(startDate).format("MMM D")}`;
  } else {
    return "Check-in";
  }
};

const labelCheckOut = endDate => {
  console.log(endDate);
  if (endDate) {
    return `${moment(endDate).format("MMM D")}`;
  } else {
    return "Check-out";
  }
};

const formateDateLabel = (value, startDate, endDate) => {
  if ((startDate, endDate)) {
    if (moment(startDate).format("MMM") === moment(endDate).format("MMM")) {
      value = `${moment(startDate).format("MMM D")} - ${moment(endDate).format(
        "D"
      )}`;
      return value;
    } else {
      value = `${moment(startDate).format("MMM D")} - ${moment(endDate).format(
        "MMM D"
      )}`;
      return value;
    }
  } else {
    return "Dates";
  }
};

export default class Dropdown extends React.Component {
  state = {
    value: "Dates",
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
    this.setState(prevState => ({ isApply: true }));
    this.openModal();
  };

  openModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  onChange = (startDate, endDate) => {
    this.setState(prevState => ({ startDate, endDate }));
  };

  cancelDates = (startDate, endDate) => {
    this.setState(prevState => ({ startDate: undefined, endDate: undefined }));
  };

  render() {
    return (
      <MediaQuery maxWidth={575}>
        {matches => {
          if (matches) {
            return (
              <PortalWithState closeOnOutsideClick closeOnEsc>
                {({ openPortal, closePortal, isOpen, portal }) => [
                  <BtnModal
                    key="foo"
                    onClick={openPortal}
                    value={formateDateLabel(
                      this.state.value,
                      this.state.startDate,
                      this.state.endDate,
                      this.state.isOpen
                    )}
                    type="button"
                  />,
                  portal(
                    <div>
                      <Dates
                        startDate={this.startDate}
                        endDate={this.endDate}
                        onChange={this.onChange}
                        applyDates={this.applyDates}
                        closePortal={closePortal}
                        labelCheckIn={labelCheckIn}
                        labelCheckOut={labelCheckOut}
                      />
                    </div>
                  )
                ]}
              </PortalWithState>
            );
          } else {
            return (
              <BtnContainer>
                <BtnModal
                  onClick={this.openModal}
                  value={formateDateLabel(
                    this.state.value,
                    this.state.startDate,
                    this.state.endDate,
                    this.state.isOpen
                  )}
                  type="button"
                />
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
                ) : (
                  false
                )}
              </BtnContainer>
            );
          }
        }}
      </MediaQuery>
    );
  }
}

//export default onClickOutside(Dropdown);
