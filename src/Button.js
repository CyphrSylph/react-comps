import className from 'classnames';

function Button({
    children,
    primary,
    secondary,
    neutral,
    success,
    warning,
    outline,
    rounded,
    ...rest
}) {
    const classes = className(rest.className, 'flex items-center px-3 py-1.5 border-2',{
        'border-teal-600 bg-teal-600 text-white': primary,
        'border-teal-300 bg-teal-300 text-teal-700': secondary,
        'border-teal-500 bg-teal-100 text-teal-700': neutral,
        'border-lime-300 bg-lime-300 text-lime-700': success,
        'border-orange-500 bg-orange-300 text-orange-700': warning,
        'rounded-full': rounded,
        'border-dotted': outline
    });

    return <button {...rest} className={classes}> {children} </button>;
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