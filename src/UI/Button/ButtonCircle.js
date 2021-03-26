import React from "react";

import styled from "styled-components";

const ButtonCircleWrapp = styled.button`
  display: inline-block;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: #fff;
`;

const ButtonCircle = ({ ...props }) => {
  return <ButtonCircleWrapp {...props}></ButtonCircleWrapp>;
};

export default ButtonCircle;
