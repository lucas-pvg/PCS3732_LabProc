import React from "react";
import { useState } from "react";

import Dropdown from "../../components/dropdown/dropdown";
import Switch from "../../components/switch/switch";
import Navbar from "../../components/navbar/navbar";

import "./arithmeticsPage.css";

const ArithmeticsPage = () => {
    const operation = [
        { value: "ADD", label: "ADD" },
        { value: "SUB", label: "SUB" },
        { value: "RSB", label: "RSB" },
        { value: "MUL", label: "MUL" },
        { value: "MLA", label: "MLA" },
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

    return (
        <div>
            <Navbar />
            <div className="arithmeticsPage">
                <h1 className="instrucTitle">Instruções Aritméticas</h1>
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
                    />
                    <Dropdown
                        className="dropdown"
                        options={register}
                        placeholder="Destino"
                    />
                    <Dropdown
                        className="dropdown"
                        options={register}
                        placeholder="Primeiro Operando"
                    />
                    <Dropdown
                        className="dropdown"
                        options={register}
                        placeholder="Segundo Operando"
                    />
                </div>
            </div>
        </div>
    );
};

export default ArithmeticsPage;
