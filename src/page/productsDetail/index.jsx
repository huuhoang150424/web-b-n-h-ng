import { useState } from "react";
import aokhoac from "../../assets/img/aokhoac.webp"
import aokhoac1 from "../../assets/img/aokhoac1.webp"
import aokhoac2 from "../../assets/img/aokhoac2.webp"
import Model from "../../components/Model";
import Line from "../../components/Line"
import Button from "../../components/Button"
const ListImg=[aokhoac1,aokhoac2,aokhoac1,aokhoac,aokhoac2]


const ProductsDetail = () => {
    const [closeModel,setCloseModel]=useState(false)
    const [hoverModel,setHoverModel]=useState(false)
    const [changeImg,setChangeImg]=useState(ListImg[1])
    const [hoverBorder,setHoverBorder]=useState(null)
    const [counter,setCounter]=useState(0)
    const handleMouseEnter=(index)=>{
        setChangeImg(()=>{
            return ListImg[index]
        })
        setHoverBorder(index)
    }
    const handleCloseModel=()=>{setCloseModel((prev)=>!prev)}
    return (
        <div className="grid__column-10 mx-auto p-[50px]">
            <div className="mx-auto mb-[-20px] flex bg-[#fff] p-[10px] gap-[30px] rounded-[4px] shadow-sm">
                <div className="flex flex-col w-[45%]  gap-[10px]">
                    <div 
                        className="relative"  
                        onMouseLeave={()=>setHoverModel(false)}
                    >
                        <img
                            src={changeImg}
                            className="object-cover shadow-sm cursor-pointer "
                            onMouseEnter={()=>setHoverModel(true)}
                            alt=""
                        />
                        {/* model */}
                        {hoverModel && <div onClick={handleCloseModel} className="absolute  cursor-pointer w-[100%] h-[100%] top-0 left-0 bg-black opacity-50"></div>}
                    </div>
                    <div className="  w-full ">
                        <ul className="flex gap-[10px]">
                        {
                            ListImg.map((imgItem, index) => {
                                return (
                                    <li
                                        className={`shadow-sm object-cover cursor-pointer border ${hoverBorder===index?"border border-primaryColor":""}`}
                                        onMouseEnter={()=>handleMouseEnter(index)}
                                        key={index}
                                    >
                                        <img
                                            className=""
                                            src={imgItem}
                                            alt=""
                                        />
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
                <div className="w-[50%]">
                    <h1 className="text-[1.8rem] font-[500] text-textColor leading-[2.4rem] ">Áo Sơ Mi Nam Ngắn Tay Phối Cà Vạt Oversize , Áo Sơ Mi Nam Caravat Form Rộng, Basic, Phong Cách Hàn Quốc-By ZONEF [SMC]</h1>
                    <div className="flex items-center gap-[5px] my-[10px]">
                        <span className=" text-[1.4rem] text-primaryColor underline leading-[2.1rem] ">4.9</span>
                        <ul className="flex items-center ">
                            {
                                Array(5).fill().map((_,index)=>{
                                    return (
                                        <li key={index} className=""><i className="fa-solid fa-star text-[1.4rem] text-primaryColor leading-[2.1rem] "></i></li>
                                    )
                                })
                            }
                        </ul>
                        <Line
                            className="w-[1px] h-[20px]"
                        />
                        <h3 className="text-textColor text-[1.4rem]">6k</h3>
                        <span className="text-lineColor text-[1.4rem]">Lượt mua</span>
                    </div>
                    <div className="flex w-full bg-slate-100 py-[14px] px-[12px] rounded-[4px] gap-[5px] mb-[20px]">
                        <span className="text-[1.4rem] text-primaryColor font-[600] underline">đ</span>
                        <h1 className="text-[2.2rem] text-primaryColor font-[600]">200.000</h1>
                    </div>
                    <div className="flex items-center gap-[5px] mb-[10px]">
                        <h3 className="text-textColor text-[1.6rem]">Giao đến: </h3>
                        <span className="text-lineColor text-[1.6rem]">Hà Nội</span>
                        <a className="ml-[10px] text-[1.6rem] text-primaryColor font-[500] cursor-pointer " href="">Đổi địa chỉ</a>
                    </div>

                    <h3 className="text-[1.6rem] font-[500] text-textColor mb-[8px]">Số lượng</h3>
                    <div className="flex w-auto">
                        <div onClick={()=>{setCounter(counter<=0?0:counter-1)}} className="flex justify-center items-center border border-lineColor px-[12px] py-[6px] rounded-[2px] cursor-pointer ">
                            <i className="fa-solid fa-minus text-[1.4rem] font-[600] text-lineColor outline-none"></i>
                        </div>
                        <input
                            className="w-[10%] border border-lineColor py-[6px]  text-center rounded-[2px] text-[1.4rem] font-[600] text-textColor outline-none"
                            value={`${counter}`}
                        />
                        <div onClick={()=>{setCounter(counter>=99?0:counter+1)}} className="flex justify-center items-center border border-lineColor px-[12px] py-[6px] rounded-[2px] cursor-pointer ">
                            <i className="fa-solid fa-plus text-[1.4rem] font-[600] text-lineColor outline-none"></i>
                        </div>
                    </div>
                    <Line
                        className="w-[full] h-[1px] my-[20px]"
                    />
                    <div className="flex gap-[20px] ">
                        <Button
                            className="py-[10px] px-[40px] bg-[#fff] border border-primaryColor  shadow-md"
                            textButton="Thêm vào giỏ hàng"
                            styleText="text-[1.6rem] font-[600] text-primaryColor"
                        />
                        <Button
                            className="py-[10px] px-[40px] bg-primaryColor shadow-md"
                            textButton="Mua"
                            styleText="text-[1.6rem] font-[600] text-[#fff]"
                        />
                    </div>
                </div>
            </div>
            {closeModel &&
                <Model
                    onClose={handleCloseModel}
                    listImg={ListImg}
                    title={"ÁO KHOÁC BOMBER NAM NỮ BASIC 2024"}
                />
            }
        </div>
    );
};

export default ProductsDetail;