import React from "react";
import Select from "react-select";
import { useState } from "react";

import "./dropdown.css";

const Dropdown = ({placeholder, options, handleSelectedOptions, selectedOption}) => {

    return (
        <div className="dropdown-container">
            <Select
                className="dropdown"
                placeholder={placeholder}
                options={options}
                onChange={handleSelectedOptions}
                value={selectedOption}
                isSearchable={true}
            />
        </div>
    );
};

export default Dropdown;
