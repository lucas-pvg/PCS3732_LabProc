import React from "react";
import { useState } from "react";

import Dropdown from "../../components/dropdown/dropdown";
import Navbar from "../../components/navbar/navbar";
import ButtonGo from "../../components/buttongo/buttonGo";
import Service from "../../services/service";
import TextInput from "../../components/textinput/textInput";

import "./branchPage.css";

const BranchPage = () => {
    const operation = [
        { value: "B", label: "B" },
        { value: "BL", label: "BL" },
        { value: "BX", label: "BX" },
        { value: "BLX", label: "BLX" },
    ];

    const [selectedOperation, setSelectedOperation] = useState();
    const [selectedDestination, setSelectedDestination] = useState();

    const handleSelectedOperation = (data) => {
        setSelectedOperation(data);
    };

    const handleTextInput = (event) => {
        setSelectedDestination(event.target.value);
    }

    var data = {
        operation: selectedOperation,
        registerDestination: {
            value: selectedDestination,
        }
    }

    const onSend = () => {
        Service.postOperation(data);
    }

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
                    <TextInput placeholder="Imediato (0b binario, 0x hexa)" handleTextInput={handleTextInput}/>
                    <ButtonGo handleSend={onSend}/>
                </div>
            </div>
        </div>
    );
};

export default BranchPage;
