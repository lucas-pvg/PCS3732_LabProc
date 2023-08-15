import React from "react";
import { useState } from "react";

import Dropdown from "../../components/dropdown/dropdown";
import Switch from "../../components/switch/switch";
import Navbar from "../../components/navbar/navbar";
import ButtonGo from "../../components/buttongo/buttonGo";
import Service from "../../services/service";
import TextInput from "../../components/textinput/textInput";
import AboutInstructions from "../../components/aboutinst/aboutInstructions";

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
    const [selectedOperation, setSelectedOperation] = useState("");
    const [selectedDestination, setSelectedDestination] = useState();
    const [selectedOperand1, setSelectedOperand1] = useState();
    const [selectedOperand2, setSelectedOperand2] = useState();
    const [selectedInput, setSelectedInput] = useState();

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

    const handleTextInput = (event) => {
        setSelectedInput(event.target.value);
        console.log(selectedInput);
    };

    var data = {};

    const onSend = () => {
        !isToggled
            ? (data = {
                  operation: selectedOperation.label,
                  registerDestination: {
                      label: selectedDestination.label,
                  },
                  firstOperand: {
                      label: selectedOperand1.label,
                      value: 0,
                  },
                  secondOperand: {
                      label: selectedOperand2.label,
                      value: 0,
                  },
              })
            : (data = {
                  operation: selectedOperation.label,
                  registerDestination: {
                      label: selectedDestination.label,
                      value: 0,
                  },
                  firstOperand: {
                      label: selectedOperand1.label,
                      value: 0,
                  },
                  secondOperand: {
                      value: selectedInput,
                  },
              });

        Service.postOperation(data).then(response => console.log(response));
    };

    return (
        <div>
            <Navbar />
            <div className="arithmeticsPage">
                <h1 className="instrucTitle-ap">Instruções Aritméticas</h1>
                <div className="imediate-switch-ap">
                    <p className="switch-label-ap">Imediato</p>
                    <Switch
                        isToggled={isToggled}
                        onToggle={() => setIsToggled(!isToggled)}
                    />
                </div>
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
                    {!isToggled && (
                        <Dropdown
                            className="dropdown-ap"
                            options={register}
                            placeholder="Segundo Operando"
                            handleSelectedOptions={handleSelectedOperand2}
                            selectedOption={selectedOperand2}
                        />
                    )}
                    {isToggled && (
                        <TextInput
                            placeholder="Imediato (0b binario, 0x hexa)"
                            handleTextInput={handleTextInput}
                        />
                    )}
                    <ButtonGo handleSend={onSend} />
                </div>
                <div>
                    <div className="left-div-ap">
                        {selectedOperation.value === "" && (
                            <AboutInstructions
                                title="Informações sobre a instrução acima"
                                info=""
                            />
                        )}
                        {selectedOperation.value === "ADD" && (
                            <AboutInstructions
                                title="Informações sobre a instrução acima"
                                info="Isso aqui é ADD"
                            />
                        )}
                        {selectedOperation.value === "SUB" && (
                            <AboutInstructions
                                title="Informações sobre a instrução acima"
                                info="Isso aqui é SUB"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArithmeticsPage;
