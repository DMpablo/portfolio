import React from "react";
import style from "./proyects.module.scss";
import { useTranslation } from "react-i18next";

export const Proyects = ({ onLight }) => {
  const [t] = useTranslation("global");

  const allProyects = [
    {
      name: t("proyects.Kalenis.name"),
      title: t("proyects.Kalenis.title"),
      descriptions: t("proyects.Kalenis.descriptions"),
      url: t("proyects.Kalenis.url"),
      tools: t("proyects.Kalenis.tools"),
    },
    {
      name: t("proyects.klavijero.name"),
      title: t("proyects.klavijero.title"),
      descriptions: t("proyects.klavijero.descriptions"),
      url: t("proyects.klavijero.url"),
      tools: t("proyects.klavijero.tools"),
    },
    {
      name: t("proyects.InsumosMedicos.name"),
      title: t("proyects.InsumosMedicos.title"),
      descriptions: t("proyects.InsumosMedicos.descriptions"),
      url: t("proyects.InsumosMedicos.url"),
      tools: t("proyects.InsumosMedicos.tools"),
    },
    {
      name: t("proyects.MarvelApi.name"),
      title: t("proyects.MarvelApi.title"),
      descriptions: t("proyects.MarvelApi.descriptions"),
      url: t("proyects.MarvelApi.url"),
      tools: t("proyects.MarvelApi.tools"),
    },
    {
      name: t("proyects.NoteProyect.name"),
      title: t("proyects.NoteProyect.title"),
      descriptions: t("proyects.NoteProyect.descriptions"),
      url: t("proyects.NoteProyect.url"),
      tools: t("proyects.NoteProyect.tools"),
    },
    {
      name: t("proyects.PediloAca.name"),
      title: t("proyects.PediloAca.title"),
      descriptions: t("proyects.PediloAca.descriptions"),
      url: t("proyects.PediloAca.url"),
      tools: t("proyects.PediloAca.tools"),
    },
    {
      name: t("proyects.BuenaVibra.name"),
      title: t("proyects.BuenaVibra.title"),
      descriptions: t("proyects.BuenaVibra.descriptions"),
      url: t("proyects.BuenaVibra.url"),
      tools: t("proyects.BuenaVibra.tools"),
    },
    {
      name: t("proyects.LadoXLado.name"),
      title: t("proyects.LadoXLado.title"),
      descriptions: t("proyects.LadoXLado.descriptions"),
      url: t("proyects.LadoXLado.url"),
      tools: t("proyects.LadoXLado.tools"),
    },
  ];

  console.log(allProyects);

  return (
    <div name="proyect" className={style.container}>
      <div className={onLight ? style.bar_x_light : style.bar_x_night}/>
        <p> {t("Proyect.title")}</p>
       
        <div className={style.containerProyects}>
          {allProyects.length >= 0 ? (
            allProyects.map((e) => (
              <div key={e.name} className={style.cards}>
                <a
                  className={style.a}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={e.url}
                >
                  <p className={style.card_title}>{e.name}</p>
                </a>
                <div className={style.description}>
                  <p>{e.title}</p>
                  <p>{e.descriptions}</p>
                  <p className={style.sub_description}>{e.tools}</p>
                </div>
              </div>
            ))
          ) : (
            <div className={style.cards}>
              <p>onload cards...</p>
            </div>
          )}
        </div>
     
    </div>
  );
};

/*  <div name="proyect" className={style.container}>
      <div className={onLight ? style.bar_x_light : style.bar_x_night}>
      <p> {t("Proyect.title")}</p>
      <div className={style.containerProyects}>
        <div className={style.cards}>
          <a
            className={style.a}
            target="_blank"
            rel="noopener noreferrer"
            href="https://kalenislims.com/"
          >
            <p className={style.card_title}>Kalenis lims</p>
          </a>
          <div className={style.description}>
            <p>Software company</p>
            <p>
              perform maintenance <br /> and update your product <br /> as a
              dev. frontend.
            </p>
            <p className={style.sub_description}>React | yarn | Tailwind </p>
          </div>
        </div>  
      </div>
    </div>*/
