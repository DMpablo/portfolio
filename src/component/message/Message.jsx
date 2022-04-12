import React from "react";
import style from "./message.module.scss";
import { useTranslation} from "react-i18next"

export const Message = ({ onLight }) => {
  const [t] = useTranslation("global");

  return (
    <div className={style.container}>
      <div className={onLight ? style.bar_x_light : style.bar_x_night} />
      <p className={onLight ? style.light : style.night}>
      {t("Message")}
      </p>
    </div>
  );
};
