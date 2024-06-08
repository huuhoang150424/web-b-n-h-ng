import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from 'yup'
import Button from "../../components/Button"
import Line from "../../components/Line"


export default function AdminUser() {
    
    const [hiddenModel,setHiddenModel]=useState(false)




    return (
        <div className="py-[20px] px-[30px]">
            <div className="w-[100%] h-[50px] flex items-center bg-white mb-[20px] rounded-[4px] shadow-sm pl-[20px] border-l-[10px] border-primaryColor">
                <h1 className="text-[1.6rem] text-textColor font-[500] ">Quản lý người dùng</h1>
            </div>
            <div className="w-[100%] h-[100%] flex flex-col  g-white rounded-[4px] shadow-sm bg-white mb-[20px] px-[20px]">
                <h1 className="text-[1.4rem] my-[15px] text-textColor font-[400] ">Danh sách người dùng</h1>
                <Line
                    className="w-[100%] h-[2px] mb-[5px] "
                />
                <Button
                    textButton="thêm mới người dùng"
                    className="my-[10px] py-[8px] px-[12px] w-[185px] flex gap-[5px] bg-primaryColor hover:opacity-70 transition-all duration-200 ease-in-out rounded-[4px] shadow-sm cursor-pointer "
                    icon="fa-solid fa-plus text-[1.6rem] font-[700] text-white"
                    styleText="text-[1.4rem] font-[500] text-white"
                    onClick={()=>setHiddenModel(true)}
                />
            </div>
            <table className="min-w-full divide-y table-fixed rounded-[4px] shadow-sm">
                <thead className="bg-white">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all" type="checkbox" className="w-6 h-6  bg-gray-100 rounded border-gray-300 " />
                                <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="py-[12px] px-[14px] text-[1.1rem] font-[500] tracking-wider text-left text-gray-700 uppercase">Product Name</th>
                        <th scope="col" className="py-[12px] px-[14px] text-[1.1rem] font-[500] tracking-wider text-left text-gray-700 uppercase">Category</th>
                        <th scope="col" className="py-[12px] px-[14px] text-[1.1rem] font-[500] tracking-wider text-left text-gray-700 uppercase">Price</th>
                        <th scope="col" className="py-[12px] px-[14px] text-[1.1rem] font-[500] tracking-wider text-right text-gray-700 uppercase">
                            <div className="flex justify-end items-center h-full">
                                Hành động
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-100">
                        <td className="p-4 w-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-1" type="checkbox" className="w-6 h-6  bg-gray-100 rounded border-gray-300 " />
                                <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <td className="py-[12px] px-[14px] text-[1.4rem] text-gray-900 whitespace-nowrap">Apple Imac 27</td>
                        <td className="py-[12px] px-[14px] text-[1.4rem] text-gray-500 whitespace-nowrap">Desktop PC</td>
                        <td className="py-[12px] px-[14px] text-[1.4rem] text-gray-900 whitespace-nowrap">$1999</td>
                        <td className="py-[12px] px-[14px] text-[1.4rem] text-right whitespace-nowrap ">
                            <div className="flex gap-[10px] justify-end">
                                <i className="fa-regular fa-trash-can text-[1.8rem] cursor-pointer font-[400] text-textColor hover:text-gray-600 transition-all duration-200 ease-in-out "></i>
                                <i className="fa-solid fa-pen-to-square text-[1.8rem] cursor-pointer font-[400] text-textColor hover:text-gray-600 transition-all duration-200 ease-in-out "></i>
                            </div>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="p-4 w-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-1" type="checkbox" className="w-6 h-6  bg-gray-100 rounded border-gray-300 " />
                                <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <td className="py-[12px] px-[14px] text-[1.4rem] text-gray-900 whitespace-nowrap">Apple Imac 27</td>
                        <td className="py-[12px] px-[14px] text-[1.4rem] text-gray-500 whitespace-nowrap">Desktop PC</td>
                        <td className="py-[12px] px-[14px] text-[1.4rem] text-gray-900 whitespace-nowrap">$1999</td>
                        <td className="py-[12px] px-[14px] text-[1.4rem] text-right whitespace-nowrap ">
                            <div className="flex gap-[10px] justify-end">
                                <i className="fa-regular fa-trash-can text-[1.8rem] cursor-pointer font-[400] text-textColor hover:text-gray-600 transition-all duration-200 ease-in-out "></i>
                                <i className="fa-solid fa-pen-to-square text-[1.8rem] cursor-pointer font-[400] text-textColor hover:text-gray-600 transition-all duration-200 ease-in-out "></i>
                            </div>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="p-4 w-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-1" type="checkbox" className="w-6 h-6  bg-gray-100 rounded border-gray-300 " />
                                <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <td className="py-[12px] px-[14px] text-[1.4rem] text-gray-900 whitespace-nowrap">Apple Imac 27</td>
                        <td className="py-[12px] px-[14px] text-[1.4rem] text-gray-500 whitespace-nowrap">Desktop PC</td>
                        <td className="py-[12px] px-[14px] text-[1.4rem] text-gray-900 whitespace-nowrap">$1999</td>
                        <td className="py-[12px] px-[14px] text-[1.4rem] text-right whitespace-nowrap ">
                            <div className="flex gap-[10px] justify-end">
                                <i className="fa-regular fa-trash-can text-[1.8rem] cursor-pointer font-[400] text-textColor hover:text-gray-600 transition-all duration-200 ease-in-out "></i>
                                <i className="fa-solid fa-pen-to-square text-[1.8rem] cursor-pointer font-[400] text-textColor hover:text-gray-600 transition-all duration-200 ease-in-out "></i>
                            </div>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-100">
                        <td className="p-4 w-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-1" type="checkbox" className="w-6 h-6  bg-gray-100 rounded border-gray-300 " />
                                <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <td className="py-[12px] px-[14px] text-[1.4rem] text-gray-900 whitespace-nowrap">Apple Imac 27</td>
                        <td className="py-[12px] px-[14px] text-[1.4rem] text-gray-500 whitespace-nowrap">Desktop PC</td>
                        <td className="py-[12px] px-[14px] text-[1.4rem] text-gray-900 whitespace-nowrap">$1999</td>
                        <td className="py-[12px] px-[14px] text-[1.4rem] text-right whitespace-nowrap ">
                            <div className="flex gap-[10px] justify-end">
                                <i className="fa-regular fa-trash-can text-[1.8rem] cursor-pointer font-[400] text-textColor hover:text-gray-600 transition-all duration-200 ease-in-out "></i>
                                <i className="fa-solid fa-pen-to-square text-[1.8rem] cursor-pointer font-[400] text-textColor hover:text-gray-600 transition-all duration-200 ease-in-out "></i>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            {
                hiddenModel && (
                    <div className="fixed inset-0 flex  items-center justify-center z-40 ">
                        <div className="fixed inset-0 bg-black opacity-50"></div>
                        <div className="relative flex flex-col gap-[15px] bg-white p-[20px] rounded-md shadow-md z-50 overflow-hidden w-[60%] h-auto">
                            <button onClick={()=>setHiddenModel(false)} className="absolute top-[10%] right-[2%] px-4 py-2 font-[700]  bg-gray-300 hover:bg-gray-400 rounded-[50%] transition-all duration-200 ease-in-out text-lineColor">X</button>
                            <h1 className="text-[1.6rem] mt-[20px] mb-[15px] text-textColor font-[500]">Tạo mới người dùng</h1>
                            <form className="flex flex-col gap-[15px] " method="POST" action="/system/admin">
                                <div className="flex flex-col gap-[10px] ">
                                    <label htmlFor="name" className="text-[1.6rem] font-[400] text-iconColor  ">Tên đăng nhập:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="outline-none border w-[60%] border-iconColor rounded-[4px] px-[12px] py-[8px] text-[1.4rem] "
                                        placeholder="nhập tên"
                                        value=""
                                        //onChange={formik.handleChange}
                                    />
                                </div>
                                <div className="flex flex-col gap-[10px] ">
                                    <label htmlFor="password" className="text-[1.6rem] font-[400] text-iconColor  ">Mật khâu:</label>
                                    <input
                                        type="text"
                                        id="password"
                                        name="password"
                                        className="outline-none border w-[60%] border-iconColor rounded-[4px] px-[12px] py-[8px] text-[1.4rem] "
                                        placeholder="nhập mật khẩu"
                                        value=""
                                        //onChange={formik.handleChange}
                                    />
                                </div>
                                <Button
                                    textButton="Tạo mới"
                                    styleText="text-[1.6rem] leading-[2.4rem] text-[#fff]"
                                    type="submit"
                                    className="py-[8px] px-[20px] mt-[20px] mb-[10px] rounded-[4px] w-[100px] bg-primaryColor "
                                />
                            </form>
                        </div>
                    </div>
                )
            }

        </div>
    )
}
