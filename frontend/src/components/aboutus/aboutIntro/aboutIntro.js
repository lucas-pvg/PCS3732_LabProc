import React from "react";
import "./aboutIntro.css";

function AboutIntro() {
    return (
        <div className="about-intro">
            <div className="text">
                <h1 className="title">Quem somos nós?</h1>
                <p className="description">Apresentamos Luquinhas, Pedrinho, Bacic e Sophs, um grupo de amigos no 4º ano de Engenharia de Computação da Poli-USP. Juntos, embarcam neste projeto de PCS3732 - Laboratório de Processadores, unindo paixão por tecnologia e inovação. Combinando conhecimentos e entusiasmo, enfrentam desafios e transformam conceitos em realidade digital, destacando a essência da engenharia de computação em ação.</p>
            </div>
            
            <img className="group-img" src={require("../../../images/aboutus.jpeg")} />
      </div>
    );
}

export default AboutIntro;
