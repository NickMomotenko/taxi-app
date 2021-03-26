import React from "react";

import styled from "styled-components";

const InputWrapp = styled.input`
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.14);
  border-radius: 15px;
  height: 44px;
`;

const Input = (props) => {
  return <InputWrapp {...props} />;
};

export default Input;
