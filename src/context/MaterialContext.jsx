import React, { createContext, useContext } from "react";

export const MaterialContext = createContext({
  materials: [
    {
      material: "Cement",
      quantity: 0,
      price: 0,
      totalAmount: 0,
    },
    {
      material: "Steel",
      quantity: 0,
      price: 0,
      totalAmount: 0,
    },
    {
      material: "Sand",
      quantity: 0,
      price: 0,
      totalAmount: 0,
    },
    {
      material: "Ash Bricks",
      quantity: 0,
      price: 0,
      totalAmount: 0,
    },
    {
      material: "Cement Bricks",
      quantity: 0,
      price: 0,
      totalAmount: 0,
    },
  ],
});

export const useMaterial = () => {
  return useContext(MaterialContext);
};

export const MaterialProvider = ({ children }) => {
  return (
    <MaterialContext.Provider value={{}}>
      {children}
    </MaterialContext.Provider>
  );
};
