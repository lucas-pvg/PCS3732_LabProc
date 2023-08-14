import React from "react";

import Navbar from "../../components/navbar/navbar";
import AboutInstructions from "../../components/aboutinst/aboutInstructions";
import Button from "../../components/button/button";

import "./otherInstructionsInfoPage.css";

const OtherInstructionsInfoPage = () => {
    return (
        <div>
            <Navbar />
            <div className="other-instructions">
                <div className="infos">
                    <div className="left-div">
                        <AboutInstructions
                            title="Outras instruções: lógicas e outros operandos"
                            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Vestibulum mi felis, egestas ut orci vel, maximus sagittis elit. Vivamus lacus ante, egestas condimentum maximus nec, maximus at leo."
                        />
                        <Button
                            className="button"
                            to="/other-instructions"
                            text="Emulador"
                        />
                    </div>
                    <div className="right-div"></div>
                </div>
            </div>
        </div>
    );
};

export default OtherInstructionsInfoPage;
