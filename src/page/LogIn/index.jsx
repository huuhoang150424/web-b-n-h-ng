import { useFormik } from "formik"
import {Link, useNavigate} from "react-router-dom"
import {useDispatch,useSelector} from 'react-redux'
import * as Yup from 'yup'
import loginImg from "../../assets/img/loginImg.jpg"
import Button from "../../components/Button"
import { login } from "../../redux/action/auth"
import { selectSuccess,selectError,selectLoading } from "../../redux/authSlice"
import { success,error } from "../../components/Message"
import { useEffect } from "react"

const loginSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập tên đăng nhập."),
    password: Yup.string().required("Vui lòng nhập mật khẩu.")
    //.min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
})

const LogIn = () => {
    const dispatch=useDispatch()
    const isSuccess=useSelector(selectSuccess)
    const isLoading=useSelector(selectLoading)
    const isError=useSelector(selectError)
    const navigate=useNavigate()
    const handleSubmit=async (values)=>{
        dispatch(login(values))
    }
    const formik = useFormik({
        initialValues: {
            name: "",
            password: "",
        },
        onSubmit: handleSubmit,
        validationSchema: loginSchema,
    })
    useEffect(()=>{
        if (isSuccess) {
            success({ messageContent: "Đăng nhập thành công!" });
            navigate("/")
        }
    },[isSuccess])
    return (
        <div className="fixed inset-0 flex items-center justify-center z-40">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="relative flex justify-between bg-white  rounded-md shadow-md z-50 overflow-hidden w-[60%] h-auto">
                <div className="w-[55%] px-[30px] py-[40px]">
                    <h1 className="text-[2.6rem] font-[600] text-textColor leading-[3.9rem] mb-[10px]">Đăng nhập</h1>
                    <p className="text-[1.6rem] font-[400] text-textColor leading-[2.4rem] mb-[10px]">Đăng nhập tài khoản</p>
                    <form className="" onSubmit={formik.handleSubmit} method="POST">
                        <div className="flex flex-col mb-[10px] ">
                            <div className="flex mb-[5px] "><label className="text-[1.6rem] font-[400] leading-[2.4rem] text-textColor" htmlFor="name">Tài Khoản</label><span className="ml-[5px] font-[800] text-[#f74955] text-[1.6rem]">*</span></div>
                            <input 
                                className="outline-none bg-[#f7f7f7] w-full py-[8px] px-[14px] text-[1.6rem] rounded-[4px] text-lineColor border border-lineColor focus:border-1 focus:border-primaryColor" 
                                id="name"
                                name="name"
                                placeholder="please enter name..."
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <span className="text-[1.2rem] font-[500] text-warningColor ">{formik.errors.name}</span>
                            ):null}
                        </div>
                        <div className="flex flex-col mb-[15px]">
                            <div className="flex mb-[5px] "><label className="text-[1.6rem] font-[400] leading-[2.4rem] text-textColor" htmlFor="password">Mật khẩu</label><span className="ml-[5px] font-[800] text-[#f74955] text-[1.6rem]">*</span></div>
                            <input 
                                className="outline-none bg-[#f7f7f7] w-full py-[8px] px-[14px] text-[1.6rem] rounded-[4px] text-lineColor border border-lineColor focus:border-1 focus:border-primaryColor" 
                                id="password"
                                name="password"
                                placeholder="please enter password..."
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <span className="text-[1.2rem] font-[500] text-warningColor ">{formik.errors.password}</span>
                            ):null}
                        </div>
                        <a className="text-[1.3rem] text-primaryColor font-[600] " href="#">Quên mật khẩu?</a>
                        <Button
                            className="my-[10px] px-[12px] py-[8px] bg-primaryColor w-full shadow-md transition-all duration-200 ease-in-out hover:bg-opacity-90"
                            textButton="Đăng nhập"
                            styleText="text-[#fff] text-[1.8rem] font-[500] leading-[2.7rem]"
                            type="submit"
                        />
                    </form>
                    <div className="flex gap-[4px] ">
                        <p className="text-[1.4rem] ">Bạn chưa có tài khoản? </p><Link to="/register" className="text-[1.4rem] font-[500] text-primaryColor ">Đăng ký</Link>
                    </div>
                </div>
                <div className="w-[40%] ">
                    <img
                        src={loginImg}
                        className="object-cover"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default LogIn