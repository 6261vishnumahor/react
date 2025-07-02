import {  createContext, useState } from "react";

const MyContext=createContext()
 const MyProvider=({children})=>{
    const[s,setS]=useState(0)
const v=()=>{
   setS(s+1)
}


    return(
        <>
        <MyContext.Provider value={{s,setS,v}}>
           {children}
        </MyContext.Provider>
        </>
    )
 }
 export{MyContext,MyProvider}
 