import React from "react";
import { useState } from "react";

import Dropdown from "../../components/dropdown/dropdown";
import Switch from "../../components/switch/switch";
import Navbar from "../../components/navbar/navbar";
import ButtonGo from "../../components/buttongo/buttonGo";
import Service from "../../services/service";
import TextInput from "../../components/textinput/textInput";
import AboutInstructions from "../../components/aboutinst/aboutInstructions";
import Registers from "../../components/registers/registers";

import "./arithmeticsPage.css";

const ArithmeticsPage = () => {
    const operation = [
        { value: "ADD", label: "ADD" },
        { value: "SUB", label: "SUB" },
        { value: "RSB", label: "RSB" },
        { value: "MUL", label: "MUL" },
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

        reg = [
            {
                label: "R0",
                value: inputR0,
            },
            {
                label: "R1",
                value: inputR1,
            },
            {
                label: "R2",
                value: inputR2,
            },
            {
                label: "R3",
                value: inputR3,
            },
            {
                label: "R4",
                value: inputR4,
            },
            {
                label: "R5",
                value: inputR5,
            },
            {
                label: "R6",
                value: inputR6,
            },
            {
                label: "R7",
                value: inputR7,
            },
            {
                label: "R8",
                value: inputR8,
            },
            {
                label: "R9",
                value: inputR9,
            },
            {
                label: "R10",
                value: inputR10,
            },
            {
                label: "R11",
                value: inputR11,
            },
            {
                label: "R12",
                value: inputR12,
            },
            {
                label: "R13",
                value: inputR13,
            },
            {
                label: "R14",
                value: inputR14,
            },
            {
                label: "R15",
                value: inputR15,
            },
            {
                label: "CPSR",
                value: inputCPSR,
            },
        ];

        Service.updateAllRegisters(reg).then((response) =>
            console.log(response)
        );
        Service.postOperation(data).then((response) => console.log(response));
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
                        disabled={false}
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
                                info="Selecione a instrução"
                            />
                        )}
                        {selectedOperation.value === "ADD" &&
                            (!isToggled ? (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução de adição (ADD) selecionada, a ALU pega os valores armazenados nos registradores " +
                                        selectedOperand1.value +
                                        " e " +
                                        selectedOperand2.value +
                                        ", soma os seus valores e armazena em " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ) : (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução de adição (ADD) selecionada, a ALU pega os valores armazenados no registrador " +
                                        selectedOperand1.value +
                                        " e no imediato " +
                                        selectedInput +
                                        ", somando os seus valores e armazenando em " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ))}
                        {selectedOperation.value === "SUB" &&
                            (!isToggled ? (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução de subtração (SUB) selecionada, a ALU pega os valores armazenados nos registradores " +
                                        selectedOperand1.value +
                                        " e " +
                                        selectedOperand2.value +
                                        " subtrai os seus valores na mesma ordem (primeiro registrador menos o segundo registrador) e armazena em " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ) : (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução de subtração (SUB) selecionada, a ALU pega os valores armazenados no registrador " +
                                        selectedOperand1.value +
                                        " e no imediato " +
                                        selectedInput +
                                        ", subtraindo os seus valores na mesma ordem (primeiro registrador menos o imediato) e armazenando em " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ))}
                        {selectedOperation.value === "RSB" &&
                            (!isToggled ? (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução de substração inversa (RSB) selecionada, a ALU pega os valores armazenados nos registradores " +
                                        selectedOperand1.value +
                                        " e " +
                                        selectedOperand2.value +
                                        " subtrai os seus valores na ordem inversa (segundo registrador menos o primeiro registrador) e armazena em " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ) : (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução de substração inversa (RSB) selecionada, a ALU pega os valores armazenados no registrador " +
                                        selectedOperand1.value +
                                        " e no imediato " +
                                        selectedInput +
                                        ", subtraindo os seus valores na ordem inversa (imediato menos primeiro registardor) e armazenando em " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ))}
                        {selectedOperation.value === "MUL" &&
                            (!isToggled ? (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução de multiplicação (MUL) selecionada, a ALU pega os valores armazenados nos registradores " +
                                        selectedOperand1.value +
                                        " e " +
                                        selectedOperand2.value +
                                        " multiplica os seus valores (primeiro registrador vezes o segundo registrador) e armazena em " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ) : (
                                <AboutInstructions
                                    title="Informações sobre a instrução acima"
                                    info={
                                        "No caso da instrução de multiplicação (MUL)  selecionada, a ALU pega os valores armazenados no registrador " +
                                        selectedOperand1.value +
                                        " e no imediato " +
                                        selectedInput +
                                        ", multiplicando os seus valores (primeiro registrador vezes o imediato) e armazenando em " +
                                        selectedDestination.value +
                                        ". É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                    }
                                />
                            ))}
                    </div>
                    <div className="right-div-ap">
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
                            disabled={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArithmeticsPage;
