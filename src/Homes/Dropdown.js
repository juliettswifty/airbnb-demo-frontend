import onClickOutside from "react-onclickoutside";
import React from "react";
import styled from "styled-components";
import Dates from "./Dates";

const BtnContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const DatesContainer = styled.div`
  position: absolute;
  top: 52px;
  left: 0;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
`;

const Button = styled.button`
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

class Dropdown extends React.Component {
  state = {
    isOpen: false
  };
  handleClickOutside = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  };
  toggler = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  };
  render() {
    return (
      <BtnContainer>
        <Button onClick={this.toggler}>Dates</Button>
        {this.state.isOpen && (
          <DatesContainer>
            <Dates />
          </DatesContainer>
        )}
      </BtnContainer>
    );
  }
}

export default onClickOutside(Dropdown);
