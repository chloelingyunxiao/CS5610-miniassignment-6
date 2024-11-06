import React from "react";
import { useBoxesContext } from "../contextAndHooks/BoxesContext";
import "../App.css";

export const Box = ({ index }) => {
  const { boxesState, handleToggle } = useBoxesContext();
  const isTurnOn = boxesState[index];

  const handleClick = () => {
    handleToggle(index, !isTurnOn);
  };

  const targetClass = isTurnOn ? "box-on" : "box-off";

  return <div className={targetClass} onClick={handleClick}></div>;
};
