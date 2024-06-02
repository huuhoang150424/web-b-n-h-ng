import Line from "./Line"

export default function Rating({onRatingClick,classList='',styleCountStat='',countStar,styleStar='',styleText='',text='',styleLine='',styleText1='',text1=''}) {
    const handleClick=onRatingClick || (()=>{})

    return (
        <ul className={`flex items-center ${classList} `} onClick={handleClick}>
            <p className={`${styleCountStat}`}>{countStar}</p>
            {Array(5).fill().map((_,index)=>{
                const isFilled=index<countStar
                return (
                    <li key={index} className="">
                        <i className={`fa-solid fa-star ${isFilled===true?"text-starColor":""} text-lineColor cursor-pointer ${styleStar}`}></i>
                    </li>
                )
            })}
            <p className={`${styleText1}`}>{text1}</p>
            <Line
                className={styleLine}
            />
            <p className={`${styleText}`}>{text}</p>
        </ul>
    )
}