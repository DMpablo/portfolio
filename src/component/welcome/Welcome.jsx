import React from "react";
import style from "./welcome.module.scss";
import Lottie from "lottie-react";
import DevBlue from "../../asset/lotties/developer-blue.json";

export const Welcome = ({ onLight }) => {
  return (
    <div name="home" className={style.containerWelcome}>
      <div className={style.containerText}>
        <p className={style.saludo}>Hola, soy Pablo DM </p>
        <p className={onLight ? style.descriptionL : style.descriptionN}>
          y soy desarrollador Frontend
        </p>
      </div>
      <Lottie animationData={DevBlue} />
    </div>
  );
};
