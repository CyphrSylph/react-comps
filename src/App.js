import Button from './Button';
import { IoWarningOutline, IoSparklesOutline } from "react-icons/io5";

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
                <Button neutral rounded>Neutral</Button>
            </div>
            <div>
                <Button success rounded>
                    <IoSparklesOutline /> Success
                </Button>
            </div>
            <div>
                <Button warning rounded outline>
                    <IoWarningOutline /> Warning
                </Button>
            </div>
        </div>
    );
}

export default App;