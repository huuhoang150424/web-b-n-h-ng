import Line from "./Line"


const NavBar = ({ListItem}) => {
    return (
        <div className="w-full h-auto px-[14px] my-[15px] rounded-[4px] bg-[#fff] shadow-md ">
            <div className="flex items-center py-[12px] gap-[10px] ">
                <i className="fa-solid fa-list text-[2.2rem] text-lineColor"></i>
                <h1 className="text-[1.5rem] text-[#383838] font-[500]">Danh mục sản phẩm</h1>
            </div>
            <Line
                className={"w-[85%] h-[1.5px] mx-auto"}
            />
            <ul className="py-[10px]">
                {
                    ListItem.map((item,index)=>{
                        return (
                            <li key={index} className=" flex items-center justify-between my-[4px] px-[4px] py-[6px] cursor-pointer rounded-[4px] hover:bg-slate-200 transition-all duration-300 ease-in-out ">
                                <p className=" text-[1.5rem] text-textColor font-[400]">
                                    {item}
                                </p> 
                                <i className="fa-solid fa-angle-right text-textColor  text-[1.8rem]"></i>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default NavBar