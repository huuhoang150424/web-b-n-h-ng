import { useState } from "react"


const Model = ({ onClose,listImg,title }) => {
    const [borderImg,setBorderImg]=useState(null)
    const [img,setImg]=useState(0)
    return (
        <div className="fixed inset-0 flex items-center justify-center z-40">
            <div className="fixed inset-0 bg-black opacity-50"></div> {/* Nền mờ */}
            <div className="relative flex gap-[15px] bg-white p-6 rounded-md shadow-md z-50 overflow-hidden w-[60%] h-auto">
                <div className="w-[50%]">
                    <img
                        src={`${listImg[img]}`}
                        className="object-cover inherit"
                        alt=""
                    />
                </div>
                <button onClick={onClose} className="absolute top-[2%] right-[1%] px-4 py-2 font-[700]  bg-gray-300 hover:bg-gray-400 rounded-[50%] transition-all duration-200 ease-in-out text-lineColor">X</button>
                <div className="w-[45%] h-[300px] ">
                    <h1 className="text-center mt-[20px] text-textColor font-[600] text-[1.4rem] ">{title}</h1>
                    <ul className=" grid grid-cols-3 gap-[10px] mt-[20px]">
                        {
                            listImg.map((item,index)=>{
                                return (
                                    <li 
                                        className={`shadow-sm cursor-pointer ${borderImg===index?"border border-primaryColor":""} rounded-[2px]`}
                                        onClick={()=>{setImg(index); setBorderImg(index)}}
                                        key={index}
                                    >
                                        <img   
                                            className="object-cover" 
                                            src={item}
                                            alt=""/>
                                    </li>
                                )
                            })
                        }

                </ul>
                </div>
            </div>
        </div>
    )
}

export default Model
