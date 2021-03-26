import React, { useState } from "react";

import styled from "styled-components";

const SwiperWrapp = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 15px rgb(0 0 0 / 10%);
  border-radius: 25px 25px 0 0;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 500px;
  padding: 35px 20px 20px;

  &:before {
    content: "";
    display: inline-block;
    background-color: #d5dde0;
    width: 30px;
    height: 5px;
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
  }
`;

const Swiper = ({ children }) => {
  const [isActive, setIsActive] = useState(true);

  return <SwiperWrapp active={isActive}>{children}</SwiperWrapp>;
};

export default Swiper;
