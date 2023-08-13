import React from "react";
import Select from "react-select";
import { useState } from "react";

import "./dropdown.css";

const Dropdown = ({ placeholder, props }) => {
    const [selectedOption, setSelectedOption] = useState();

    const handleSelectedOptions = (data) => {
        setSelectedOption(data);
    };

    return (
        <div className="dropdown-container">
            <Select
                placeholder={placeholder}
                options={props}
                onChange={handleSelectedOptions}
                value={selectedOption}
                isSearchable={true}
            />
        </div>
    );
};

export default Dropdown;
