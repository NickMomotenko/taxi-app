import React from "react";

import styled from "styled-components";

const HeaderWrapp = styled.header`
  position: fixed;
  top: 20px;
  width: 100%;
  padding: 20px;
`;

const Header = ({ children }) => {
  return <HeaderWrapp>{children}</HeaderWrapp>;
};

export default Header;
