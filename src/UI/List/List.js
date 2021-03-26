import React from "react";

import styled from "styled-components";

const ListWrapp = styled.div``;

const List = ({ children }) => {
  return <ListWrapp>{children}</ListWrapp>;
};

export default List;
