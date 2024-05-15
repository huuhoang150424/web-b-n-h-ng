import Card from "./Card";


const ListCard = ({ListProduct}) => {
    return (
        <div className="my-[20px] grid grid-cols-5 gap-[20px] ">
            {ListProduct.map((item, index) => (
                <Card 
                    key={index}
                    item={item}
                />
            ))}
        </div>
    )
}
export default ListCard