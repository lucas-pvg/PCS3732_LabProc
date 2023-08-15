import React from "react";
import { useState, useEffect } from "react";

import Navbar from "../../components/navbar/navbar";
import Button from "../../components/button/button";
import AboutInstructions from "../../components/aboutinst/aboutInstructions";
import Dropdown from "../../components/dropdown/dropdown";
import Scrollable from "../../components/scrollinfo/scrollable";

import "./branchInfoPage.css";

const BranchInfoPage = () => {
    const operation = [
        { value: "B", label: "B" },
        { value: "BL", label: "BL" },
        { value: "BX", label: "BX" },
        { value: "BLX", label: "BLX" },
    ];

    const [selectedOperation, setSelectedOperation] = useState("B");
    const [aboutSelectedInstruction, setAboutSelectedInstruction] = useState();

    const changeAboutText = (op) => {
        switch (op.value) {
            case "B":
                setAboutSelectedInstruction("b");
                break;
            case "BL":
                setAboutSelectedInstruction("bl");
                break;
            case "BX":
                setAboutSelectedInstruction("bx");
                break;
            case "BLX":
                setAboutSelectedInstruction("blx");
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
            <div className="branchInfoPage">
                <div className="infos-bip">
                    <div className="left-div-bip">
                        <AboutInstructions
                            title="Instruções de Desvio"
                            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Vestibulum mi felis, egestas ut orci vel, maximus sagittis elit. Vivamus lacus ante, egestas condimentum maximus nec, maximus at leo."
                        />
                        <Button
                            className="button"
                            to="/branch"
                            text="Emulador"
                        />
                    </div>
                    <div className="right-div-bip">
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

export default BranchInfoPage;
