import Accordian from "./components/Accordion";

function App() {
    const items = [
        {
            id: '1',
            label: 'Kappa: The Water Yōkai',
            content: 'A humanoid Japanese mythical creature with some features resembling amphibians and reptiles. They tend to look different from a Kappa to another; some have adult bodies or child bodies, with skin colored in various shades of green. Their skin might be slimy or covered in scales, and their arms and legs webbed between the toes and fingers. As unique as they can be, all Kappa have a turtle shell on their back, a mouth resembling a beak and an object resembling a bowl on its head, in which it carries a liquid that is said to be its life force. If this liquid spills or the bowl is damaged in any way, a Kappa can become incredibly weakened or even die.'
        },
        {
            id: '2',
            label: 'Tegnu: The Red-Faced Yōkai',
            content: 'The first Tengu depictions showed them as monsters with crow-like features such as kite-like black wings, bird heads, and beaks. Later on, newer depictions show Tengu as long-nosed creatures with red faces. At first, Tengu were considered mischievous Japanese mythical creatures but not inherently evil or particularly dangerous, as they were quite easy to avoid or defeat. Many legends speak of Tengu as bringers of war and destruction, but they were also known as protective deities and spirits of mountains and forests over time.'
        },
        {
            id: '3',
            label: 'Tsukumogami: The Unique Yōkai',
            content: 'Traditionally considered to be tools or everyday household items that have acquired a kami (or spirit) of their own, after living for at least a hundred years. Although generally considered harmless, there are instances of Tsukumogami becoming vengeful towards the people who may have mistreated them or abandoned them throughout their lives.'
        },
    ];

    return <Accordian items={items} />;
}

export default App;