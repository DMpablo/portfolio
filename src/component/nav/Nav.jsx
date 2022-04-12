import React, { useState } from "react";
import style from "./nav.module.scss";
import { Link } from "react-scroll";
import { ReactComponent as Language } from "../../asset/icons/language.svg";
import { useTranslation } from "react-i18next";

export const Nav = ({ onLight, setOnLight }) => {
  const [stop, setStop] = useState(false);
  const [isSpanish, setIsSpanish] = useState(true);
  const [t, i18n] = useTranslation("global");

  const modeDark = () => {
    setStop(!stop);
    setOnLight(!onLight);
  };

  const modeClass = onLight ? style.nav_menu_light : style.nav_menu_night;

  return (
    <nav className={style.containerNav}>
      <div className={style.container_nav_menu}>
        <p className={style.space}>|</p>
        <Link
          className={modeClass}
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Pablo DM
        </Link>

        <Link
          className={modeClass}
          activeClass="active"
          to="proyect"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {t("Nav.proyects")}
        </Link>

        <Link
          className={modeClass}
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {t("Nav.contact")}
        </Link>
      </div>

      <div className={style.containerButton}>
        <div className={style.containerIcon}>
          <button
          className={style.buttonLanguage}
            onClick={
              !isSpanish
                ? () => i18n.changeLanguage("es", setIsSpanish(true))
                : () => i18n.changeLanguage("en", setIsSpanish(false))
            }
          >
            <Language className={!isSpanish ? style.iconActive : style.icon} />
          </button>
        </div>
        <p>{!onLight ? t("Nav.p-liht") : t("Nav.p-niht")}</p>
        <button className={style.mode} onClick={modeDark}>
          <div className={onLight ? style.dot_light : style.dot_night}/>
        </button>
      </div>
    </nav>
  );
};
