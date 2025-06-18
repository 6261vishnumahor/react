import { useState } from "react";

const About=()=>{

    const [va,setVa]=useState(34)
    const[name,setName]= useState("")

    const c=()=>{
        window.alert("hello world")
        setVa(va+20)
        setName("vishnu")
    }
    return(
        <>
        {va}
        {name}
        <h1>this is a about page</h1>
        <button onClick={c}>click</button>
        </>
    )
}
export default About;