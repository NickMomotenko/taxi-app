import React from "react";

import styled from "styled-components";

const TextWrapp = styled.div`
  font-size: 15px;
  color: #3e4958;
`;

const Text = ({ text, ...props }) => {
  return <TextWrapp {...props}>{text}</TextWrapp>;
};

export default Text;
