import React from "react";

import styled from "styled-components";

import { useWindowSize } from "../hooks/windowSize";

import t_1 from "../assets/1.png";
import t_2 from "../assets/2.png";

import Logo from "../components/Logo/Logo";

const PreviewWrapp = styled.div`
  height: 100%;
  width: 100%;
  background: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Preview = () => {
  const bg = `https://cdn.dribbble.com/users/771697/screenshots/6238793/illustration_exchange_dribbble_4x.png?compress=1&resize=1200x900`;

  //   const { height } = useWindowSize();

  return <PreviewWrapp bg={t_2}>{/* <Logo /> */}</PreviewWrapp>;
};

export default Preview;
