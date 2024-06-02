import {Link} from "react-router-dom"
import Rating from "../Rating"

const Card = ({item}) => {
    return (
        <div className="h-[100%] bg-white transition-transform my-[5px] duration-300 transform hover:scale-105 rounded-lg overflow-hidden ring-4 ring-green-600 ring-opacity-40 max-w-sm cursor-pointer shadow-lg">
            <div className="relative">
                <img 
                    className="w-full h-[180px]  object-cover " 
                    src={`${item?.image[0]}`} 
                    alt="Product Image" 
                />
                <div className="absolute top-0 right-0 bg-primaryColor text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
                </div>
            </div>
            <div className="p-4">
                <h3 className=" font-medium mb-[2px] text-gray-600 text-[1.6rem]">{item?.name}</h3>
                <p className="text-textColor text-[1.2rem] mb-4">{item?.description}</p>
                <Rating
                    classList="my-[10px] "
                    styleCountStat="text-[1.2rem] font-[400] text-iconColor mr-[3px] "
                    countStar={5}
                    styleLine="w-[1px] h-[12px] bg-iconColor mx-[3px] "
                    styleText="text-[1.2rem] font-[400] text-iconColor"
                    text="đã bán 1000+"
                />
                <div className="flex items-center gap-[30px] mb-[10px] ">
                    <span className="font-[600] text-[1.4rem] leading-[2.8rem] text-[#ee4d2d]">{item?.price.toLocaleString()} vnđ</span>
                    <div className="bg-gray-200 flex items-center justify-center w-[35px] h-[15px] rounded-[8px]">
                        <p className="text-[1.2rem] text-textColor font-[500]">-26%</p>
                    </div>
                </div>
                <Link to={`/productsDetail/${item._id}`} className="bg-blue-500 hover:bg-blue-600 text-[1.2rem] text-white font-bold py-2 px-4 mt-[10px] rounded ">
                    Buy Now
                </Link>
            </div>
        </div>
    )
}

export default Card