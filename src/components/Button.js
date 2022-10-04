import React from "react";
import classes from "./Button.module.css";

const Button = ({ userId, room, handleClick }) => {
  return (
    <>
      <button onClick={() => handleClick(userId)} className={classes._btn}>
        Flip room
      </button>
    </>
  );
};

export default Button;
