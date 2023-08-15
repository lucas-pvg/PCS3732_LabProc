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
    ];

    const [selectedOperation, setSelectedOperation] = useState("ADD");
    const [aboutSelectedInstruction, setAboutSelectedInstruction] = useState();

    const changeAboutText = (op) => {
        switch (op.value) {
            case "ADD":
                setAboutSelectedInstruction("A instrução ADD (Addition) na arquitetura ARM é utilizada para realizar operações de adição. Ela permite somar o valor de dois registradores, um registrador e um valor imediato, ou um registrador e um valor de memória. O resultado é armazenado no registrador de destino.\n\nA sintaxe geral da instrução ADD é:\nADD{cond} Rd, Rn, Operando2\n\n{cond}: Condição opcional para executar a instrução. (Não é simulado neste projeto)\nRd: Registrador de destino, onde o resultado será armazenado.\nRn: Registrador que contém o primeiro operando.\nOperando2: Valor a ser somado, que pode ser um registrador, um valor imediato ou um valor deslocado.\n\nExemplos de uso:\nADD R1, R2, R3  ; R1 = R2 + R3\nADD R4, R5, #10  ; R4 = R5 + 10");
                break
            case "SUB":
                setAboutSelectedInstruction("A instrução SUB (Subtraction) na arquitetura ARM é utilizada para realizar operações de subtração. Ela permite subtrair o valor de um registrador, um valor imediato ou um valor de memória de outro registrador. O resultado é armazenado no registrador de destino.\n\nA sintaxe geral da instrução SUB é:\nSUB{cond} Rd, Rn, Operando2\n\n{cond}: Condição opcional para executar a instrução. (Não é simulado neste projeto)\nRd: Registrador de destino, onde o resultado será armazenado.\nRn: Registrador que contém o primeiro operando.\nOperando2: Valor a ser subtraído, que pode ser um registrador, um valor imediato ou um valor deslocado.\n\nExemplos de uso:\nSUB R1, R2, R3  ; R1 = R2 - R3\nSUB R4, R5, #10  ; R4 = R5 - 10");
                break
            case "RSB":
                setAboutSelectedInstruction("A instrução RSB (Reverse Subtraction) na arquitetura ARM é utilizada para realizar operações de subtração reversa. Ela subtrai o valor de um registrador, um valor imediato ou um valor de memória de outro registrador e armazena o resultado no registrador de destino.\n\nA sintaxe geral da instrução SUB é:\nRSB{cond} Rd, Rn, Operando2\n\n{cond}: Condição opcional para executar a instrução. (Não é simulado neste projeto)\nRd: Registrador de destino, onde o resultado será armazenado.\nRn: Registrador que contém o primeiro operando, valor a ser subtraído.\nOperando2: Valor inicial, que pode ser um registrador, um valor imediato ou um valor deslocado.\n\nExemplos de uso:\nRSB R1, R2, R3  ; R1 = R3 - R2\nRSB R4, R5, #10  ; R4 = 10 - R5");
                break
            case "MUL":
                setAboutSelectedInstruction("A instrução MUL (Multiply) na arquitetura ARM é utilizada para realizar operações de multiplicação. Ela permite multiplicar o valor de dois registradores e armazenar o resultado no registrador de destino.\n\nA sintaxe geral da instrução MUL é:\nMUL{cond} Rd, Rm, Rs\nSendo Rd ≠ Rm\n\n{cond}: Condição opcional para executar a instrução. (Não é simulado neste projeto)\nRd: Registrador de destino, onde o resultado será armazenado.\nRn: Registrador que contém o primeiro operando.\nRm: Registrador que contém o segundo operando.\n\nExemplo de instrução válida:\nMUL R1, R2, R3  ; R1 = R2 * R3");
                break
            default:
                setAboutSelectedInstruction("Escolha a instrução abaixo para ver mais informações sobre ela.");
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
                            info="Instruções aritméticas na arquitetura ARM desempenham um papel crucial na realização de operações 
                            matemáticas fundamentais, como adição, subtração, multiplicação e acumulação. Essas instruções permitem 
                            que um processador ARM execute cálculos numéricos essenciais, tanto para aplicações simples quanto para 
                            tarefas complexas. Ao possibilitar a manipulação de dados numéricos em nível de máquina, as instruções 
                            aritméticas formam a base para o processamento de informações em diversos domínios, incluindo computação 
                            científica, jogos, processamento de sinais e muito mais. Sua importância reside na capacidade de realizar 
                            cálculos de forma eficiente e precisa, permitindo que dispositivos ARM executem operações matemáticas 
                            vitais para uma ampla gama de aplicações, tornando-os versáteis e essenciais em muitos contextos tecnológicos."
                        />
                        <Button to="/arithmetics" text="Emulador" />
                        <div className="blank"><p>BRANCO</p></div>
                    </div>
                    <div className="right-div-aip">
                        <div style={{ whiteSpace: 'pre-line' }}>
                            <Scrollable text={aboutSelectedInstruction} />
                            <Dropdown
                                options={operation}
                                handleSelectedOptions={handleOperation}
                                selectedOption={selectedOperation}
                                placeholder="Selecione a instrução"
                            />
                            <div className="blank"><p>BRANCO</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArithmeticsInfoPage;
