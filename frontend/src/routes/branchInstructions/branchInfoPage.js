import React from "react";
import { useState, useEffect } from "react";

import Navbar from "../../components/navbar/navbar";
import Button from "../../components/button/button";
import AboutInstructions from "../../components/aboutinst/aboutInstructions";
import Dropdown from "../../components/dropdown/dropdown";
import Scrollable from "../../components/scrollinfo/scrollable";

import "./branchInfoPage.css";

const BranchInfoPage = () => {
    const operation = [
        { value: "B", label: "B" },
        { value: "BL", label: "BL" },
        { value: "BX", label: "BX" },
        { value: "BLX", label: "BLX" },
    ];

    const [selectedOperation, setSelectedOperation] = useState("B");
    const [aboutSelectedInstruction, setAboutSelectedInstruction] = useState();

    const changeAboutText = (op) => {
        switch (op.value) {
            case "B":
                setAboutSelectedInstruction("A instrução B (Branch) na arquitetura ARM é utilizada para realizar desvios condicionais ou incondicionais no fluxo de execução de um programa. Ela permite que o programa salte para um endereço de memória específico, geralmente usado para executar código em outro local ou lidar com condições especiais.\n\nA sintaxe geral da instrução B é:\nB{cond} label\n\n{cond}: Condição opcional para executar o desvio apenas se uma determinada condição for satisfeita. (Não implementada no projeto)\nlabel: Rótulo que representa o endereço de memória de destino para o qual o programa será desviado.\n\nExemplos de uso:\nB _fim\nB #10\nB 0xA\nB 0b1010");
                break;
            case "BL":
                setAboutSelectedInstruction("A instrução BL (Branch with Link) na arquitetura ARM é utilizada para realizar desvios condicionais ou incondicionais no fluxo de execução de um programa, assim como a instrução B. No entanto, a instrução BL também armazena o endereço de retorno, permitindo que o programa volte ao local de onde o desvio ocorreu.\n\nA sintaxe geral da instrução BL é:\nBL{cond} label\n\n{cond}: Condição opcional para executar o desvio apenas se uma determinada condição for satisfeita. (Não implementada no projeto)\nlabel: Rótulo que representa o endereço de memória de destino para o qual o programa será desviado.\n\nExemplos de uso:\nBL _fim\nBL #10\nBL 0xA\nBL 0b1010");
                break;
            case "BX":
                setAboutSelectedInstruction("A instrução BX (Branch and Exchange) na arquitetura ARM é utilizada para realizar desvios incondicionais no fluxo de execução de um programa, permitindo que o programa salte para um endereço de memória específico. Além disso, a instrução BX também pode alterar o modo de execução, permitindo a mudança entre o modo Thumb e o modo ARM.\n\nA sintaxe geral da instrução BX é:\nBX{cond} Rm\n\n{cond}: Condição opcional para executar o desvio apenas se uma determinada condição for satisfeita. (Não implementada no projeto)\nRm: Registrador que contém o endereço de memória de destino para o qual o programa será desviado.\n\nExemplos de uso:\nBX R1\nBX R4");
                break;
            case "BLX":
                setAboutSelectedInstruction("A instrução BLX (Branch with Link and Exchange) na arquitetura ARM é utilizada para realizar desvios condicionais ou incondicionais no fluxo de execução de um programa, assim como a instrução BL. No entanto, a instrução BLX também permite a mudança entre o modo Thumb e o modo ARM, semelhante à instrução BX.\n\nA sintaxe geral da instrução BLX é:\nBLX{cond} Rm\nBLX label\n\n{cond}: Condição opcional para executar o desvio apenas se uma determinada condição for satisfeita. (Não implementada no projeto)\nRm: Registrador que contém o endereço de memória de destino para o qual o programa será desviado.\nlabel: Rótulo que representa o endereço de memória de destino para o qual o programa será desviado.\n\nExemplos de uso:\nBX R1\nBX R4\nBL _fim\nBL #10\nBL 0xA\nBL 0b1010");
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
            <div className="branchInfoPage">
                <div className="infos-bip">
                    <div className="left-div-bip">
                        <AboutInstructions
                            title="Instruções de Desvio"
                            info="Instruções de desvio na arquitetura ARM desempenham um papel essencial no controle do fluxo de 
                            execução de um programa. Elas permitem que um programa altere sequencialmente a ordem das instruções, 
                            desviando para diferentes partes do código com base em condições ou necessidades específicas. As instruções 
                            de desvio, como B, BL, BX e BLX, capacitam os programadores a criar estruturas de decisão, loops e chamadas 
                            de função, criando fluxos de execução dinâmicos e adaptativos. A importância dessas instruções reside na 
                            capacidade de criar lógica complexa, permitindo que um programa tome decisões e execute diferentes caminhos 
                            de código, aumentando a versatilidade e a funcionalidade dos sistemas baseados em ARM. Em essência, as instruções 
                            de desvio são os pilares do controle de fluxo em linguagem de máquina ARM, possibilitando a criação de programas 
                            mais interativos, flexíveis e eficientes."
                        />
                        <Button
                            className="button"
                            to="/branch"
                            text="Emulador"
                        />
                    </div>
                    <div className="right-div-bip">
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

export default BranchInfoPage;
