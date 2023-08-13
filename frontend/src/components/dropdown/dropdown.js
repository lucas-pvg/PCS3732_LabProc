import React from "react";
import Select from "react-select";
import { useState } from "react";

import "./dropdown.css";

const Dropdown = (props) => {
    
    const [selectedOption, setSelectedOption] = useState();

    const handleSelectedOptions = (data) => {
        setSelectedOption(data);
    };

    return (
        <div className="dropdown-container">
            <Select
                placeholder={props.placeholder}
                options={props.options}
                onChange={handleSelectedOptions}
                value={selectedOption}
                isSearchable={true}
            />
        </div>
    );
};

export default Dropdown;
