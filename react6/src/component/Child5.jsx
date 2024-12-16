import React, { useContext } from 'react'
import { stdContext } from '../App2'

export default function Child5() {
    const {name,rollno}=useContext(stdContext);
  return (
    <div>
        <h1>Name : {name}</h1>
        <h1>Roll Number : {rollno}</h1>
      
    </div>
  )
}

