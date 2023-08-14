import React from "react";
import { useState } from "react";

import Dropdown from "../../components/dropdown/dropdown";
import Switch from "../../components/switch/switch";
import Navbar from "../../components/navbar/navbar";

import "./otherInstructionsPage.css";

const OtherInstructionsPage = () => {

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

    const register = [
        { value: "R0", label: "R0" },
        { value: "R1", label: "R1" },
        { value: "R2", label: "R2" },
        { value: "R3", label: "R3" },
        { value: "R4", label: "R4" },
        { value: "R5", label: "R5" },
        { value: "R6", label: "R6" },
        { value: "R7", label: "R7" },
        { value: "R8", label: "R8" },
        { value: "R9", label: "R9" },
        { value: "R10", label: "R10" },
        { value: "R11", label: "R11" },
        { value: "R12", label: "R12" },
        { value: "R13", label: "R13" },
        { value: "R14", label: "R14" },
        { value: "R15", label: "R15" },
        { value: "CPSR", label: "CPSR" },
    ];

    const [isToggled, setIsToggled] = useState(false);
    const [selectedOperation, setSelectedOperation] = useState();
    const [selectedDestination, setSelectedDestination] = useState();
    const [selectedOperand1, setSelectedOperand1] = useState();
    const [selectedOperand2, setSelectedOperand2] = useState();

    const handleSelectedOperation = (data) => {
        setSelectedOperation(data);
    };

    const handleSelectedDestination = (data) => {
        setSelectedDestination(data);
    };

    const handleSelectedOperand1 = (data) => {
        setSelectedOperand1(data);
    };

    const handleSelectedOperand2 = (data) => {
        setSelectedOperand2(data);
    };

    return (
        <div>
            <Navbar />
            <div className="otherInstruc">
                <h1>Demais Instruções</h1>
                <Switch
                    className="switch"
                    isToggled={isToggled}
                    onToggle={() => setIsToggled(!isToggled)}
                />
                <div className="dropdown-row">
                    <Dropdown
                        className="dropdown"
                        options={operation}
                        placeholder="Operação"
                        handleSelectedOptions={handleSelectedOperation}
                        selectedOption={selectedOperation}
                    />
                    <Dropdown
                        className="dropdown"
                        options={register}
                        placeholder="Destino"
                        handleSelectedOptions={handleSelectedDestination}
                        selectedOption={selectedDestination}
                    />
                    <Dropdown
                        className="dropdown"
                        options={register}
                        placeholder="Primeiro Operando"
                        handleSelectedOptions={handleSelectedOperand1}
                        selectedOption={selectedOperand1}
                    />
                    <Dropdown
                        className="dropdown"
                        options={register}
                        placeholder="Segundo Operando"
                        handleSelectedOptions={handleSelectedOperand2}
                        selectedOption={selectedOperand2}
                    />
                </div>
            </div>
        </div>
    );
};

export default OtherInstructionsPage;
