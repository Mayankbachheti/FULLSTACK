import { useState } from "react";

function Color(){
const [color,setcolor]=useState("Green")

return <>
<h1 style={{color:color}}> my fav colour is {color}</h1>
<button  onClick={()=>setcolor("red")}>red</button>
<button  onClick={()=>setcolor("green")}>green</button>
<button  onClick={()=>setcolor("blue")}>blue</button>
<button  onClick={()=>setcolor("pink")}>pink</button>
</>
}

export default  Color;