import React from "react";
import style from "./message.module.scss";

export const Message = ({ onLight }) => {
  return (
    <div className={style.container}>
      <div className={onLight ? style.bar_x_light : style.bar_x_night} />
      <p className={onLight ? style.light : style.night}>
        " El primer paso no te lleva donde querés ir, <br /> pero te saca de donde estás. "
      </p>
    </div>
  );
};
