import React from "react";

import styled from "styled-components";

import { useUserData } from "../../hooks/userData";

import { Paper, Row } from "../../UI/Layout/Layout";
import Text from "../../UI/Text/Text";
import Icon from "../../UI/Icon/Icon";

// import visa from "../assets/icon/visa.png";
// import mastercard from "../assets/icon/mastercard.png";
import cash from "../../assets/icons/cash.png";

const PaymentWrapp = styled.div``;

const Payment = () => {
  const {
    data: { user },
  } = useUserData();

  return (
    <PaymentWrapp>
      <Text
        text="Select payments"
        style={{ fontSize: "18px", fontWeight: "700" }}
      />
      {user.cards.map((card) => (
        <Paper key={card.id} style={{ margin: "8px 0" }}>
          <Row>
            <Icon url={cash} />
            <Text
              text={`**** ${card.number
                .toString()
                .split("")
                .splice(-4)
                .join("")}`}
            />
          </Row>
        </Paper>
      ))}
      <Paper>
        <Text text="Cash" />
      </Paper>
    </PaymentWrapp>
  );
};

export default Payment;
