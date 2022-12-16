import Button from './Button';

function App() {
    return( 
        <div>
            <div>
                <Button primary rounded>Primary</Button>
            </div>
            <div>
                <Button secondary rounded>Secondary</Button>
            </div>
            <div>
                <Button neutral outline>Neutral</Button>
            </div>
            <div>
                <Button success outline>Success</Button>
            </div>
            <div>
                <Button warning rounded>Warning</Button>
            </div>
        </div>
    );
}

export default App;