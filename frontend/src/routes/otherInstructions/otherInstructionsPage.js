import React from "react";

import Dropdown from "../../components/dropdown/dropdown";
import Navbar from "../../components/navbar/navbar";

import "./otherInstructionsPage.css"

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

    return (
        <div>
            <Navbar />
            <h1>Demais Instruções</h1>
            <Dropdown props={operation} placeholder={"Operação"} />
            <Dropdown props={register} placeholder={"Destino"} />
            <Dropdown props={register} placeholder={"Primeiro Operando"} />
            <Dropdown props={register} placeholder={"Segundo Operando"} />
        </div>
    );
};

export default OtherInstructionsPage;
