import React from "react";
import style from "./message.module.scss";

export const Message = ({ onLight }) => {
  return (
    <div className={style.container}>
      <div className={onLight ? style.bar_x_light : style.bar_x_night} />
      <p className={onLight ? style.light : style.night}>
        " The first step doesn't take you where you want to go, <br /> but it takes you from where you are. "
      </p>
    </div>
  );
};
