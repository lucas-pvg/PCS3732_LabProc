import React from "react";
import { useState, useEffect } from "react";

import Navbar from "../../components/navbar/navbar";
import AboutInstructions from "../../components/aboutinst/aboutInstructions";
import Button from "../../components/button/button";
import Scrollable from "../../components/scrollinfo/scrollable";
import Dropdown from "../../components/dropdown/dropdown";

import "./otherInstructionsInfoPage.css";

const OtherInstructionsInfoPage = () => {
    const operation = [
        { value: "AND", label: "AND" },
        { value: "EOR", label: "EOR" },
        { value: "ORR", label: "ORR" },
        { value: "BIC", label: "BIC" },
        { value: "MOV", label: "MOV" },
        { value: "MVN", label: "MVN" },
        { value: "CLZ", label: "CLZ" },
        { value: "CMP", label: "CMP" },
        { value: "CMN", label: "CMN" },
    ];

    const [selectedOperation, setSelectedOperation] = useState("AND");
    const [aboutSelectedInstruction, setAboutSelectedInstruction] = useState();

    const changeAboutText = (op) => {
        switch (op.value) {
            case "AND":
                setAboutSelectedInstruction("and");
                break;
            case "EOR":
                setAboutSelectedInstruction("eor");
                break;
            case "ORR":
                setAboutSelectedInstruction("orr");
                break;
            case "BIC":
                setAboutSelectedInstruction("bic");
                break;
            case "MOV":
                setAboutSelectedInstruction("mov");
                break;
            case "MVN":
                setAboutSelectedInstruction("mvn");
                break;
            case "CLZ":
                setAboutSelectedInstruction("clz");
                break;
            case "CMP":
                setAboutSelectedInstruction("cmp");
                break;
            case "CMN":
                setAboutSelectedInstruction("cmn");
                break;
            default:
                setAboutSelectedInstruction("");
        }
    };

    const handleOperation = (data) => {
        setSelectedOperation(data);
    };

    useEffect(() => {
        changeAboutText(selectedOperation);
    }, [selectedOperation, aboutSelectedInstruction]);

    return (
        <div>
            <Navbar />
            <div className="other-instructions">
                <div className="infos-oiip">
                    <div className="left-div-oiip">
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
                    <div className="right-div-oiip">
                        <Scrollable text={aboutSelectedInstruction} />
                        <Dropdown
                            options={operation}
                            handleSelectedOptions={handleOperation}
                            selectedOption={selectedOperation}
                            placeholder="Selecione a instrução"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherInstructionsInfoPage;
