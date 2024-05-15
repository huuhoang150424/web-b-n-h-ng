import { Link } from "react-router-dom";



const Header = () => {
    return (
        <header className="w-full gap-[50px] h-auto wrapper flex items-center justify-between bg-primaryColor py-[10px] z-30 sticky top-0 shadow-md ">
            <div className="w-[14%]  flex items-center justify-center  mr-[100px]">
                <Link to="/" className="text-[2.2rem] text-[#fff] font-[600]">
                    Shop Online
                </Link>
            </div>
            <div className="w-[58%]">
                <form className="flex">
                    <input 
                        className="rounded-l-[4px] outline-none px-[18px] text-[1.6rem] w-[81%] text-textColor"
                        placeholder="please enter..."
                    />
                    <div className="w-[19%] py-[8px] px-[12px] border flex items-center gap-[6px] rounded-r-[4px]">
                        <i className="fa-solid fa-magnifying-glass text-[1.6rem] text-[#fff]"></i>
                        <button className="text-[1.6rem] text-[#fff]">
                            Tìm kiếm
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-[28%] flex items-center gap-[10px] ">
                <div className="flex items-center  gap-[5px] cursor-pointer relative">
                    <i className="fa-solid fa-cart-shopping text-[3rem] text-[#fff]"></i>
                    <h4 className="text-[#fff] text-[1.6rem] font-[500]">Giỏ hàng</h4>
                    <div className="absolute top-[-8px] left-[24px] flex items-center justify-center w-[16px] h-[16px] bg-[#fff] rounded-[50%] border-[0.6px]">
                        <span className=" text-[1.2rem] font-[700] text-primaryColor">0</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-[40px] h-[40px] flex items-center justify-center ">
                        <i className="fa-regular fa-user text-[3rem] font-[400] text-[#fff]"></i>
                    </div>
                    <div className="">
                        <div className="flex items-center gap-[5px] text-[#fff] ">
                            <Link to={"./login"} className="cursor-pointer text-[1.6rem]">Đăng nhập</Link>
                            <Link to={"./register"} className="cursor-pointer text-[1.6rem]">Đăng ký</Link>
                        </div>
                        <div className="flex items-center cursor-pointer text-[#fff] gap-[4px]">
                            <h5 className=" text-[1.6rem]">Tài khoản</h5>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;