
const Slide = ({image,className=""}) => {
    return (
        <div className={`mt-[5px] overflow-hidden ${className}`}>
            <img
                className="border shadow-md object-cover h-[100%]"
                src={`${image}`}
            />
        </div>
    );
};
export default Slide