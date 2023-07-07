import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import StarsRating from "./StarsRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarsRating maxValue={10} />
    <StarsRating size={24} color="red" />
    <StarsRating messages={["Terrible", "Bad", "Fair", "Good", "Amazing"]} />
  </React.StrictMode>
);
