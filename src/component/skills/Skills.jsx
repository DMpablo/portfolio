import React from "react";
import { ReactComponent as Html5 } from "../../asset/icons/bxl-html5.svg";
import { ReactComponent as Sass } from "../../asset/icons/bxl-sass.svg";
import { ReactComponent as Git } from "../../asset/icons/bxl-git.svg";
import { ReactComponent as Github } from "../../asset/icons/bxl-github.svg";
import { ReactComponent as Javascript } from "../../asset/icons/bxl-javascript.svg";
import { ReactComponent as Reactjs } from "../../asset/icons/bxl-react.svg";
import { ReactComponent as Css } from "../../asset/icons/bxl-css3.svg";
import { ReactComponent as Json } from "../../asset/icons/bxs-file-json.svg";
import style from "./skills.module.scss";

export const Skills = ({onLight}) => {
  return (
    <div className={style.container}>
      <div className={onLight ? style.bar_x_light : style.bar_x_night} />
      <p className={style.p}>
      Estas son algunas de las tecnologías que manejo.
      </p>
      <div className={style.containerIcons}>
        <Html5 className={style.icons} />
        <Css className={style.icons} />
        <Sass className={style.icons} />
        <Javascript className={style.icons} />
        <Json className={style.icons} />
        <Reactjs className={style.icons} />
        <Git className={style.icons} />
        <Github className={style.icons} />
      </div>
    </div>
  );
};
