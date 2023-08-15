import React from "react";
import { useState } from "react";

import Dropdown from "../../components/dropdown/dropdown";
import Switch from "../../components/switch/switch";
import Navbar from "../../components/navbar/navbar";
import ButtonGo from "../../components/buttongo/buttonGo";
import TextInput from "../../components/textinput/textInput";
import Service from "../../services/service";

import "./otherInstructionsPage.css";

const OtherInstructionsPage = () => {
    const operationLogic = [
        { value: "AND", label: "AND" },
        { value: "EOR", label: "EOR" },
        { value: "ORR", label: "ORR" },
        { value: "BIC", label: "BIC" },
    ];

    const operationOther = [
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

    const [isToggledLogic, setisToggledLogic] = useState(false);
    const [isToggleImediate, setIsToggledImediate] = useState(false);
    const [selectedOperation, setSelectedOperation] = useState();
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
    };

    var data = {};

    const onSend = () => {
        isToggledLogic &&
            !isToggleImediate &&
            (data = {
                operation: selectedOperation,
                registerDestination: {
                    label: selectedDestination,
                    value: 0,
                },
                firstOperand: {
                    label: selectedOperand1,
                    value: 0,
                },
                secondOperand: {
                    label: selectedOperand2,
                    value: 0,
                },
            })(isToggledLogic && isToggleImediate) &&
            (data = {
                operation: selectedOperation,
                registerDestination: {
                    label: selectedDestination,
                    value: 0,
                },
                firstOperand: {
                    label: selectedOperand1,
                    value: 0,
                },
                secondOperand: {
                    value: selectedInput,
                },
            })(!isToggledLogic && !isToggleImediate) &&
            (data = {
                operation: selectedOperation,
                registerDestination: {
                    label: selectedDestination,
                    value: 0,
                },
                firstOperand: {
                    label: selectedOperand1,
                    value: 0,
                },
            })(!isToggledLogic && !isToggleImediate) &&
            (data = {
                operation: selectedOperation,
                registerDestination: {
                    label: selectedDestination,
                    value: 0,
                },
                firstOperand: {
                    value: selectedInput,
                },
            });

        Service.postOperation(data);
    };

    return (
        <div>
            <Navbar />
            <div className="otherInstruc">
                <h1 className="title-oip">Demais Instruções</h1>
                <div className="switches-oip">
                    <div className="switch-oip">
                        <p className="switch-label-oip">Instrução Lógica</p>
                        <Switch
                            isToggled={isToggledLogic}
                            onToggle={() => setisToggledLogic(!isToggledLogic)}
                        />
                    </div>
                    <div className="switch-oip">
                        <p className="switch-label-oip">Imediato</p>
                        <Switch
                            isToggled={isToggleImediate}
                            onToggle={() =>
                                setIsToggledImediate(!isToggleImediate)
                            }
                        />
                    </div>
                </div>

                <div className="dropdown-row-oip">
                    {isToggledLogic && (
                        <Dropdown
                            className="dropdown-oip"
                            options={operationLogic}
                            placeholder="Operação"
                            handleSelectedOptions={handleSelectedOperation}
                            selectedOption={selectedOperation}
                        />
                    )}
                    {!isToggledLogic && (
                        <Dropdown
                            className="dropdown-oip"
                            options={operationOther}
                            placeholder="Operação"
                            handleSelectedOptions={handleSelectedOperation}
                            selectedOption={selectedOperation}
                        />
                    )}
                    <Dropdown
                        className="dropdown-oip"
                        options={register}
                        placeholder="Destino"
                        handleSelectedOptions={handleSelectedDestination}
                        selectedOption={selectedDestination}
                    />
                    {isToggledLogic && !isToggleImediate && (
                        <div className="flex-oip">
                            <Dropdown
                                className="dropdown-oip"
                                options={register}
                                placeholder="Primeiro Operando"
                                handleSelectedOptions={handleSelectedOperand1}
                                selectedOption={selectedOperand1}
                            />
                            <Dropdown
                                className="dropdown-oip"
                                options={register}
                                placeholder="Segundo Operando"
                                handleSelectedOptions={handleSelectedOperand2}
                                selectedOption={selectedOperand2}
                            />
                        </div>
                    )}
                    {isToggledLogic && isToggleImediate && (
                        <div className="flex-oip">
                            <Dropdown
                                className="dropdown-oip"
                                options={register}
                                placeholder="Primeiro Operando"
                                handleSelectedOptions={handleSelectedOperand1}
                                selectedOption={selectedOperand1}
                            />
                            <TextInput
                                placeholder="Imediato (0b binario, 0x hexa)"
                                handleTextInput={handleTextInput}
                            />
                        </div>
                    )}
                    {!isToggledLogic && !isToggleImediate && (
                        <div className="flex-oip">
                            <Dropdown
                                className="dropdown-oip"
                                options={register}
                                placeholder="Primeiro Operando"
                                handleSelectedOptions={handleSelectedOperand1}
                                selectedOption={selectedOperand1}
                            />
                        </div>
                    )}
                    {!isToggledLogic && isToggleImediate && (
                        <div className="flex-oip">
                            <TextInput
                                placeholder="Imediato (0b binario, 0x hexa)"
                                handleTextInput={handleTextInput}
                            />
                        </div>
                    )}
                    <ButtonGo handleSend={onSend} />
                </div>
            </div>
        </div>
    );
};

export default OtherInstructionsPage;
