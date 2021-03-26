import React from "react";

import styled from "styled-components";

import Button from "../../UI/Button/Button";
import OptionPicker from "../../UI/Picker/OptionPicker";
import Text from "../../UI/Text/Text";
import { Column, Row } from "../../UI/Layout/Layout";
import { useUserData } from "../../hooks/userData";

const RideWrapp = styled.div``;

const Ride = () => {
  const {
    data: { user },
  } = useUserData();

  return (
    <RideWrapp>
      <OptionPicker />
      <Row>
        <Column>
          <Text text="Estimated trip time" />
          <Text text="22 min" />
        </Column>
        <Column>
          <Text text={user.cards[0].type} />
        </Column>
      </Row>
      <Button label="Book ride" />
    </RideWrapp>
  );
};

export default Ride;
