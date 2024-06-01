const Button = ({className="",textButton="",onClick,styleText='',typeButton=''}) => {
    const handleClick=onClick || (()=>{})
    return (
        <button 
            type={`${typeButton}`} 
            className={`${className} px-[12px] py-[10px] rounded-[4px] `}
            onClick={handleClick}
        >
            <span className={`${styleText}`}>
                {textButton}
            </span>
        </button>
    );
};
export default Button;