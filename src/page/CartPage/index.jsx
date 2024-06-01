import Button from "../../components/Button"
import Line from "../../components/Line"


export const CartPage = () => {
    return (
        <div className="wrapper">
            <h1 className="text-[2.2rem] leading-[3.3rem] my-[10px] font-[500] text-textColor">Giỏ hàng</h1>
            <div className="flex gap-[20px] ">
                <div className="grid__column-9 mb-[40px] ">
                    <div className="w-[100%] h-[30px] flex items-center px-[20px] py-[6px]  bg-[#fff] mb-[10px] rounded-[4px]  shadow-sm">
                        <input
                            type="checkbox"
                            className="cursor-pointer"
                        />
                        <span className="grow-[1] text-[1.4rem] text-textColor ml-[8px] font-[400] ">Tất cả sản phẩm </span>
                        <p className=" label__cart">Đơn giá</p>
                        <p className=" label__cart">Số lượng</p>
                        <p className=" label__cart">Thành tiền</p>
                        <div className="flex items-center justify-center cursor-pointer ">
                            <i className="fa-solid fa-trash label__cart hover:text-gray-400 transition-all duration-300 ease-in-out"></i>
                        </div>
                    </div>
                    <div  className="w-[100%] h-[80px] overflow-hidden  flex items-center px-[20px] py-[40px] bg-[#fff] mb-[15px] rounded-[4px] shadow-sm">
                        <input
                            className="cursor-pointer"
                            type="checkbox"
                        />
                        <div className="grow-[1] flex items-center ">
                            <div className="w-[27%] flex items-center mr-[40px] gap-[6px] ml-[8px] ">
                                <img
                                    className="object-cover w-[70px] h-[70px] "
                                    alt=""
                                    src=""
                                />
                                <span className="text-[1.4rem] leading-[2.1rem] text-textColor font-[400]"></span>
                            </div>
                            <p className=" label__item ">
                                200.000đ
                            </p>
                            <div className=" label__item flex">
                                <div className="py-[4px] px-[6px] cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in-out  rounded-[4px] border border-lineColor " >
                                    <i className="fa-solid fa-minus text-[1.2rem] text-iconColor" ></i>
                                </div>
                                <input
                                    type="text"
                                    className="py-[4px] px-[4px] w-[40px] text-center outline-none rounded-[4px] border border-lineColor  text-[1.4rem] text-iconColor"
                                    value="1"
                                />
                                <div className="py-[4px] px-[6px] cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in-out  rounded-[4px] border border-lineColor " >
                                    <i className="fa-solid fa-plus text-[1.2rem] text-iconColor" ></i>
                                </div>
                            </div>
                            <p className=" label__item">200.000đ</p>
                        </div>
                        <div className="flex items-center justify-center cursor-pointer ">
                            <i className="fa-solid fa-trash label__cart hover:text-gray-400 transition-all duration-300 ease-in-out"></i>
                        </div>
                    </div>
                </div>
                {/* <div className="grid__column-9 mb-[40px] ">
                    <div className="w-[100%] h-[200px] flex flex-col  px-[20px] py-[6px]  bg-[#fff] mb-[10px] rounded-[4px]  shadow-sm">
                        <img
                            src="https://salt.tikicdn.com/ts/upload/43/fd/59/6c0f335100e0d9fab8e8736d6d2fbcad.png"
                            alt=""
                            className="object-cover w-[100px] mx-auto pt-[20px]"
                        />
                        <h1 className="text-[2.2rem] text-center leading-[3.3rem] mb-[10px] font-[500] text-textColor">Giỏ hàng trống</h1>
                    </div>
                </div> */}
                <div className="grid__column-3 mb-[40px]">
                    <div className="w-[100%] bg-[#fff] mb-[10px] p-[20px] rounded-[4px]  shadow-sm">
                        <div className=" flex justify-between ">
                            <p className="text-iconColor text-[1.4rem]">Tạm tính</p>
                            <span className="text-textColor font-[500]  text-[1.4rem]">200.000đ</span>
                        </div>
                        <div className=" flex justify-between mt-[20px]">
                            <p className="text-iconColor text-[1.4rem]">Giảm giá</p>
                            <span className="text-textColor font-[500]  text-[1.4rem]">200.000đ</span>
                        </div>
                        <Line className="w-[100%] h-[1px] bg-lineColor my-[10px]" />
                        <div className=" flex justify-between mt-[20px]">
                            <p className="text-iconColor text-[1.6rem]">Tổng tiền</p>
                            <span className="text-warningColor font-[500]  text-[2rem]">200.000đ</span>
                        </div>
                    </div>
                    <Button
                        textButton="Mua ngay"
                        styleText="text-[1.6rem] leading-[2.4rem] text-[#fff]"
                        className="py-[8px] w-[100%] rounded-[4px] bg-primaryColor "
                    />
                </div>
            </div>
        </div>
    )
}
