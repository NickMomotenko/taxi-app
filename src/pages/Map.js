import React from "react";

import { Switch, Route, Link } from "react-router-dom";

import styled from "styled-components";

import { v4 as uuid } from "uuid";

import mapBg from "../assets/map.png";

import Swiper from "../UI/Swiper/Swiper";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Picker from "../UI/Picker/Picker";
import OptionPicker from "../UI/Picker/OptionPicker";
import Text from "../UI/Text/Text";
import { Column, Row } from "../UI/Layout/Layout";

import Ride from "../components/Ride/Ride";
import Payment from "../components/Payment/Payment";
import Searching from "../components/Searching/Searching";

import { useUserData } from "../hooks/userData";

const MapWrapp = styled.div`
  height: 100%;
  width: 100%;
  background: url(${(props) => props.bg}) center no-repeat;
`;

const pathData = [
  {
    id: uuid(),
    path: "/options",
    title: "Payments option",
    components: <Ride />,
  },
  {
    id: uuid(),
    path: "/payment",
    title: "Payments option",
    components: <Payment />,
  },
  {
    id: uuid(),
    path: "/searching",
    components: <Searching />,
  },
];

const Map = () => {
  const {
    data: { user },
  } = useUserData();

  return (
    <MapWrapp bg={mapBg}>
      {pathData.map((item) => (
        <Route key={item.id} path={item.path}>
          <Swiper>{item.components}</Swiper>
        </Route>
      ))}
    </MapWrapp>
  );
};

export default Map;
