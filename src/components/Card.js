function Card({item,id,Clicks}){
    const itemClass = item.stat ? " active " + item.stat : "";

    return(
        <div className={"card" + itemClass} onClick={() => Clicks(id)}>
            <img src={item.img} alt="" />
        </div>
    )
}

export default Card;