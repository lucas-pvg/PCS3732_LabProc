import React from "react";

import TextInputReg from "./textinputreg";

import "./registers.css";

const Registers = ({
    handleR0,
    handleR1,
    handleR2,
    handleR3,
    handleR4,
    handleR5,
    handleR6,
    handleR7,
    handleR8,
    handleR9,
    handleR10,
    handleR11,
    handleR12,
    handleR13,
    handleR14,
    handleR15,
    handleCPSR,
    disabled,
}) => {
    return (
        <div className="registers">
            <div className="left-collum">
                <div className="left-row">
                    <p className="row-label">R0</p>
                    <TextInputReg
                        placeholder="0b binário, 0x hexa"
                        handleTextInput={handleR0}
                        disabled={disabled}
                    />
                </div>
                <div className="left-row">
                    <p className="row-label">R1</p>
                    <TextInputReg
                        placeholder="0b binário, 0x hexa"
                        handleTextInput={handleR1}
                        disabled={disabled}
                    />
                </div>
                <div className="left-row">
                    <p className="row-label">R2</p>
                    <TextInputReg
                        placeholder="0b binário, 0x hexa"
                        handleTextInput={handleR2}
                        disabled={disabled}
                    />
                </div>
                <div className="left-row">
                    <p className="row-label">R3</p>
                    <TextInputReg
                        placeholder="0b binário, 0x hexa"
                        handleTextInput={handleR3}
                        disabled={disabled}
                    />
                </div>
                <div className="left-row">
                    <p className="row-label">R4</p>
                    <TextInputReg
                        placeholder="0b binário, 0x hexa"
                        handleTextInput={handleR4}
                        disabled={disabled}
                    />
                </div>
                <div className="left-row">
                    <p className="row-label">R5</p>
                    <TextInputReg
                        placeholder="0b binário, 0x hexa"
                        handleTextInput={handleR5}
                        disabled={disabled}
                    />
                </div>
                <div className="left-row">
                    <p className="row-label">R6</p>
                    <TextInputReg
                        placeholder="0b binário, 0x hexa"
                        handleTextInput={handleR6}
                        disabled={disabled}
                    />
                </div>
                <div className="left-row">
                    <p className="row-label">R7</p>
                    <TextInputReg
                        placeholder="0b binário, 0x hexa"
                        handleTextInput={handleR7}
                        disabled={disabled}
                    />
                </div>
            </div>
            <div className="right-collum">
                <div className="right-row">
                    <p className="row-label">R8</p>
                    <TextInputReg
                        placeholder="0b binário, 0x hexa"
                        handleTextInput={handleR8}
                        disabled={disabled}
                    />
                </div>
                <div className="right-row">
                    <p className="row-label">R9</p>
                    <TextInputReg
                        placeholder="0b binário, 0x hexa"
                        handleTextInput={handleR9}
                        disabled={disabled}
                    />
                </div>
                <div className="right-row">
                    <p className="row-label">R10</p>
                    <TextInputReg
                        placeholder="0b binário, 0x hexa"
                        handleTextInput={handleR10}
                        disabled={disabled}
                    />
                </div>
                <div className="right-row">
                    <p className="row-label">R11</p>
                    <TextInputReg
                        placeholder="0b binário, 0x hexar"
                        handleTextInput={handleR11}
                        disabled={disabled}
                    />
                </div>
                <div className="right-row">
                    <p className="row-label">R12</p>
                    <TextInputReg
                        placeholder="0b binário, 0x hexa"
                        handleTextInput={handleR12}
                        disabled={disabled}
                    />
                </div>
                <div className="right-row">
                    <p className="row-label">R13</p>
                    <TextInputReg
                        placeholder="0b binário, 0x hexa"
                        handleTextInput={handleR13}
                        disabled={disabled}
                    />
                </div>
                <div className="right-row">
                    <p className="row-label">R14</p>
                    <TextInputReg
                        placeholder="0b binário, 0x hexa"
                        handleTextInput={handleR14}
                        disabled={disabled}
                    />
                </div>
                <div className="right-row">
                    <p className="row-label">R15</p>
                    <TextInputReg
                        placeholder="0b binário, 0x hexa"
                        handleTextInput={handleR15}
                        disabled={disabled}
                    />
                </div>
                <div className="right-row">
                    <p className="row-label">CPSR</p>
                    <TextInputReg
                        placeholder="0b binário, 0x hexa"
                        handleTextInput={handleCPSR}
                        disabled={disabled}
                    />
                </div>
            </div>
        </div>
    );
};

export default Registers;
