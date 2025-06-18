import { useState } from "react";

// import { useRef } from "react";
const Home=()=>{
// const ref=useRef();
// const f=()=>{
//    alert("hello world")
// }
// let b=0
// const c=()=>{
//     let a=10;
//     let b=++a
//     console.log(b)
//     window.alert(b)
// }
const[st,setSt]=useState(true)
   const g=()=>{
    setSt(false)
   }
    return(
        <>
        {10<11?"hello":"hii"}

        {(st)?"vishnu":"vinit"}
        <h1>this is a Home</h1>
        <button onClick={g}> click</button>
        {/* <button onClick={c}>del</button> */}
        
        </>
    )
}
export default Home;