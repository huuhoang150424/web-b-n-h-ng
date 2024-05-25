const Button = ({className="",textButton="",onClick,styleText='',typeButton=''}) => {
    const handleClick=onClick || (()=>{})
    return (
        <div>
            <button 
                type={`${typeButton}`} 
                className={`${className} px-[12px] py-[10px] rounded-[4px] `}
                onClick={handleClick}
            >
                <span className={`${styleText}`}>
                    {textButton}
                </span>
            </button>
        </div>
    );
};
export default Button;