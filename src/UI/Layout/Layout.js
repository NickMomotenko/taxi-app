import React from "react";

import styled from "styled-components";

const ColumnWrapp = styled.div``;

const RowWrapp = styled.div`
  display: flex;
`;

const PaperWrapp = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  width: 100%;
  padding: 15px 18px;
`;

export const Column = ({ children, ...props }) => {
  return <ColumnWrapp {...props}>{children}</ColumnWrapp>;
};

export const Row = ({ children , ...props }) => {
  return <RowWrapp {...props}>{children}</RowWrapp>;
};

export const Paper = ({ children, ...props }) => {
  return <PaperWrapp {...props}>{children}</PaperWrapp>;
};
