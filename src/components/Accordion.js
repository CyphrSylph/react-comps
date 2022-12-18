import { useState } from "react";
import { IoIosArrowDropdownCircle, IoIosArrowDropleft } from "react-icons/io";

function Accordian({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        if (expandedIndex === nextIndex) {
            setExpandedIndex(-1);
        }else{
            setExpandedIndex(nextIndex);
        }
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon =
            <span className="text-xl">
                {isExpanded ? <IoIosArrowDropdownCircle />: <IoIosArrowDropleft />}
            </span>;

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" 
                onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    })
    return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordian;