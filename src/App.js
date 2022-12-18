import Dropdown from "./components/Dropdown";

function App() {
    const options = [
        {label: 'Fire', value: 'fire'},
        {label: 'Air', value: 'air'},
        {label: 'Water', value: 'water'},
        {label: 'Earth', value: 'earth'}
    ];

    return <Dropdown options={options}/>
}

export default App;