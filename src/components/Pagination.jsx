const ListItem=['1','2','3','4','5','6','7']

const Pagination = () => {
    return (
        <div>
            <nav className="w-auto h-auto mx-auto flex items-center">
                <div className="pagination ">
                    <i className="fa-solid fa-chevron-left text-textColor text-[1.6rem] font-[700] "></i>
                </div>
                <ul className="flex items-center">
                    {
                        ListItem.map((item,index)=>{
                            return (
                                <li
                                    key={index}
                                    className="pagination "
                                >
                                    <a
                                        href="#"
                                        className="text-textColor text-[1.4rem] font-[600] "
                                    >{item}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="pagination ">
                    <i className="fa-solid fa-chevron-right text-textColor text-[1.6rem] font-[700] "></i>
                </div>
            </nav>
        </div>
    )
}
export default Pagination