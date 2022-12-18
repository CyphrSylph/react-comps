import classNames from "classnames";

function Panel({ children, className, ...rest}) {
    const final = classNames(
        'border rounded p-3 shadow bg-white w-full',
        className
    );

    return (
        <div {...rest} className={final}> {children} </div>
    );
}

export default Panel;