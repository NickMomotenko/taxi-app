import React from "react";

import styled from "styled-components";
import Map from "../../pages/Map";

import Preview from "../../pages/Preview";
import { Row } from "../../UI/Layout/Layout";
import ButtonCircle from "../../UI/Button/ButtonCircle";
import Text from "../../UI/Text/Text";
import Header from "../Header/Header";

const WrapperContent = styled.div`
  height: 100%;
  width: 100%;
`;

const Wrapper = () => {
  return (
    <WrapperContent>
      <Header>
        <Row style={{ alignItems: "center", position: "relative" }}>
          <ButtonCircle style={{ position: "absolute" }} />
          <Text
            text="Test title"
            style={{ fontSize: "22px", fontWeight: "700", margin: "0 auto" }}
          />
        </Row>
      </Header>
      <Map />
    </WrapperContent>
  );
};

export default Wrapper;
