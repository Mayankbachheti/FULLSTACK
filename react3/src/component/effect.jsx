import { useEffect, useState } from "react";
import pic2 from "../image/barney.jpg"
import './style.css';

function Eff(){
 const [Rotate,setRotate]=useState("")
 const [Zoomin,setZoomin]=useState("")
 const [Zoomout,setZoomout]=useState("")

 


 return (
    <>
    <img src={pic2} className={`${Rotate} ${Zoomin} ${Zoomout}`}></img>
    <br></br>
    <button  onClick={()=>setRotate("rotate")}>Rotate</button>
    <button  onClick={()=>setZoomin("zoom-in")}>ZOOM in</button>
    <button  onClick={()=>setZoomout("zoom-out")}>Zoom out</button>
 </>)
}

export default Eff;