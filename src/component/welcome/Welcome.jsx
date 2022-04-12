import React from "react";
import style from "./welcome.module.scss";
import Lottie from "lottie-react";
import DevBlue from "../../asset/lotties/developer-blue.json";
import { useTranslation} from "react-i18next"


export const Welcome = ({ onLight }) => {
  const [t] = useTranslation("global");



  return (
    <div name="home" className={style.containerWelcome}>
      <div className={style.containerText}>
        <p className={style.saludo}>{t("Welcome.welcome")} </p>
        <p className={onLight ? style.descriptionL : style.descriptionN}>
        {t("Welcome.description")}
        </p>
      </div>
      <Lottie animationData={DevBlue} />
    </div>
  );
};
