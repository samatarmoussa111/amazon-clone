import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reducer, { initialState } from "./reducers/BasketReducer";
import { StateProvider } from "./contexts/BasketContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <App />
  </StateProvider>
);
