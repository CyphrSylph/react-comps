import { useState } from "react";
import { TiChevronLeftOutline } from "react-icons/ti";
import Panel from "./Panel";


function Dropdown({ options, value, onChange }) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleOptClick = (option) => {
        setOpen(false);
        onChange(option);
    };

    const renderedOpts = options.map((option) => {
        return (
            <div className="hover:bg-orange-100 rounder cursor-pointer p-1"
            onClick={() => handleOptClick(option)} key={option.value}>
                {option.label}
            </div>
        );
    });

    return (
        <div className="w-48 relative">  
            <Panel className="flex justify-between items-center cursor-pointer" 
            onClick={handleClick}>
                {value?.label || 'Select Element'}
                <TiChevronLeftOutline className="text-lg -rotate-90" />
            </Panel>
            {open && <Panel className="absolute top-full">{renderedOpts}</Panel>} 
        </div>
    );
}

export default Dropdown;