import React from "react";
import Navbar from "../components/navbar/navbar";
import AboutIntro from "../components/aboutus/aboutIntro/aboutIntro";
import AboutCard from "../components/aboutus/aboutCard/aboutCard";
import "./aboutPage.css";

const AboutPage = () => {
  return (
    <div className="aboutus">
      <Navbar />
      <AboutIntro />

      <AboutCard
        className="soph"
        side="left"
        name="Sophia Asakure Lie"
        info="Uma gostosa que vai pro Japão e não precisava mais ter que aturar a gente ou esse professor, mas ela ainda tenta. Sei lá, vai entender."
      />

      <AboutCard
        className="pedro"
        side="right"
        name="Pedro Henrique Viveiros"
        info="Uma gostosa que vai pro Japão e não precisava mais ter que aturar a gente ou esse professor, mas ela ainda tenta. Sei lá, vai entender."
      />

      <AboutCard
        className="bacic"
        side="left"
        end={true}
        name="Pedro Victor Bacic"
        info="Uma gostosa que vai pro Japão e não precisava mais ter que aturar a gente ou esse professor, mas ela ainda tenta. Sei lá, vai entender."
      />
    </div>
  );
};

export default AboutPage;
