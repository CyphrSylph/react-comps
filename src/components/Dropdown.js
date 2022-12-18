import { useState } from "react";
import { TiChevronLeftOutline } from "react-icons/ti";


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
            <div className="hover:bg-sky-100 rounder cursor-pointer p-1"
            onClick={() => handleOptClick(option)} key={option.value}>
                {option.label}
            </div>
        );
    });

    return (
        <div className="w-48 relative">  
            <div className="flex justify-between itemso0center cursor-pointer border rounded p-3 shadow bg-white w-full" 
            onClick={handleClick}>
                {value?.label || 'Select Element'}
                <TiChevronLeftOutline className="text-lg -rotate-90" />
            </div>
            {open && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOpts}</div>} 
        </div>
    );
}

export default Dropdown;