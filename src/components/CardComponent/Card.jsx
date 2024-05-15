import {Link} from "react-router-dom"

const Card = ({item}) => {
    return (
        <div className=" bg-white transition-transform my-[5px] duration-300 transform hover:scale-105 rounded-lg overflow-hidden ring-4 ring-green-600 ring-opacity-40 max-w-sm cursor-pointer shadow-lg">
            <div className="relative">
                <img className="w-full" src={`${item?.image[0]}`} alt="Product Image" />
                <div className="absolute top-0 right-0 bg-primaryColor text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
                </div>
            </div>
            <div className="p-4">
                <h3 className=" font-medium mb-[2px] text-gray-600 text-[1.6rem]">{item?.name}</h3>
                <p className="text-textColor text-[1.2rem] mb-4">{item?.description}</p>
                <div className="flex items-center justify-between">
                <span className="font-[600] text-[1.4rem] text-[#ee4d2d]">{item?.price} vnđ</span>
                <Link to={`/productsDetail/${item._id}`} className="bg-blue-500 hover:bg-blue-600 text-[1.2rem] text-white font-bold py-2 px-4 rounded">
                    Buy Now
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Card