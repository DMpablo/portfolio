import React from "react";
import { ReactComponent as Github } from "../../asset/icons/bxl-github.svg";
//import { ReactComponent as Workana } from "../../asset/icons/workana.svg";
import { ReactComponent as Gmail } from "../../asset/icons/gmail.svg";
import { ReactComponent as Linkedin } from "../../asset/icons/linkedin.svg";
import { useTranslation } from "react-i18next";

import style from "./footer.module.scss";

export const Footer = ({ onLight }) => {
  const [t] = useTranslation("global");

  return (
    <div  name="contact" className={style.container}>
     <div className={onLight ? style.bar_x_light : style.bar_x_night} />
      <p className={style.p}> {t("Footer")}</p>
      <div className={style.containerIcons}>
        <a href="https://github.com/DMpablo" rel="noopener noreferrer" target="_blank" >
          <Github className={style.icons} />
          <p>DMpablo</p>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dmpablo/">
          <Linkedin className={style.icons} />
          <p>Pablo De Marco</p>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="mailto:phdemarco@gmail.com?Subject=CONTACTE%20DESDE%20TU%20PORFOLIO">
          <Gmail className={style.icons} />
          <p>phdemarco@gmail.com</p>
        </a>
      </div>
    </div>
  );
};

/*
<a target="_blank" rel="noopener noreferrer" href="https://www.workana.com/freelancer/d3d116be78b4d060dc298eb0f228d718" >
<Workana className={style.icons} />
<p>Pablo DM</p>
</a>*/