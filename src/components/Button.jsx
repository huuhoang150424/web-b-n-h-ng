const Button = ({icon="",className="",textButton="",onClick,styleText='',typeButton=''}) => {
    const handleClick=onClick || (()=>{})
    return (
        <button
        type={`${typeButton}`}
        className={`${className}`}
        onClick={handleClick}
        >
            <i className={`${icon}`}></i>
            <span className={`${styleText}`}>
                {textButton}
            </span>
        </button>
    )
}
export default Button