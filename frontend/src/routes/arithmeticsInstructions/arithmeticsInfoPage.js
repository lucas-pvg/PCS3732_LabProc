import React from "react";
import { useState, useEffect } from "react";

import Button from "../../components/button/button";
import Navbar from "../../components/navbar/navbar";
import AboutInstructions from "../../components/aboutinst/aboutInstructions";
import Scrollable from "../../components/scrollinfo/scrollable";
import Dropdown from "../../components/dropdown/dropdown";

import "./arithmeticsInfoPage.css";

const ArithmeticsInfoPage = () => {
    const operation = [
        { value: "ADD", label: "ADD" },
        { value: "SUB", label: "SUB" },
        { value: "RSB", label: "RSB" },
        { value: "MUL", label: "MUL" },
        { value: "MLA", label: "MLA" },
    ];

    const [selectedOperation, setSelectedOperation] = useState("ADD");
    const [aboutSelectedInstruction, setAboutSelectedInstruction] = useState();

    const changeAboutText = (op) => {
        switch (op.value) {
            case "ADD":
                setAboutSelectedInstruction("add");
                break
            case "SUB":
                setAboutSelectedInstruction("sub");
                break
            case "RSB":
                setAboutSelectedInstruction("rsb");
                break
            case "MUL":
                setAboutSelectedInstruction("mul");
                break
            case "MLA":
                setAboutSelectedInstruction("mla");
                break
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
            <div className="arithmetics-info">
                <div className="infos-aip">
                    <div className="left-div-aip">
                        <AboutInstructions
                            title="Instruções Aritméticas"
                            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Vestibulum mi felis, egestas ut orci vel, maximus sagittis elit. Vivamus lacus ante, egestas condimentum maximus nec, maximus at leo."
                        />
                        <Button to="/arithmetics" text="Emulador" />
                    </div>
                    <div className="right-div-aip">
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

export default ArithmeticsInfoPage;
