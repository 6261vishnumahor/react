import axios from "axios";
import { useState } from "react";

const Contactdetails=()=>{
const[nm,setNm]=useState("")
const[em,setEm]=useState("")

console.log(nm)
console.log(em)

const obj={
    "name":nm,
    "email":em
}
const sub=()=>{
    axios.post("http://localhost:3000/submited",obj)
    setNm("")
    setEm("")
}

console.log(obj)

    return(
        <>
      <input type="text" value={nm} onChange={(e)=>{setNm(e.target.value)}} placeholder="Enter the name " /><br></br>
      <input type="text" value={em} onChange={(e)=>{setEm(e.target.value)}} placeholder="Enter the email " /><br></br>
      <button onClick={sub}>submit</button>
        </>
    )
}
export default Contactdetails;