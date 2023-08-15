import React from "react";
import { useState } from "react";

import Dropdown from "../../components/dropdown/dropdown";
import Navbar from "../../components/navbar/navbar";
import ButtonGo from "../../components/buttongo/buttonGo";
import Service from "../../services/service";
import TextInput from "../../components/textinput/textInput";
import AboutInstructions from "../../components/aboutinst/aboutInstructions";
import Registers from "../../components/registers/registers";

import "./branchPage.css";

const BranchPage = () => {
    const operation = [
        { value: "B", label: "B" },
        { value: "BL", label: "BL" },
        { value: "BX", label: "BX" },
        { value: "BLX", label: "BLX" },
    ];

    const [selectedOperation, setSelectedOperation] = useState("");
    const [selectedDestination, setSelectedDestination] = useState();
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

    const handleTextInput = (event) => {
        setSelectedDestination(event.target.value);
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
        data = {
            operation: selectedOperation.label,
            firstOperand: {
                value: selectedDestination,
            },
        };

        reg = [
            {
                label: "R0",
                value: inputR0 | 0,
            },
            {
                label: "R1",
                value: inputR1 | 0,
            },
            {
                label: "R2",
                value: inputR2 | 0,
            },
            {
                label: "R3",
                value: inputR3 | 0,
            },
            {
                label: "R4",
                value: inputR4 | 0,
            },
            {
                label: "R5",
                value: inputR5 | 0,
            },
            {
                label: "R6",
                value: inputR6 | 0,
            },
            {
                label: "R7",
                value: inputR7 | 0,
            },
            {
                label: "R8",
                value: inputR8 | 0,
            },
            {
                label: "R9",
                value: inputR9 | 0,
            },
            {
                label: "R10",
                value: inputR10 | 0,
            },
            {
                label: "R11",
                value: inputR11 | 0,
            },
            {
                label: "R12",
                value: inputR12 | 0,
            },
            {
                label: "R13",
                value: inputR13 | 0,
            },
            {
                label: "R14",
                value: inputR14 | 0,
            },
            {
                label: "R15",
                value: inputR15 | 0,
            },
            {
                label: "CPSR",
                value: inputCPSR | 0,
            },
        ];

        Service.updateAllRegisters(reg).then((response) =>
            console.log(response)
        );
        Service.postOperation(data).then((response) => {
            Service.getRegisterList().then((response) => {
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
            });
        });
    };

    return (
        <div>
            <Navbar />
            <div className="branchPage">
                <h1 className="instrucTitle-bp">Instruções de Desvio</h1>
                <div className="dropdown-row-bp">
                    <Dropdown
                        className="dropdown-bp"
                        options={operation}
                        placeholder="Operação"
                        handleSelectedOptions={handleSelectedOperation}
                        selectedOption={selectedOperation}
                    />
                    <TextInput
                        placeholder="Imediato (0b binario, 0x hexa)"
                        handleTextInput={handleTextInput}
                    />
                    <ButtonGo handleSend={onSend} />
                </div>
                <div>
                    <div className="left-div-bp">
                        {selectedOperation.value === "" && (
                            <AboutInstructions
                                title="Informações sobre a instrução acima"
                                info="Selecione a instrução"
                            />
                        )}
                        {selectedOperation.value === "B" && (
                            <AboutInstructions
                                title="Informações sobre a instrução acima"
                                info={
                                    "No caso da instrução acima selecionada de branch (B), pegando como exemplo uma sequência de instruções sendo executada, ao encontrar com a instrução branch, o programa será desviado para o local armazenado no imediato, nesse caso sendo " +
                                    selectedDestination +
                                    ", porém sem armazenar o local onde foi realizado o desvio. É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                }
                            />
                        )}
                        {selectedOperation.value === "BL" && (
                            <AboutInstructions
                                title="Informações sobre a instrução acima"
                                info={
                                    "No caso da instrução acima selecionada de branch and link (BL), pegando como exemplo uma sequência de instruções sendo executada, ao encontrar com a instrução branch, o programa será desviado para o local armazenado no imediato, nesse caso sendo " +
                                    selectedDestination +
                                    ", armazenando o valor de retorno em R14. Uma vez que as instruções do desvio terminam de ser executadas, o programa volta para o valor armazenado em R14. É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                }
                            />
                        )}
                        {selectedOperation.value === "BX" && (
                            <AboutInstructions
                                title="Informações sobre a instrução acima"
                                info={
                                    "No caso da instrução acima selecionada de branch and exchange (BX), pegando como exemplo uma sequência de instruções sendo executada, ao encontrar com a instrução branch, o programa será desviado para o local armazenado no imediato, nesse caso sendo " +
                                    selectedDestination +
                                    ", porém sem armazenar o local onde foi realizado o desvio, assim como é feito no branch (B). A diferença é que é aceito tanto um imediato quanto um registrador no local de desvio. É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                }
                            />
                        )}
                        {selectedOperation.value === "BLX" && (
                            <AboutInstructions
                                title="Informações sobre a instrução acima"
                                info={
                                    "No caso da instrução acima selecionada de branch and link (BLX), pegando como exemplo uma sequência de instruções sendo executada, ao encontrar com a instrução branch, o programa será desviado para o local armazenado no imediato, nesse caso sendo " +
                                    selectedDestination +
                                    ", armazenando o valor de retorno em R14. Uma vez que as instruções do desvio terminam de ser executadas, o programa volta para o valor armazenado em R14. Como no BX, a diferença é que é aceito tanto um imediato quanto um registrador no local de desvio. É possível observar os resultados a partir da tabela de reistradores ao lado ao executar a instrução."
                                }
                            />
                        )}
                    </div>
                    <div className="right-div-bp">
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

export default BranchPage;
