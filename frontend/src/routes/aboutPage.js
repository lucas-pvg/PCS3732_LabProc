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
        name="Pedro Vitor Bacic"
        info="Um entusiasta da cultura pop/funk nacional, sempre atualizado com novidades. Além disso, é um aficionado por séries, sua favorita é Desventuras em Série e ama reality shows. Nos momentos de descontração, Minecraft e Devour são seus jogos queridinhos do momento."
      />

      <AboutCard
        className="soph"
        side="right"
        end={true}
        name="Sophia Lie Asakura"
        info="Uma gostosa que vai pro Japão e não precisava mais ter que aturar a gente ou esse professor, mas ela ainda tenta. Sei lá, vai entender."
      />

    </div>
  );
};

export default AboutPage;
