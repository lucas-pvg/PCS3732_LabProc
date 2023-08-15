import React from "react";
import { useState } from "react";

import Dropdown from "../../components/dropdown/dropdown";
import Switch from "../../components/switch/switch";
import Navbar from "../../components/navbar/navbar";
import ButtonGo from "../../components/buttongo/buttonGo";
import TextInput from "../../components/textinput/textInput";
import Service from "../../services/service";
import AboutInstructions from "../../components/aboutinst/aboutInstructions";
import Registers from "../../components/registers/registers";

import "./otherInstructionsPage.css";

const OtherInstructionsPage = () => {
    const operationLogic = [
        { value: "AND", label: "AND" },
        { value: "EOR", label: "EOR" },
        { value: "ORR", label: "ORR" },
    ];

    const operationOther = [
        { value: "BIC", label: "BIC" },
        { value: "MOV", label: "MOV" },
        { value: "MVN", label: "MVN" },
        { value: "CLZ", label: "CLZ" },
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
    const [disableToggleImediate, setDisableToggleImediate] = useState(false)
    const [selectedOperation, setSelectedOperation] = useState("");
    const [selectedDestination, setSelectedDestination] = useState("");
    const [selectedOperand1, setSelectedOperand1] = useState("");
    const [selectedOperand2, setSelectedOperand2] = useState("");
    const [selectedInput, setSelectedInput] = useState("");

    const [inputR0, setInputR0] = useState();
    const [inputR1, setInputR1] = useState();
    const [inputR2, setInputR2] = useState();
    const [inputR3, setInputR3] = useState();
    const [inputR4, setInputR4] = useState();
    const [inputR5, setInputR5] = useState();
    const [inputR6, setInputR6] = useState();
    const [inputR7, setInputR7] = useState();
    const [inputR8, setInputR8] = useState();
    const [inputR9, setInputR9] = useState();
    const [inputR10, setInputR10] = useState();
    const [inputR11, setInputR11] = useState();
    const [inputR12, setInputR12] = useState();
    const [inputR13, setInputR13] = useState();
    const [inputR14, setInputR14] = useState();
    const [inputR15, setInputR15] = useState();
    const [inputCPSR, setInputCPSR] = useState();

    const handleSelectedOperation = (data) => {
        setSelectedOperation(data);
        if(data.label == "CLZ"){
            setIsToggledImediate(false);
            setDisableToggleImediate(true);
        }
        else {
            setDisableToggleImediate(false);
        }
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

    const handleR0 = (event) => {
        setInputR0(event.target.value);
    };

    const handleR1 = (event) => {
        setInputR1(event.target.value);
    };

    const handleR2 = (event) => {
        setInputR2(event.target.value);
    };

    const handleR3 = (event) => {
        setInputR3(event.target.value);
    };

    const handleR4 = (event) => {
        setInputR4(event.target.value);
    };

    const handleR5 = (event) => {
        setInputR5(event.target.value);
    };

    const handleR6 = (event) => {
        setInputR6(event.target.value);
    };

    const handleR7 = (event) => {
        setInputR7(event.target.value);
    };

    const handleR8 = (event) => {
        setInputR8(event.target.value);
    };

    const handleR9 = (event) => {
        setInputR9(event.target.value);
    };

    const handleR10 = (event) => {
        setInputR10(event.target.value);
    };

    const handleR11 = (event) => {
        setInputR11(event.target.value);
    };

    const handleR12 = (event) => {
        setInputR12(event.target.value);
    };

    const handleR13 = (event) => {
        setInputR13(event.target.value);
    };

    const handleR14 = (event) => {
        setInputR14(event.target.value);
    };

    const handleR15 = (event) => {
        setInputR15(event.target.value);
    };

    const handleCPSR = (event) => {
        setInputCPSR(event.target.value);
    };

    var data = {};
    var reg = [];

    const onSend = () => {
        if(isToggledLogic && !isToggleImediate){
            data = {
                operation: selectedOperation.label,
                registerDestination: {
                    label: selectedDestination.label
                },
                firstOperand: {
                    label: selectedOperand1.label
                },
                secondOperand: {
                    label: selectedOperand2.label
                },
            };
        };
        
        if(isToggledLogic && isToggleImediate){
            data = {
                operation: selectedOperation.label,
                registerDestination: {
                    label: selectedDestination.label
                },
                firstOperand: {
                    label: selectedOperand1.label
                },
                secondOperand: {
                    value: selectedInput,
                },
            };
        };

        if(!isToggledLogic && !isToggleImediate){
            data = {
                operation: selectedOperation.label,
                registerDestination: {
                    label: selectedDestination.label
                },
                firstOperand: {
                    label: selectedOperand1.label
                },
            };
        };

        if(!isToggledLogic && isToggleImediate){
            data = {
                operation: selectedOperation.label,
                registerDestination: {
                    label: selectedDestination.label
                },
                firstOperand: {
                    value: selectedInput,
                },
            };
        };

        reg = [
            {
                label: "R0",
                value: inputR0 | 0
            },
            {
                label: "R1",
                value: inputR1 | 0
            },
            {
                label: "R2",
                value: inputR2 | 0
            },
            {
                label: "R3",
                value: inputR3 | 0
            },
            {
                label: "R4",
                value: inputR4 | 0
            },
            {
                label: "R5",
                value: inputR5 | 0
            },
            {
                label: "R6",
                value: inputR6 | 0
            },
            {
                label: "R7",
                value: inputR7 | 0
            },
            {
                label: "R8",
                value: inputR8 | 0
            },
            {
                label: "R9",
                value: inputR9 | 0
            },
            {
                label: "R10",
                value: inputR10 | 0
            },
            {
                label: "R11",
                value: inputR11 | 0
            },
            {
                label: "R12",
                value: inputR12 | 0
            },
            {
                label: "R13",
                value: inputR13 | 0
            },
            {
                label: "R14",
                value: inputR14 | 0
            },
            {
                label: "R15",
                value: inputR15 | 0
            },
            {
                label: "CPSR",
                value: inputCPSR | 0
            },
        ];

        Service.updateAllRegisters(reg).then((response) => console.log(response));
        Service.postOperation(data).then((response) => {
                Service.getRegisterList()
                    .then((response) => {
                        setInputR0(response[0].value);
                        setInputR1(response[1].value);
                        setInputR2(response[2].value);
                        setInputR3(response[3].value);
                        setInputR4(response[4].value);
                        setInputR5(response[5].value);
                        setInputR6(response[6].value);
                        setInputR7(response[7].value);
                        setInputR8(response[8].value);
                        setInputR9(response[9].value);
                        setInputR10(response[10].value);
                        setInputR11(response[11].value);
                        setInputR12(response[12].value);
                        setInputR13(response[13].value);
                        setInputR14(response[14].value);
                        setInputR15(response[15].value);
                        setInputCPSR(response[16].value);
                    })
        });
    };

    return (
        <div>
            <Navbar />
            <div className="otherInstruc">
                <h1 className="title-oip">Demais Instruções</h1>
                <div className="switches-oip">
                    <div className="switch-oip">
                        <p className="switch-label-oip">
                            Instrução Lógica (4 operandos)
                        </p>
                        <Switch
                            isToggled={isToggledLogic}
                            onToggle={() => setisToggledLogic(!isToggledLogic)}
                            disabled={false}
                        />
                    </div>
                    <div className="switch-oip">
                        <p className="switch-label-oip">Imediato</p>
                        <Switch
                            isToggled={isToggleImediate}
                            onToggle={() =>
                                setIsToggledImediate(!isToggleImediate)
                            }
                            disabled={disableToggleImediate}
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
                <div>
                    <div className="left-div-oip">
                        {selectedOperation.value === "" && (
                            <AboutInstructions
                                title="Informações sobre a instrução acima"
                                info="Selecione a instrução"
                            />
                        )}
                        {selectedOperation.value === "AND" &&
                            (!isToggleImediate ? (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução AND selecionada acima, são comparados os valores armazenados nos registradores " +
                                        selectedOperand1.value +
                                        " e " +
                                        selectedOperand2.value +
                                        " pela operação lógica AND, comparando se ambos os valores são iguais e tendo como resultado 1 apenas quando a condição for satisfeita, e armazenando o resultado em: " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ) : (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução AND selecionada acima, são comparados os valores armazenados no registrador " +
                                        selectedOperand1.value +
                                        " e no imediato " +
                                        selectedInput +
                                        " pela operação lógica AND, comparando se ambos os valores são iguais e tendo como resultado 1 apenas quando a condição for satisfeita, e armazenando o resultado em: " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ))}
                        {selectedOperation.value === "EOR" &&
                            (!isToggleImediate ? (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução exclusive or (EOR) selecionada acima, são comparados os valores armazenados nos registradores " +
                                        selectedOperand1.value +
                                        " e " +
                                        selectedOperand2.value +
                                        " pela operação lógica EOR (operação análoga a XOR), retornando 1 caso apenas um dos registradores tenha 1 como valor armazenado, e armazenando o resultado em: " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ) : (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução exclusive or (EOR) selecionada acima, são comparados os valores armazenados no registrador " +
                                        selectedOperand1.value +
                                        " e no imediato " +
                                        selectedInput +
                                        " pela operação lógica EOR (operação análoga a XOR), retornando 1 caso apenas o registrador ou o imeditado tenham 1 como valor armazenado, e armazenando o resultado em: " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ))}
                        {selectedOperation.value === "ORR" &&
                            (!isToggleImediate ? (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução OR selecionada acima, são comparados os valores armazenados nos registradores " +
                                        selectedOperand1.value +
                                        " e " +
                                        selectedOperand2.value +
                                        " pela operação lógica OR, retornando 1 caso um dos registradores tenha 1 como valor, e armazenando o resultado em: " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ) : (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução OR selecionada acima, são comparados os valores armazenados no registrador " +
                                        selectedOperand1.value +
                                        " e no imediato " +
                                        selectedInput +
                                        " pela operação lógica OR, retornando 1 caso um dos registradores tenha 1 como valor, e armazenando o resultado em: " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ))}
                        {selectedOperation.value === "BIC" &&
                            (!isToggleImediate ? (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução bit clear (BIC) selecionada acima, são comparados os valores armazenados nos registradores " +
                                        selectedOperand1.value +
                                        " e " +
                                        selectedOperand2.value +
                                        " pela operação lógica BIC, zerando os números 1s armazenados no primeiro registrador a partir do número binário armazenado no segundo registrador, e armazenando o resultado em: " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ) : (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução bit clear (BIC) selecionada acima, são comparados os valores armazenados no registrador " +
                                        selectedOperand1.value +
                                        " e no imediato " +
                                        selectedInput +
                                        " pela operação lógica BIC, zerando os números 1s armazenados no primeiro registrador a partir do número binário armazenado no imediato, e armazenando o resultado em: " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ))}
                        {selectedOperation.value === "MOV" &&
                            (!isToggleImediate ? (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução move (MOV) selecionada acima, são utilizados os valores armazenados nos registradores " +
                                        selectedDestination.value +
                                        " e, " +
                                        selectedOperand1.value +
                                        " pela operação lógica MOV, o valor no segundo operando é armazenado no primeiro operando " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ) : (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução move (MOV) selecionada acima, são utilizados os valores armazenados nos registradores " +
                                        selectedDestination.value +
                                        " e, " +
                                        selectedInput +
                                        " pela operação lógica MOV, o valor no imediato é armazenado no primeiro operando " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ))}
                        {selectedOperation.value === "MVN" &&
                            (!isToggleImediate ? (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução move not (MVN) selecionada acima, são utilizados os valores armazenados nos registradores " +
                                        selectedDestination.value +
                                        " e, " +
                                        selectedOperand1.value +
                                        ". Pela operação lógica MVN, o valor no segundo operando é armazenado no primeiro operando após realizar o NOT no valor registrado, armazenando em: " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ) : (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução move not (MVN) selecionada acima, são utilizados os valores armazenados nos registradores " +
                                        selectedDestination.value +
                                        " e, " +
                                        selectedInput +
                                        ". Pela operação lógica MVN, o valor do imediato é armazenado no primeiro operando após realizar o NOT no valor imediato, armazenando em: " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ))}
                        {selectedOperation.value === "CLZ" &&
                            (!isToggleImediate ? (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução count left zeros (CLZ) selecionada acima, são utilizados os valores armazenados nos registradores " +
                                        selectedDestination.value +
                                        " e, " +
                                        selectedOperand1.value +
                                        ". Pela operação lógica CLZ, são contados os números de zeros à esquerda do segundo registrador, armazenando em: " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ) : (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução count left zeros (CLZ) selecionada acima, são utilizados os valores armazenados nos registradores " +
                                        selectedDestination.value +
                                        " e, " +
                                        selectedInput +
                                        ". Pela operação lógica CLZ, são contados os números de zeros à esquerda do imediato, armazenando em: " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ))}
                    </div>
                    <div className="right-div-oip">
                        <Registers
                            handleR0={handleR0}
                            handleR1={handleR1}
                            handleR2={handleR2}
                            handleR3={handleR3}
                            handleR4={handleR4}
                            handleR5={handleR5}
                            handleR6={handleR6}
                            handleR7={handleR7}
                            handleR8={handleR8}
                            handleR9={handleR9}
                            handleR10={handleR10}
                            handleR11={handleR11}
                            handleR12={handleR12}
                            handleR13={handleR13}
                            handleR14={handleR14}
                            handleR15={handleR15}
                            handleCPSR={handleCPSR}
                            valueR0={inputR0}
                            valueR1={inputR1}
                            valueR2={inputR2}
                            valueR3={inputR3}
                            valueR4={inputR4}
                            valueR5={inputR5}
                            valueR6={inputR6}
                            valueR7={inputR7}
                            valueR8={inputR8}
                            valueR9={inputR9}
                            valueR10={inputR10}
                            valueR11={inputR11}
                            valueR12={inputR12}
                            valueR13={inputR13}
                            valueR14={inputR14}
                            valueR15={inputR15}
                            valueCPSR={inputCPSR}
                            disabled={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherInstructionsPage;
