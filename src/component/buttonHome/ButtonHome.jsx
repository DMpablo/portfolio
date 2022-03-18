import React from "react";
import style from "./buttonHome.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";

export const ButtonHome = ({ onLight }) => {
  return (
    <Link
      //className={style.nav_menu}
      activeClass="active"
      to="home"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      <button className={onLight ? style.backLight : style.backNight}>
        <p className={style.buttonUp}> ➲ </p>
      </button>
    </Link>
  );
};
