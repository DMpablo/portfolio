import React from "react";
import style from "./proyects.module.scss";

export const Proyects = ({ onLight }) => {
  return (
    <div name="proyect" className={style.container}>
      <div className={onLight ? style.bar_x_light : style.bar_x_night} />
      <p> Completed projects and others where I participate</p>

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
            perform maintenance <br /> and update your product <br /> as a dev. frontend.
            </p>
            <p className={style.sub_description}>React | yarn | Tailwind </p>
          </div>
        </div>

        <div className={style.cards}>
          <a
            className={style.a}
            target="_blank"
            rel="noopener noreferrer"
            href="https://klavijero.herokuapp.com/"
          >
            <p className={style.card_title}>Klavijero</p>
          </a>
          <div className={style.description}>
            <p>
              web application <br /> of songs and chords
            </p>
            <p>
            perform part of your upgrade <br /> as dev. front-end.
            </p>

            <p className={style.sub_description}>
              Angular | TypeScript | Node{" "}
            </p>
          </div>
        </div>

        <div className={style.cards}>
          <a
            className={style.a}
            target="_blank"
            rel="noopener noreferrer"
            href="https://dmpablo.github.io/insumosmedicos-de-marco/"
          >
            <p className={style.card_title}>Insumos medicos</p>
          </a>
          <div className={style.description}>
          <p> e-commerce on medical disposables </p>
          <p>
               course final project <br />
               ReactJs on coderhouse
             </p>
            <p className={style.sub_description}>React | npm | Firebase </p>
          </div>
        </div>

        <div className={style.cards}>
          <a
            className={style.a}
            target="_blank"
            rel="noopener noreferrer"
            href="https://api-marvel-bae95.web.app/"
          >
            <p className={style.card_title}>Api marvel</p>
          </a>
          <div className={style.description}>
          <p>
               Page where you collect information about <br /> characters from
               Marvel
             </p>
            <p className={style.sub_description}> React | npm | API </p>
          </div>
        </div>

        <div className={style.cards}>
          <a
            className={style.a}
            target="_blank"
            rel="noopener noreferrer"
            href="https://notes-projetc.web.app/"
          >
            <p className={style.card_title}>Note proyect</p>
          </a>
          <div className={style.description}>
          <p>
               Notes project <br /> where I practice <br /> style module
               component <br /> in sass.
             </p>

            <p className={style.sub_description}> React | npm | Sass </p>
          </div>
        </div>

        <div className={style.cards}>
          <a
            className={style.a}
            target="_blank"
            rel="noopener noreferrer"
            href="https://dmpablo.github.io/entregaFinalCoder/"
          >
            <p className={style.card_title}>Pedilo aca</p>
          </a>
          <div className={style.description}>
          <p>
               e-commerce <br /> online food sales
             </p>
             <p>
               final project for the <br /> JavaScript course <br /> in
               codehouse
             </p>

            <p className={style.sub_description}>
              {" "}
              JavaScript | JQuery | JSON{" "}
            </p>
          </div>
        </div>

        <div className={style.cards}>
          <a
            className={style.a}
            target="_blank"
            rel="noopener noreferrer"
            href="https://dmpablo.github.io/buena-vibra/#"
          >
            <p className={style.card_title}>Buena vibra</p>
          </a>
          <div className={style.description}>
          <p>
               Contact page <br /> of beauty center
             </p>
            <p className={style.sub_description}> React | Boostrap </p>
          </div>
        </div>

        <div className={style.cards}>
          <a
            className={style.a}
            target="_blank"
            rel="noopener noreferrer"
            href="https://ladoxlado-mnuebles.netlify.app/"
          >
            <p className={style.card_title}>Lado x Lado</p>
          </a>
          <div className={style.description}>
          <p>
               Contact page <br /> industrial style furniture
             </p>
            <p className={style.sub_description}> HTML | CSS | Boostrap </p>
          </div>
        </div>
      </div>
    </div>
  );
};
