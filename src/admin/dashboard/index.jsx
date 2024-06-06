import { useState } from "react"
import  AdminUser  from "../componentsAdmin/AdminUser"
import AdminProduct from "../componentsAdmin/AdminProduct"


const menu=[
    {text: 'Quản lý người dùng', keyword:'user',icon:'fa-regular fa-user'},
    {text: 'Quản lý sản phẩm ', keyword:'product',icon:'fa-brands fa-product-hunt'}
]
const renderPage=(key='user')=>{
    switch(key) {
        case 'user': 
            return <AdminUser/>
        case 'product':
            return <AdminProduct/>
        default: 
            return <>hello word</>
    }
}

export const DashBroad = () => {
    const [selectIndex,setSelectIndex]=useState(0)
    const [keywordMenu,setKeywordMenu]=useState('user')
    console.log(selectIndex)
    const handleClickMenu=(index)=>{
        setSelectIndex(index)
    }
    return (
        <div className="flex">
            <div className="grid__column-2 h-[91.5vh] flex flex-col bg-white border-r border-lineColor shadow-sm ">
                <ul className="flex flex-col gap-[4px]">
                    {
                        menu.map((item,index)=>{
                            return (
                                <li key={index} onClick={()=>{ setKeywordMenu(item.keyword);handleClickMenu(index)}} className={`group cursor-pointer flex items-center gap-[10px] px-[14px] py-[12px] ${selectIndex===index?'bg-lineColor border-r-[4px] border-primaryColor ':'hover:bg-lineColor hover:border-r-[4px] hover:border-primaryColor'} transition-all duration-200 ease-in-out `} >
                                    <i className={` ${item.icon} text-[1.8rem] font-[500] ${selectIndex===index?'text-primaryColor':'text-textColor group-hover:text-primaryColor'} `} ></i>
                                    <h2 className={` text-[1.4rem]  font-[400] ${selectIndex===index?'text-primaryColor':'text-textColor group-hover:text-primaryColor'}  `}>{item.text}</h2>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="grid__column-10 ">
                {renderPage(keywordMenu)}
            </div>
        </div>
    )
}
