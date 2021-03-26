import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { useWindowSize } from "./hooks/windowSize";

import Wrapper from "./components/Wrapper/Wrapper";

const AppWrapp = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  const { width } = useWindowSize();
  let isMobile = width < 480 ? true : false;

  return <AppWrapp>{isMobile ? <Wrapper /> : <div>PC</div>}</AppWrapp>;
};

export default App;
