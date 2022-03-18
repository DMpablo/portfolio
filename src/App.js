import React, { useState } from "react";
import { Message } from "./component/message/Message";
import { Nav } from "./component/nav/Nav";
import { Proyects } from "./component/proyects/Proyects";
import { Skills } from "./component/skills/Skills";
import { Footer } from "./component/footer/Footer";
import { Welcome } from "./component/welcome/Welcome";
import { ButtonHome } from "./component/buttonHome/ButtonHome";
import "./styles/global.scss";
import style from "./app.module.scss";

function App() {
  const [onLight, setOnLight] = useState(true);

  return (
    <>
      <div className={onLight ? style.containerLight : style.containerNight}>
        <Nav onLight={onLight} setOnLight={setOnLight} />
        <Welcome onLight={onLight} />
        <Message onLight={onLight} />
        <Skills onLight={onLight}/>
        <Proyects onLight={onLight}/>
        <Footer onLight={onLight}/>
        <ButtonHome className={style.back} onLight={onLight} />
      </div>
    </>
  );
}

export default App;
