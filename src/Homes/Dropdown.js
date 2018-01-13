//import onClickOutside from "react-onclickoutside";
import React from "react";
import styled from "styled-components";
import Dates from "./Dates";
import { PortalWithState } from "react-portal";

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
/*
export class Dropdown extends React.Component {
  state = {
    isOpen: false
  };

  addBackground = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    console.log(this.isOpen);
  };

  render() {
    return (
      <PortalWithState closeOnOutsideClick closeOnEsc>
        {({ openPortal, closePortal, isOpen, portal }) => [
          <BtnModal
            key="foo"
            onClick={openPortal} onClick={this.addBackground}
          >
            Dates
          </BtnModal>,
          portal(<Dates />)
        ]}
      </PortalWithState>
    );
  }
}
*/

class Dropdown extends React.Component {
  state = {
    isOpen: false
  };

  handleClickOutside = () => {
    this.setState(prevState => ({ isOpen: false }));
  };

  openCalendar = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <BtnContainer>
        <BtnModal onClick={this.openCalendar}>Dates</BtnModal>
        {this.state.isOpen && <Dates />}
      </BtnContainer>
    );
  }
}
export default onClickOutside(Dropdown);
