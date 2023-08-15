import React from "react";
import "./aboutIntro.css";

function AboutIntro() {
    return (
        <div className="about-intro">
            <div className="text">
                <h1 className="title">Quem somos nós?</h1>
                <p className="description">Apenas mais um dos 20 grupos que estão fazendo esse projeto obrigados e de última hora. Tipo sério que tem que escrever redação do Enem pra justificar a nota? Alguém para esse professor, gente, tá ficando ridículo já. Não queria que todo mundo se desse 10 era só não obrigar a gente a dar nota, eu hein. Enfim, uma merda de trabalho para uma merda de matéria dada por um merda de professor, é isso que vocês vão receber :3</p>
            </div>
            
            <img className="group-img" src={require("../../../images/aboutus.jpeg")} />
      </div>
    );
}

export default AboutIntro;
