 import { useState } from "react";
 const Contact=()=>{
//     let a=22
// let b=++a+a++
// alert(b)
// alert("hello world")
// let b=()=>{
//     window.alert("vishnu mahor")
// }
// const[set,viSet]=useState(true)
// const b=()=>{
// viSet(false)
// }
const [ddl,viDdl]=useState(12)
const b=()=>{
    viDdl(ddl+12)
}
    return(

        <>
        {ddl}
        {/* {b} */}
        <h1>this is contact page</h1>
        {/* {(set)?"vinit":"vishnu"} */}
        <button onClick={b}>click</button>
        <marquee behavior="" direction=""></marquee>
      {/* {
        card[0].productImage
      } */}
        </>
    )
}
export default Contact;