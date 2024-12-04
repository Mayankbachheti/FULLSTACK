
import "../component/card.css"

function Card(prop) {
    
    return (
        <div className="card">
            <h1>{prop.name}</h1>
            <img src={prop.pic}></img>
            <h2>Roll number {prop.roll}</h2>
            
            
        </div>
    );
}

export default Card;
