import React, { useState } from "react";
import style from "./nav.module.scss";
import { Link } from "react-scroll";

export const Nav = ({ onLight, setOnLight }) => {
  const [stop, setStop] = useState(false);

  const modeDark = () => {
    setStop(!stop);
    setOnLight(!onLight);
  };

  const modeClass = onLight ? style.nav_menu_light : style.nav_menu_night

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
          Proyects
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
          Contact
        </Link>
      </div>

      <div className={style.containerButton}>
        <p>{!onLight ? "night" : "light"}</p>
        <button onClick={modeDark}>
          <div className={onLight ? style.dot_light : style.dot_night}></div>
        </button>
      </div>
    </nav>
  );
};
