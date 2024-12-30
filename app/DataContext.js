"use client";

import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState({});
  const [seats, setSeats] = useState({});
  const [arrivalSeats, setArrivalSeats] = useState({});
  const [cardForm, setCardForm] = useState({});
  const [passengerForm, setpassengerForm] = useState({});

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        seats,
        setSeats,
        arrivalSeats,
        setArrivalSeats,
        cardForm,
        setCardForm,
        passengerForm,
        setpassengerForm,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
