import React from "react";
import style from "./proyects.module.scss";

export const Proyects = ({ onLight }) => {
  return (
    <div name="proyect" className={style.container}>
      <div className={onLight ? style.bar_x_light : style.bar_x_night} />
      <p> Proyectos que realice y algunos donde participe </p>

      <div className={style.containerProyects}>
        <a
          className={style.cards}
          target="_blank"
          href="https://kalenislims.com/"
        >
          <p className={style.card_title}>Kalenis lims</p>
          <div className={style.description}>
            <p>Empresa de software</p>
            <p>
              Participe en el mantenimiento <br />
              y desarrollo de su producto <br />
              como dev. Frontend.
            </p>
            <p className={style.sub_description}>React | yarn | Tailwind </p>
          </div>
        </a>

        <a
          className={style.cards}
          target="_blank"
          href="https://dmpablo.github.io/insumosmedicos-de-marco/"
        >
          <p className={style.card_title}>Klavijero</p>
          <div className={style.description}>
            <p>
              Aplicacion web <br /> de canciones y acordes 
            </p>
            <p>
              Participe en su actualizacion <br /> como dev. frontend
            </p>

            <p className={style.sub_description} >Angular | TypeScript | Node </p>
          </div>
        </a>

        <a
          className={style.cards}
          target="_blank"
          href="https://dmpablo.github.io/insumosmedicos-de-marco/"
        >
          <p className={style.card_title}>Insumos medicos</p>
          <div className={style.description}>
            <p>e-commerce de insumos descartables medicos</p>
            <p>
              proyecto final del curso <br />
              ReactJs en coderhouse
            </p>
            <p className={style.sub_description} >React | npm | Firebase  </p>
          </div>
        </a>

        <a
          className={style.cards}
          target="_blank"
          href="https://api-marvel-bae95.web.app/"
        >
          <p className={style.card_title}>Api marvel</p>
          <div className={style.description}>
            <p>
              Pagina donde recopila información acerca de <br /> personajes de
              Marvel
            </p>
            <p className={style.sub_description} > React | npm | API  </p>
          </div>
        </a>

        <a
          className={style.cards}
          target="_blank"
          href="https://notes-projetc.web.app/"
        >
          <p className={style.card_title}>Note proyect</p>
          <div className={style.description}>
            <p>
              Proyecto de notas <br /> donde practique <br /> style module
              component <br /> en sass.
            </p>

            <p className={style.sub_description} > React | npm | Sass  </p>

          </div>
        </a>

        <a
          className={style.cards}
          target="_blank"
          href="https://dmpablo.github.io/entregaFinalCoder/"
        >
          <p className={style.card_title}>Pedilo aca</p>
          <div className={style.description}>
            <p>
              e-commerce <br /> venta de alimentos en linea
            </p>
            <p>
              proyecto final para el <br /> curso JavaScript <br /> en
              coderhouse
            </p>

            <p className={style.sub_description} > JavaScript | JQuery | JSON  </p>

          </div>
        </a>

        <a
          className={style.cards}
          target="_blank"
          href="https://dmpablo.github.io/buena-vibra/#"
        >
          <p className={style.card_title}>Buena vibra</p>
          <div className={style.description}>
            <p>
              Pagina de contacto <br /> de centro de belleza
            </p>
            <p className={style.sub_description} > React | Boostrap </p>
          </div>
        </a>

        <a
          className={style.cards}
          target="_blank"
          href="https://ladoxlado-mnuebles.netlify.app/"
        >
          <p className={style.card_title}>Lado x Lado muebles</p>
          <div className={style.description}>
            <p>
              Pagina de contacto <br /> muebles estilo industrial
            </p>
            <p className={style.sub_description} > HTML | CSS | Boostrap </p>
          </div>
        </a>

        
      </div>
    </div>
  );
};
