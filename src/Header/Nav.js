import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Link = styled.a`
  text-decoration: none;
  line-height: 24px;
  font-size: 0.875rem;
  color: #383838;
  margin-left: 8px;
`;

export default () => {
  return (
    <Nav>
      <Link href="#">Become a host</Link>
      <Link href="#">Help</Link>
      <Link href="#">Sign Up</Link>
      <Link href="#">Log In</Link>
    </Nav>
  );
};
