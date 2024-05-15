import slider1 from '../../assets/img/slider1.webp'
import slider2 from '../../assets/img/slider2.webp'
import slider3 from '../../assets/img/slider3.webp'
import slider4 from '../../assets/img/slider4.png'
import slider5 from '../../assets/img/slider5.png'
import Slider from "../../components/slider/Slider";
import ListCard from "../../components/CardComponent/ListCard";
import NavBar from "../../components/NavBar";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from 'react'
import { getProducts } from '../../data/Api'

const arraySliders=[slider1,slider2,slider3]
const arraySliders1=[slider4,slider5]
const typeProducts=[
    'TV',
    'Tủ lạnh',
    'Máy giặt',
    'Điều hòa',
    'Quần áo'
]
const HomePage = () => {
    const [products,setProducts]=useState([])
    console.log(products)
    useEffect(()=>{
        getProducts({
            params: {limit: 5}
        })
            .then(({data})=>setProducts(data.data))
            .catch((err)=>{console.log(err)})
    },[])
    return (
        <div className=" pb-[40px]">
            <div className="wrapper flex h-auto ">
                <div className="grid__column-2">
                    <NavBar
                        ListItem={typeProducts}
                    />
                </div>
                <div className="grid__column-10 ">
                    <Slider
                        arraySliders={arraySliders}
                        arraySliders1={arraySliders1}
                    />
                    <ListCard
                        ListProduct={products}
                    />
                </div>
            </div>
            <div className="w-full flex justify-center mt-[10px]"><Pagination/></div>
        </div>
    );
};

export default HomePage;