import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Resgistration.css";

function Registration({regData}){
    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[pass,setpass]=useState("")

    function getData(e) {
        e.preventDefault();
        const data = {
          name, email, pass
        }
        regData(data);
      }
    return (
        <>
        <h1>Welcome to Registration Page</h1>
        <form className="box">
        <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input onChange={(e)=>{setname(e.target.value)}} type="text" class="form-control" id="examplename" aria-describedby="name" placeholder="Enter name"/>
                
             </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input onChange={(e)=>{setemail(e.target.value)}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                
             </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input onChange={(e)=>{setpass(e.target.value)}} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" class="btn btn-primary" onClick={getData}>Submit</button>
        </form>
        </>
    )
}

export default Registration;