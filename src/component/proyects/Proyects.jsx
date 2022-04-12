import React from "react";
import style from "./proyects.module.scss";
import { useTranslation } from "react-i18next";

export const Proyects = ({ onLight }) => {
  const [t] = useTranslation("global");

  const allProyects = [
    {
      name: t("proyects.Kalenis.name"),
      title: t("proyects.Kalenis.title"),
      descriptionsL1: t("proyects.Kalenis.descriptionsL1"),
      descriptionsL2: t("proyects.Kalenis.descriptionsL2"),
      url: t("proyects.Kalenis.url"),
      tools: t("proyects.Kalenis.tools"),
    },
    {
      name: t("proyects.klavijero.name"),
      title: t("proyects.klavijero.title"),
      descriptionsL1: t("proyects.klavijero.descriptionsL1"),
      descriptionsL2: t("proyects.klavijero.descriptionsL2"),
      url: t("proyects.klavijero.url"),
      tools: t("proyects.klavijero.tools"),
    },
    {
      name: t("proyects.InsumosMedicos.name"),
      title: t("proyects.InsumosMedicos.title"),
      descriptionsL1: t("proyects.InsumosMedicos.descriptionsL1"),
      descriptionsL2: t("proyects.InsumosMedicos.descriptionsL2"),
      url: t("proyects.InsumosMedicos.url"),
      tools: t("proyects.InsumosMedicos.tools"),
    },
    {
      name: t("proyects.MarvelApi.name"),
      title: t("proyects.MarvelApi.title"),
      descriptionsL1: t("proyects.MarvelApi.descriptionsL1"),
      descriptionsL2: t("proyects.MarvelApi.descriptionsL2"),
      url: t("proyects.MarvelApi.url"),
      tools: t("proyects.MarvelApi.tools"),
    },
    {
      name: t("proyects.NoteProyect.name"),
      title: t("proyects.NoteProyect.title"),
      descriptionsL1: t("proyects.NoteProyect.descriptionsL1"),
      descriptionsL2: t("proyects.NoteProyect.descriptionsL2"),
      url: t("proyects.NoteProyect.url"),
      tools: t("proyects.NoteProyect.tools"),
    },
    {
      name: t("proyects.PediloAca.name"),
      title: t("proyects.PediloAca.title"),
      descriptionsL1: t("proyects.PediloAca.descriptionsL1"),
      descriptionsL2: t("proyects.PediloAca.descriptionsL2"),
      url: t("proyects.PediloAca.url"),
      tools: t("proyects.PediloAca.tools"),
    },
    {
      name: t("proyects.BuenaVibra.name"),
      title: t("proyects.BuenaVibra.title"),
      descriptionsL1: t("proyects.BuenaVibra.descriptionsL1"),
      descriptionsL2: t("proyects.BuenaVibra.descriptionsL2"),
      url: t("proyects.BuenaVibra.url"),
      tools: t("proyects.BuenaVibra.tools"),
    },
    {
      name: t("proyects.LadoXLado.name"),
      title: t("proyects.LadoXLado.title"),
      descriptionsL1: t("proyects.LadoXLado.descriptionsL1"),
      descriptionsL2: t("proyects.LadoXLado.descriptionsL2"),
      url: t("proyects.LadoXLado.url"),
      tools: t("proyects.LadoXLado.tools"),
    },
  ];

  console.log(allProyects);

  return (
    <div name="proyect" className={style.container}>
      <div className={onLight ? style.bar_x_light : style.bar_x_night}/>
        <p> {t("Proyect_title.p1")}</p>
        <p> {t("Proyect_title.p2")}</p>
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
                  <p className={style.subtitle}>{e.title}</p>
                  <p>{e.descriptionsL1}</p>
                  <p>{e.descriptionsL2}</p>
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
