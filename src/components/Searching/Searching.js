import React from "react";

import styled, { keyframes } from "styled-components";
import Text from "../../UI/Text/Text";

import car_top from "../../assets/icons/car_top.png";

const anim = keyframes` 
    0% {
        box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.8);
    }
  
    70% {
        box-shadow: 0 0 0 25px rgba(52, 172, 224, 0.4);
    }
  
    100% {
        box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);
    }
`;

const SearchingWrapp = styled.div`
  background: rgba(62, 73, 88, 0.8);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const SearchingAnimation = styled.div`
  display: inline-block;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: rgba(52, 172, 224, 1);
  box-shadow: 0 0 0 0 rgba(52, 172, 224, 1);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${anim} 1.5s infinite;

  &:before,
  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:before {
    background: url(${car_top}) center no-repeat;
    background-size: cover;
    height: 73px;
    width: 37px;

    z-index: 2;
  }

  &:after {
    border-radius: 50%;
    height: 70px;
    width: 70px;
    background: rgb(92 157 185);
    animation: ${anim} 1.5s infinite;
    animation-delay: 0.3s;
  }
`;

const Searching = () => {
  return (
    <SearchingWrapp>
      <SearchingAnimation />
      <Text
        text="Searching for a driver"
        style={{
          position: "fixed",
          bottom: "20px",
          color: "#fff",
          fontSize: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      />
    </SearchingWrapp>
  );
};

export default Searching;
