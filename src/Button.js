import PropTypes from 'prop-types';

function Button({
    children,
    primary,
    secondary,
    neutral,
    success,
    warning,
    outline,
    rounded,
}) {
    return <button>{children}</button>;
}

Button.propTypes = {
    variantCheck: ({primary, secondary, neutral, success, warning}) => {
        const count = 
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!neutral) +
            Number(!!success) +
            Number(!!warning);
        
        if(count > 1){
            return new Error('Only one button variant can be true');
        }
    },
};

export default Button;