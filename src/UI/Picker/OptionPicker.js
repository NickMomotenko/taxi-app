import React, { useState } from "react";

import { v4 as uuid } from "uuid";

import styled from "styled-components";

import Text from "../Text/Text";

import icon_1 from "../../assets/cars/1.png";
import icon_2 from "../../assets/cars/2.png";
import icon_3 from "../../assets/cars/3.png";

const OptionPickerWrapp = styled.div`
  display: flex;
  height: 100%;

  max-height: 166px;
`;

const OptionPickerItem = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  border-radius: 15px;

  margin-right: 10px;

  min-width: calc(100% / 2.5);
  padding: 20px 22px;
  text-align: center;

  opacity:${(props) => (props.activeId === props.carId ? "1" : "0.4")}

  &:last-child {
    margin-right: 0;
  }
`;

const OptionPicker = () => {
  const data = [
    {
      id: uuid(),
      title: "Stardart",
      icon: icon_1,
    },
    {
      id: uuid(),
      title: "Comfort",
      icon: icon_2,
    },
    {
      id: uuid(),
      title: "Elita",
      icon: icon_3,
    },
  ];

  const [active, setActive] = useState(data[0]);

  return (
    <OptionPickerWrapp>
      {data.map((car) => (
        <OptionPickerItem key={car.id} activeId={active.id} carId={car.id}>
          <img src={car.icon} alt={car.title} />
          <Text text={car.title} style={{ fontSize: "15px" }} />
        </OptionPickerItem>
      ))}
    </OptionPickerWrapp>
  );
};

export default OptionPicker;
