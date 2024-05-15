import { useEffect, useState } from "react";
import Slide from "./Slide";


const Slider = ({arraySliders,arraySliders1}) => {
    const [currentIndex,setCurrentIndex]=useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex === arraySliders.length - 1) {
                    return 0;
                } else {
                    return prevIndex + 1
                }
            });
        }, 10000);
        return () => {
            clearTimeout(timer)
        };
    }, [currentIndex, arraySliders.length])
    const handleClickPrev=()=>{
        setCurrentIndex((prevIndex)=>{
            if (prevIndex<=0) {
                return arraySliders.length - 1
            }
            return prevIndex-1
        })
    }
    const handleClickNext=()=>{
        setCurrentIndex((prevIndex)=>{
            if (prevIndex>=arraySliders.length-1) {
                return 0
            }
            return prevIndex+1
        })
    }
    // console.log(currentIndex)
    return (
        <div className=" flex items-center my-[10px]">
            <div className="relative w-[65%] ">
                <div className="absolute left-[2%] top-[50%] w-[30px] h-[30px] cursor-pointer bg-gray-300 hover:bg-gray-400 transition delay-100 rounded-[50%] flex items-center justify-center shadow-md">
                    <i
                        onClick={handleClickPrev}
                        className="fa-solid fa-chevron-left text-[#fff] font-[600] text-[1.2rem]"
                    ></i>
                </div>
                <Slide image={arraySliders[currentIndex]}/>
                <div className="absolute right-[2%] top-[50%] w-[30px] h-[30px] cursor-pointer bg-gray-300 hover:bg-gray-400 transition delay-100 rounded-[50%] flex items-center justify-center shadow-md">
                <i
                    onClick={handleClickNext}
                    className="fa-solid fa-chevron-right text-[#fff] font-[600] text-[1.2rem]"
                ></i>
                </div>
            </div>
            <div className="flex flex-col w-[35%]">
                {
                    arraySliders1.map((item,index)=>{
                        return (
                            <Slide
                                image={item}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Slider