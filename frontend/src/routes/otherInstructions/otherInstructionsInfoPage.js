import React from "react";
import { useState, useEffect } from "react";

import Navbar from "../../components/navbar/navbar";
import AboutInstructions from "../../components/aboutinst/aboutInstructions";
import Button from "../../components/button/button";
import Scrollable from "../../components/scrollinfo/scrollable";
import Dropdown from "../../components/dropdown/dropdown";

import "./otherInstructionsInfoPage.css";

const OtherInstructionsInfoPage = () => {
    const operation = [
        { value: "AND", label: "AND" },
        { value: "EOR", label: "EOR" },
        { value: "ORR", label: "ORR" },
        { value: "BIC", label: "BIC" },
        { value: "MOV", label: "MOV" },
        { value: "MVN", label: "MVN" },
        { value: "CLZ", label: "CLZ" },
    ];

    const [selectedOperation, setSelectedOperation] = useState("AND");
    const [aboutSelectedInstruction, setAboutSelectedInstruction] = useState();

    const changeAboutText = (op) => {
        switch (op.value) {
            case "AND":
                setAboutSelectedInstruction("A instrução AND na arquitetura ARM é usada para realizar operações de \"bitwise AND\" (E lógico) entre os bits de dois registradores. Essa instrução executa a operação de E lógico bit a bit entre os valores dos registradores e armazena o resultado no registrador de destino. \n\nA sintaxe geral da instrução AND é:\nAND{cond} Rd, Rn, Operando2\n\n{cond}: Condição opcional para executar a instrução. (Não é simulado neste projeto)\nRd: Registrador de destino, onde o resultado da operação será armazenado.\nRn: Registrador que contém um dos operandos.\nOperando2: Segundo operando, que pode ser um registrador, um valor imediato ou um valor deslocado.\n\nExemplos de uso:\nAND R1, R2, R3  ; R1 = R2 AND R3\nAND R4, R5, #0x0F  ; R4 = R5 AND 0x0F\nAND R6, R7, R8, LSL #2  ; R6 = R7 AND (R8 << 2)");
                break;
            case "EOR":
                setAboutSelectedInstruction("A instrução EOR (Exclusive OR) na arquitetura ARM é usada para realizar operações de \"bitwise XOR\" (OU Exclusivo) entre os bits de dois registradores. Essa instrução executa a operação de OU Exclusivo bit a bit entre os valores dos registradores e armazena o resultado no registrador de destino.\n\nA sintaxe geral da instrução EOR é:\EOR{cond} Rd, Rn, Operando2\n\n{cond}: Condição opcional para executar a instrução. (Não é simulado neste projeto)\nRd: Registrador de destino, onde o resultado da operação será armazenado.\nRn: Registrador que contém um dos operandos.\nOperando2: Segundo operando, que pode ser um registrador, um valor imediato ou um valor deslocado.\n\nExemplos de uso:\nEOR R1, R2, R3  ; R1 = R2 EOR R3\nEOR R4, R5, #0xFF  ; R4 = R5 EOR 0xFF\nEOR R4, R5, #0xFF  ; R4 = R5 EOR 0xFF");
                break;
            case "ORR":
                setAboutSelectedInstruction("A instrução ORR (Logical OR) na arquitetura ARM é usada para realizar operações de \"bitwise OR\" (OU Lógico) entre os bits de dois registradores. Essa instrução executa a operação de OU Lógico bit a bit entre os valores dos registradores e armazena o resultado no registrador de destino.\n\nA sintaxe geral da instrução ORR é:\ORR{cond} Rd, Rn, Operando2\n\n{cond}: Condição opcional para executar a instrução. (Não é simulado neste projeto)\nRd: Registrador de destino, onde o resultado da operação será armazenado.\nRn: Registrador que contém um dos operandos.\nOperando2: Segundo operando, que pode ser um registrador, um valor imediato ou um valor deslocado.\n\nExemplos de uso:\nORR R1, R2, R3  ; R1 = R2 ORR R3\nORR R4, R5, #0xF0  ; R4 = R5 ORR 0xF0\nORR R6, R7, R8, LSL #4");
                break;
            case "BIC":
                setAboutSelectedInstruction("A instrução BIC (Bit Clear) na arquitetura ARM é usada para realizar operações de \"bitwise AND\" (E lógico) entre os bits de um registrador e o complemento dos bits do segundo operando. Essa instrução permite que bits específicos em um registrador sejam limpos (definidos como 0), enquanto os outros bits permanecem inalterados.\n\nA sintaxe geral da instrução BIC é:\BIC{cond} Rd, Rn, Operando2\n\n{cond}: Condição opcional para executar a instrução. (Não é simulado neste projeto)\nRd: Registrador de destino, onde o resultado da operação será armazenado.\nRn: Registrador que contém um dos operandos.\nOperando2: Segundo operando, que pode ser um registrador, um valor imediato ou um valor deslocado.\n\nExemplos de uso:\nBIC R1, R2, #0x03  ; R1 = R2 AND NOT 0x03\nBIC R3, R4, #0b1100  ; R3 = R4 AND NOT 0b1100\nBIC R5, R6, R7, LSR #5  ; R5 = R6 AND NOT (R7 >> 5)");
                break;
            case "MOV":
                setAboutSelectedInstruction("A instrução MOV (Move) na arquitetura ARM é usada para copiar o valor de um operando para um registrador de destino. Essa instrução é fundamental para mover dados entre registradores ou entre registradores e valores imediatos.\n\nA sintaxe geral da instrução MOV é:\MOV{cond} Rd, Operando2\n\n{cond}: Condição opcional para executar a instrução. (Não é simulado neste projeto)\nRd: Registrador de destino, onde o resultado da operação será armazenado.\nOperando2: Segundo operando, que pode ser um registrador, um valor imediato ou um valor deslocado.\n\nExemplos de uso:\nMOV R1, #0x3F  ; R1 = 0x3F\nMOV R4, R5, LSR #2  ; R4 = R5 >> 2");
                break;
            case "MVN":
                setAboutSelectedInstruction("A instrução MVN (Move Not) na arquitetura ARM é usada para copiar o complemento bit a bit de um operando para um registrador de destino. Essa instrução inverte todos os bits do operando antes de copiá-los para o registrador de destino.\n\nA sintaxe geral da instrução MVN é:\MVN{cond} Rd, Operando2\n\n{cond}: Condição opcional para executar a instrução. (Não é simulado neste projeto)\nRd: Registrador de destino, onde o resultado da operação será armazenado.\nOperando2: Segundo operando, que pode ser um registrador, um valor imediato ou um valor deslocado.\n\nExemplos de uso:\nMVN R1, #0x3F  ; R1 = ~0x3F\nMVN R2, R3  ; R2 = ~R3\nMVN R2, R3  ; R2 = ~R3n");
                break;
            case "CLZ":
                setAboutSelectedInstruction("A instrução CLZ (Count Leading Zeros) na arquitetura ARM é usada para contar o número de zeros consecutivos à esquerda (os bits mais significativos) em um valor de registrador. O resultado desse cálculo é armazenado no registrador de destino.\n\nA sintaxe geral da instrução CLZ é:\nCLZ{cond} Rd, Operando2\n\n{cond}: Condição opcional para executar a instrução. (Não é simulado neste projeto)\nRd: Registrador de destino, onde o resultado da operação será armazenado.\nRm: Registrador que contém o valor cujos zeros à esquerda serão contados.\n\nExemplos de uso:\nCLZ R1, R2  ; R1 = Contagem de zeros à esquerda em R2");
                break;
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
            <div className="other-instructions">
                <div className="infos-oiip">
                    <div className="left-div-oiip">
                        <AboutInstructions
                            title="Outras instruções: lógicas e outros operandos"
                            info="As instruções abordadas nesta seção da arquitetura ARM são operações fundamentais que envolvem 
                            a manipulação direta de dados a nível de bits. Elas permitem a realização de operações lógicas, 
                            movimentação de dados, inversão de bits e contagem de zeros, todas operando bit a bit. Essas instruções 
                            desempenham um papel crucial na programação de baixo nível, onde o controle granular sobre os bits e 
                            registradores é essencial.

                            A importância dessas instruções reside em sua capacidade de efetuar operações complexas e eficientes 
                            em nível de bits, fundamentais para várias áreas, como criptografia, otimização de algoritmos, manipulação 
                            de dados em hardware e operações de máscara. Elas oferecem um nível avançado de controle sobre os dados 
                            e permitem que os programadores realizem tarefas intricadas, como combinar, inverter ou contar bits de forma 
                            precisa e rápida. Essas operações, embora possam parecer primitivas, são a base para a construção de algoritmos 
                            sofisticados e eficientes, tornando-se ferramentas essenciais para a implementação de sistemas de software e 
                            hardware robustos, rápidos e seguros na arquitetura ARM."
                        />
                        <Button
                            className="button"
                            to="/other-instructions"
                            text="Emulador"
                        />
                    </div>
                    <div className="right-div-oiip">
                        <div style={{ whiteSpace: 'pre-line' }}>
                            <Scrollable text={aboutSelectedInstruction} />
                            <Dropdown
                                options={operation}
                                handleSelectedOptions={handleOperation}
                                selectedOption={selectedOperation}
                                placeholder="Selecione a instrução"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherInstructionsInfoPage;
