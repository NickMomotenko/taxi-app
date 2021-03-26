import React from "react";

import styled from "styled-components";

import line_route from "../../assets/icons/line-route.png";
import Input from "../Input/Input";

import { Column } from "../Layout/Layout";

const PickerWrapp = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.14);
  border-radius: 15px;
  width: 100%;
  padding: 16px 0 16px 15px;
  display: flex;

  &:before {
    content: "";
    display: inline-block;
    background: url(${line_route}) center no-repeat;
    height: 65px;
    width: 15px;
    background-size: contain;
    margin-right: 12px;
  }
`;

const Picker = () => {
  return (
    <PickerWrapp>
      <Column>
        <Input placeholder="24, Ocean avenue" />
        <Input placeholder="I’m going to..." />
      </Column>
    </PickerWrapp>
  );
};

export default Picker;
