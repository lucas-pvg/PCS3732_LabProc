import React from "react";
import Navbar from "../components/navbar/navbar";
import AboutIntro from "../components/aboutus/aboutIntro/aboutIntro";
import AboutCard from "../components/aboutus/aboutCard/aboutCard";

const AboutPage = () => {
  return (
    <div className="aboutus">
      <Navbar />
      <AboutIntro />

      <AboutCard
        className="lucas"
        side="left"
        name="Lucas Pavan Garieri"
        info="Alguém que não dorme tem muito tempo e precisa urgentemente de férias. Seus maiores medos são feedback da Tereza, exercício surpresa de econo e cheiro de Falquetto. Also alguém paga minha FEA Funk?"
      />

      <AboutCard
        className="pedro"
        side="right"
        name="Pedro Henrique Viveiros"
        info="Um gostoso que comprou PC novo pra ficar jogando Hogwarts Legacy e eu acho isso um absurdo. Porém faz brownie muito bom então a gente finge que tá tudo bem."
      />

      <AboutCard
        className="bacic"
        side="left"
        name="Pedro Victor Bacic"
        info="Outro gostoso que vai pra Alemanha e tá aqui sofrendo porque se odeia. Mas perfeito, tudo pra mim, joga Devour comigo à noite e depois fica os dois idiota com medo na USP."
      />

      <AboutCard
        className="soph"
        side="right"
        end={true}
        name="Sophia Asakure Lie"
        info="Uma gostosa que vai pro Japão e não precisava mais ter que aturar a gente ou esse professor, mas ela ainda tenta. Sei lá, vai entender."
      />

    </div>
  );
};

export default AboutPage;
