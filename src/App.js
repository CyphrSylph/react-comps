import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    }

    const options = [
        {label: 'Fire', value: 'fire'},
        {label: 'Air', value: 'air'},
        {label: 'Water', value: 'water'},
        {label: 'Earth', value: 'earth'}
    ];

    return <Dropdown options={options} value={selection} onChange={handleSelect}/>
}

export default App;