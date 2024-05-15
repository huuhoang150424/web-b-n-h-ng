const Button = ({className="",textButton="",onClick,styleText='',typeButton=''}) => {
    return (
        <div>
            <button type={`${typeButton}`} className={`${className} px-[12px] py-[10px] rounded-[4px] `}>
                <span className={`${styleText}`}>
                    {textButton}
                </span>
            </button>
        </div>
    );
};
export default Button;