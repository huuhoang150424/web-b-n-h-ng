import Line from "./Line"
export default function Footer() {
    return (
        <footer className="grid__container bg-[#fff] h-[100%] py-[16px]">
            <div className="wrapper__content  flex gap-[30px] ">
                <div className="grow-[1]">
                    <h1 className="text-[1.6rem] font-[500] text-textColor mb-[12px] ">Hỗ trợ khách hàng</h1>
                    <ul className="flex flex-col gap-[8px]">
                        <li className="">
                            <p className="footer__text ">Hotline: <strong>1900-6035</strong><br/>(1000 đ/phút, 8-21h kể cả T7, CN)</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Các câu hỏi thường gặp</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Gửi yêu cầu hỗ trợ</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Hướng dẫn đặt hàng</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Phương thức vận chuyển</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Chính sách đổi trả</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Hướng dẫn trả góp</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Chính sách hàng nhập khẩu</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Hỗ trợ khách hàng: hotro@tiki.vn</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Báo lỗi bảo mật: security@tiki.vn</p>
                        </li>
                    </ul>
                </div>
                <div className="grow-[1]">
                    <h1 className="text-[1.6rem] font-[500] text-textColor mb-[12px] ">Về Tiki</h1>
                    <ul className="flex flex-col gap-[8px]">
                        <li className="">
                            <p className="footer__text ">Giới thiệu Tiki</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Tiki Blog</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Tuyển dụng</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Chính sách bảo mật thanh toán</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Chính sách bảo mật thông tin cá nhân</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Chính sách giải quyết khiếu nại</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Điều khoản sử dụng</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Giới thiệu Tiki Xu</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Gói hội viên VIP</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Tiếp thị liên kết cùng Tiki</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Bán hàng doanh nghiệp</p>
                        </li>
                        <li className="">
                            <p className="footer__text "></p>
                        </li>
                    </ul>
                </div>
                <div className="grow-[1]">
                    <h1 className="text-[1.6rem] font-[500] text-textColor mb-[12px] ">Hợp tác và liên kết</h1>
                    <ul className="flex flex-col gap-[8px]">
                        <li className="">
                            <p className="footer__text ">Điều kiện vận chuyển</p>
                        </li>
                        <li className="">
                            <p className="footer__text ">Bán hàng cùng Tiki</p>
                        </li>
                    </ul>
                    <h1 className="text-[1.6rem] font-[500] text-textColor my-[12px] ">Hợp tác và liên kết</h1>
                    <img
                        //src={logoFooter}
                        className=""
                    />
                </div>
                <div className="grow-[1]">
                    <h1 className="text-[1.6rem] font-[500] text-textColor mb-[12px] ">Phương thức thanh toán</h1>
                    <h1 className="text-[1.6rem] font-[500] text-textColor mb-[12px] ">Dịch vụ giao hàng</h1>
                </div>
                <div className="grow-[1]">
                    <h1 className="text-[1.6rem] font-[500] text-textColor  mb-[12px]">Dịch vụ giao hàng</h1>
                    <ul className="flex gap-[8px]">
                        <li className="">
                            <img
                                //src={facebook}
                                alt=""
                                className=""
                            />
                        </li>
                        <li className="">
                            <img
                                //src={youtobe}
                                alt=""
                                className=""
                            />
                        </li>
                        <li className="">
                            <img
                                //src={zalo}
                                alt=""
                                className=""
                            />
                        </li>
                    </ul>
                    <h1 className="text-[1.6rem] font-[500] text-textColor  my-[12px]">Tải ứng dụng trên điện thoại</h1>
                </div>
                <Line
                    className=""
                />
                <div>
                </div>
            </div>
        </footer>
    )
}