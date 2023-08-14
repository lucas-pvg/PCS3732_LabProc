import React from "react";
import { useState } from "react";

import Dropdown from "../../components/dropdown/dropdown";
import Switch from "../../components/switch/switch";
import Navbar from "../../components/navbar/navbar";
import ButtonGo from "../../components/buttongo/buttonGo";
import Service from "../../services/service";

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
    const [selectedOperation, setSelectedOperation] = useState();
    const [selectedDestination, setSelectedDestination] = useState();
    const [selectedOperand1, setSelectedOperand1] = useState();
    const [selectedOperand2, setSelectedOperand2] = useState();

    var data = {
        operation: selectedOperation,
        registerDestination: {
            label: selectedDestination,
            value: 0, 
        },
        firstOperand: {
            label: selectedOperand1,
            value: 0
        },
        secondOperand: {
            label: selectedOperand2,
            value: 0,
        }
    }

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

    const onSend = () => {
        Service.postOperation(data)
    }

    return (
        <div>
            <Navbar />
            <div className="arithmeticsPage">
                <h1 className="instrucTitle-ap">Instruções Aritméticas</h1>
                <Switch
                    className="switch-ap"
                    isToggled={isToggled}
                    onToggle={() => setIsToggled(!isToggled)}
                />
                <div className="dropdown-row-ap">
                    <Dropdown
                        className="dropdown-ap"
                        options={operation}
                        placeholder="Operação"
                        handleSelectedOptions={handleSelectedOperation}
                        selectedOption={selectedOperation}
                    />
                    <Dropdown
                        className="dropdown-ap"
                        options={register}
                        placeholder="Destino"
                        handleSelectedOptions={handleSelectedDestination}
                        selectedOption={selectedDestination}
                    />
                    <Dropdown
                        className="dropdown-ap"
                        options={register}
                        placeholder="Primeiro Operando"
                        handleSelectedOptions={handleSelectedOperand1}
                        selectedOption={selectedOperand1}
                    />
                    <Dropdown
                        className="dropdown-ap"
                        options={register}
                        placeholder="Segundo Operando"
                        handleSelectedOptions={handleSelectedOperand2}
                        selectedOption={selectedOperand2}
                    />
                    <ButtonGo handleSend={onSend}/>
                </div>
            </div>
        </div>
    );
};

export default ArithmeticsPage;
