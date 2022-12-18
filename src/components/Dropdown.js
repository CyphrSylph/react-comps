import { useState } from "react";

function Dropdown({ options }) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const renderedOpts = options.map((option) => {
        return (
            <div key={option.value}>
                {option.label}
            </div>
        );
    });
    return (
        <div>  
            <div onClick={handleClick}>Select Element</div>
            {open && <div>{renderedOpts}</div>} 
        </div>
    );
}

export default Dropdown;