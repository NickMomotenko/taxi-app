import React from "react";

import styled from "styled-components";

const ButtonWrapp = styled.button`
  background: #1152fd;
  box-shadow: 0px 2px 8px rgba(16, 105, 227, 0.3);
  border-radius: 15px;
  width: 100%;

  letter-spacing: 0.2px;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;

  padding: 22px 15px;
`;

const Button = ({ label }) => {
  return <ButtonWrapp>{label}</ButtonWrapp>;
};

export default Button;
