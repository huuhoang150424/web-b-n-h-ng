import { useSelector } from "react-redux"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { selectToken, selectUserDetail } from "../../redux/authSlice"
import Line from "../../components/Line"
import { useRef, useState } from "react"
import Button from "../../components/Button"
import { updateUser } from "../../data/Api"
import { success } from "../../components/Message"

const loginSchema = Yup.object().shape({})

export const Profile = () => {
    const user=useSelector(selectUserDetail)
    const token=useSelector(selectToken)
    const [editProfile,setEditProfile]=useState(true)
    const inputImgRef=useRef()
    const imgRef=useRef()
    const handleFileUpload = (e) => {
        const fileImg = e.target.files[0]
        if (fileImg) {
            formik.setFieldValue("avatar", fileImg)
            const reader = new FileReader()
            reader.onload = (event) => {
                imgRef.current.src = event.target.result
            }
            reader.readAsDataURL(fileImg) // Đọc tệp dưới dạng URL dữ liệu
        }
    }

    const handleEditProfile=async (values)=>{
        console.log(values)
        try {
            console.log(values)
            const formData=new FormData()
            formData.append('name', values.name)
            formData.append('email', values.email)
            formData.append('phone', values.phone)
            formData.append('sex', values.sex)
            formData.append('address', values.address)
            if (values.avatar) {
                formData.append('avatar', values.avatar)
            }
            console.log(formData)
            const response=await updateUser(user._id,formData,{
                headers: {
                    //Content-Type: 'multipart/form-data',
                    token: `Bearer ${token}`
                }
            })
            success({messageContent: response.data.message})
            setEditProfile(true)
            return response.data.message
        } catch(err) {
            console.log(`Lỗi ${err}`)
        }
    }
    const formik = useFormik({
        initialValues: {
            name: user?.name || "",
            email: user?.email || "",
            phone: user?.phone || "",
            sex: user?.sex || "",
            address: user?.address || "",
            avatar: user?.avatar || ""
        },
        onSubmit: handleEditProfile,
        validationSchema: loginSchema,
    })

    return (
        <div className="wrapper mb-[40px] mt-[20px] ">
            <div className="flex">
                <div className="grid__column-2 h-[100%]">
                    <div className="w-[100%] flex justify-center items-center gap-[10px] ">
                        <img
                            className="object-cover w-[70px] h-[70px] rounded-[50%] border border-iconColor shadow-sm"
                            src={user?.avatar}
                            alt="user"
                        />
                        <div className="flex flex-col gap-[5px] cursor-pointer">
                            <h2 className="text-[1.6rem] text-black font-[600] ">{user?.name.length>18? `${user?.name.substring(0,18)}...`:user?.name}</h2>
                            <div className="flex items-center gap-[4px] ">
                                <i className="fa-solid fa-pen text-[1.4rem] text-iconColor "></i>
                                <p className="text-[1.4rem] text-iconColor  ">Sửa hồ sơ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid__column-10 h-[100%] bg-white py-[15px] px-[30px] rounded-[4px] shadow-sm">
                    <div className="flex items-center gap-[15px] cursor-pointer ">
                        <i onClick={()=>setEditProfile(true)} className="fa-solid fa-chevron-left text-[1.6rem]"></i>
                        <h1 className="text-[1.6rem] font-[500] leading-[3.2rem] text-textColor">Hồ sơ của tôi</h1>
                    </div>
                    <p className="text-[1.4rem] font-[400] text-textColor">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                    <Line
                        className="bg-lineColor w-[100%] h-[1px] my-[20px] "
                    />
                    {
                        editProfile===true?(<div className="px-[100px]">
                            <div className="flex gap-[40px]">
                                <ul className="flex flex-col gap-[18px] w-[70%] pb-[20px]">
                                    <li className="flex gap-[30px]">
                                        <p className="text-[1.6rem] font-[400] text-iconColor w-[40%] ">Tên đăng nhập:</p>
                                        <span className="text-[1.6rem] font-[400] text-textColor w-[50%] ">{user?.name}</span>
                                    </li>
                                    <li className="flex gap-[30px] ">
                                        <p className="text-[1.6rem] font-[400] text-iconColor w-[40%] ">email:</p>
                                        <span className="text-[1.6rem] font-[400] text-textColor w-[45%] " >{user?.email}</span>
                                    </li>
                                    <li className="flex gap-[30px] ">
                                        <p className="text-[1.6rem] font-[400] text-iconColor w-[40%] ">số điện thoại:</p>
                                        <span className="text-[1.6rem] font-[400] text-textColor w-[45%] " >{!user?.phone?"Chưa có dữ liệu":user?.phone}</span>
                                    </li>
                                    <li className="flex gap-[30px] ">
                                        <p className="text-[1.6rem] font-[400] text-iconColor w-[40%] ">giới tính:</p>
                                        <span className="text-[1.6rem] font-[400] text-textColor w-[45%] " >{!user?.sex?"Chưa có dữ liệu":user?.sex}</span>
                                    </li>
                                    <li className="flex gap-[30px] ">
                                        <p className="text-[1.6rem] font-[400] text-iconColor w-[40%] ">địa chỉ:</p>
                                        <span className="text-[1.6rem] font-[400] text-textColor w-[45%] " >{!user?.address?"Chưa có dữ liệu":user?.address}</span>
                                    </li>
                                </ul>
                                <Line
                                    className="bg-lineColor w-[1px] h-auto "
                                />
                                <img
                                    className="object-cover w-[100px] h-[100px] rounded-[50%] border border-iconColor shadow-sm"
                                    src={user?.avatar}
                                    alt="user"
                                />
                            </div>
                            <Button
                                textButton="Chỉnh sửa"
                                styleText="text-[1.6rem] leading-[2.4rem] text-[#fff]"
                                className="py-[8px] px-[20px] mt-[20px] mb-[10px]  rounded-[4px] bg-primaryColor "
                                onClick={()=>setEditProfile(false)}
                            />
                        </div>):(
                        <div className="px-[100px] flex gap-[40px] ">
                            <form method="PUT" action="/" onSubmit={formik.handleSubmit} className="w-[90%]">
                                <ul className="flex flex-col gap-[18px]  pb-[20px]">
                                    <li className="flex items-center gap-[30px]">
                                        <label htmlFor="name" className="text-[1.6rem] font-[400] text-iconColor w-[40%] ">Tên đăng nhập:</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="outline-none border w-[60%] border-iconColor rounded-[4px] px-[12px] py-[8px] text-[1.4rem] "
                                            placeholder="nhập tên"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                        />
                                    </li>
                                    <li className="flex items-center gap-[30px]">
                                        <label htmlFor="email" className="text-[1.6rem] font-[400] text-iconColor w-[40%] ">Email:</label>
                                        <input
                                            type="text"
                                            id="email"
                                            name="email"
                                            className="outline-none border w-[60%] border-iconColor rounded-[4px] px-[12px] py-[8px] text-[1.4rem] "
                                            placeholder="nhập email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                        />
                                    </li>
                                    <li className="flex items-center gap-[30px]">
                                        <label htmlFor="phone" className="text-[1.6rem] font-[400] text-iconColor w-[40%] ">Số điện thoại:</label>
                                        <input
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            className="outline-none border w-[60%] border-iconColor rounded-[4px] px-[12px] py-[8px] text-[1.4rem] "
                                            placeholder="nhập số điện thoại"
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                        />
                                    </li>
                                    <li className="flex items-center gap-[30px]">
                                        <p htmlFor="sex" className="text-[1.6rem] font-[400] text-iconColor w-[40%] ">Giới tính:</p>
                                        <div className="flex items-center gap-[5px] ">
                                            <label  htmlFor="male" className="text-[1.6rem] font-[400] text-iconColor ">Nam</label>
                                            <input
                                                type="radio"
                                                id="male"
                                                name="sex"
                                                value="Nam"
                                                checked={formik.values.sex === "Nam"}
                                                onChange={formik.handleChange}
                                            />
                                        </div>
                                        <div className="flex items-center gap-[5px] ">
                                            <label  htmlFor="female" className="text-[1.6rem] font-[400] text-iconColor ">Nữ</label>
                                            <input
                                                type="radio"
                                                id="female"
                                                name="sex"
                                                value="Nữ"
                                                checked={formik.values.sex === "Nữ"}
                                                onChange={formik.handleChange}
                                            />
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-[30px]">
                                        <label htmlFor="address" className="text-[1.6rem] font-[400] text-iconColor w-[40%] ">Địa chỉ</label>
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            className="outline-none border w-[60%] border-iconColor rounded-[4px] px-[12px] py-[8px] text-[1.4rem] "
                                            placeholder="nhập địa chỉ"
                                            value={formik.values.address}
                                            onChange={formik.handleChange}
                                        />
                                    </li>
                                </ul>
                                <Button
                                    textButton="Lưu"
                                    styleText="text-[1.6rem] leading-[2.4rem] text-[#fff]"
                                    type="submit"
                                    className="py-[8px] px-[20px] mt-[20px] mb-[10px] rounded-[4px] bg-primaryColor "
                                />
                            </form>
                            <Line
                                className="bg-lineColor w-[1px] h-auto "
                            />
                            <div className="">
                                <div className="cursor-pointer relative w-[100px] h-[100px] rounded-[50%] overflow-hidden ">
                                    <div className="w-[100px] h-[100px] rounded-[50%] absolute top-0 left-0 hover:bg-slate-300 hover:opacity-50 transition-all duration-200 ease-in-out"></div>
                                    <img
                                        className="object-cover w-[100px] h-[100px] rounded-[50%] border border-iconColor shadow-sm"
                                        src={formik.values.avatar || ''}
                                        alt="user"
                                        ref={imgRef}
                                    />
                                </div>
                                <input
                                    type="file"
                                    id="fileInput"
                                    style={{ display: 'none' }}
                                    ref={inputImgRef}
                                    onChange={handleFileUpload}
                                />
                                <Button
                                    textButton="Chọn ảnh"
                                    styleText="text-[1.6rem] leading-[2.4rem] text-[#fff]"
                                    className="py-[8px] px-[20px] mt-[20px] mb-[10px]  rounded-[4px] bg-primaryColor "
                                    onClick={()=>inputImgRef.current.click()}
                                />
                                <p className="w-[100%] text-[1.4rem] font-[400] text-iconColor  ">Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG</p>
                            </div>
                        </div>
                        )
                    }


                </div>
            </div>
        </div>
    )
}
