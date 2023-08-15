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
        info="NUSP 11804035. Oi, tudo bem? Também me chamam de Pedrinho e nesse projeto atuei como desenvolvedor backend. Sou muito fã de Jão e tô tentando retomar a academia pós quadri rs."
      />

      <AboutCard
        className="bacic"
        side="left"
        name="Pedro Vitor Bacic"
        info="NUSP 11806934. Todo mundo me chama de Bacic/Basic, mas dizem as fics que meu nome é Pedro. Nesse projeto, me envolvi com o backend. Amo música pop/funk nacional, amo reality shows e Minecraft e Devour é o que mais jogo no momento."
      />

      <AboutCard
        className="soph"
        side="right"
        end={true}
        name="Sophia Lie Asakura"
        info="NUSP 11806656. A maioria das pessoas da Poli me chamam de Lie com exceção do Luquinhas. Nesse projeto fiquei responsável pelo frontend. Gosto muito de dançar e queria voltar a praticar no futuro."
      />

    </div>
  );
};

export default AboutPage;
