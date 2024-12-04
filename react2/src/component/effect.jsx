import { useEffect, useState } from "react";
import pic2 from "./image/barney.jpg"

function Eff(){
 const [Rotate,setRotate]=useState("")
 return (
    <>
    <img src={pic2}></img>
    <button  onClick={()=>set(Total+1)}>Ted</button>
    <button  onClick={()=>setTotal(Total-1)}>Barney</button>
    <button  onClick={()=>setTotal(Total-1)}>Barney</button>
 </>)
}

export default Eff;