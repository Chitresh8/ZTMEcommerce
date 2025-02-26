import React from "react";

export const Button = ({ onButtonClick, buttonText }) => {
  return (
    <>
      <button onClick={onButtonClick}>{buttonText}</button>
    </>
  );
};
