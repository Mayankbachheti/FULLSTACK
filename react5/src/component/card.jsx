function Cards({id,image,title,lang,cost}){
    return(
        <div className="boxx">
            <img src={image}></img>
            <h1>{title}</h1>
            <h2>Language:{lang}</h2>
            <h2>Price: ${cost}</h2>
        </div>
        
    )
}

export default Cards;