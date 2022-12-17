import Button from '../components/Button';
import { IoWarningOutline, IoSparklesOutline } from "react-icons/io5";

function ButtonPage() {
    const handleClick = () => {
        console.log('Clicked');
    };

    return( 
        <div>
            <div>
                <Button 
                    primary 
                    rounded 
                    className='mb-5' 
                    onClick={handleClick}>
                        Primary
                </Button>
            </div>
            <div>
                <Button 
                    secondary 
                    rounded
                    className='mb-5' 
                    onClick={handleClick}>
                        Secondary
                </Button>
            </div>
            <div>
                <Button 
                    neutral 
                    rounded
                    className='mb-5' 
                    onClick={handleClick}>
                        Neutral
                </Button>
            </div>
            <div>
                <Button 
                    success 
                    rounded
                    className='mb-5' 
                    onClick={handleClick}>
                    <IoSparklesOutline /> 
                        Success
                </Button>
            </div>
            <div>
                <Button 
                    warning 
                    rounded 
                    outline
                    className='mb-5' 
                    onClick={handleClick}>
                    <IoWarningOutline /> 
                        Warning
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;