import React, { useState } from "react";

import { v4 as uuid } from "uuid";

export const useUserData = () => {
  const [data, setData] = useState({
    user: {
      name: "Nickolo",
      age: 23,
      tel: 31313113,
      cards: [
        {
          id: uuid(),
          type: "Mastercard",
          number: 242142142142,
        },
        {
          id: uuid(),
          type: "Visa",
          number: 242142144144,
        },
      ],
    },
    trips: [
      {
        id: uuid(),
        from: 1,
        to: 2,
        price: 58,
        driver: {
          id: uuid(),
          name: "Test driver",
          stars: 4,
        },
      },
    ],
  });

  return { data, setData };
};
