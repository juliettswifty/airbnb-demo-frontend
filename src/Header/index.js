import React from "react";
import logo from "./Path.svg";
import styled from "styled-components";

const Header = styled.header`
  border-bottom: 1px solid #eee;
`;

export default () => {
  return (
    <Header>
      <img src={logo} alt="logo" />
    </Header>
  );
};
