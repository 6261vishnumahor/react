import { useRef } from "react";
import { useSelector } from "react-redux";

const About=()=>{
const ref=useRef()
const ref1=useRef()
const card = useSelector(e=>e.user.card)
const c=()=>{
   ref.current.src="https://th.bing.com/th/id/OIP.dwHPyOxaeZywNanOnoYklgHaHa?w=163&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
}
const c1=()=>{
   ref.current.src="https://th.bing.com/th/id/OIF.QL0bZT8zwyl3Riv7CFHOzA?w=172&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
}
const b=()=>{
    ref1.current.textContent="MY NAME IS VISHNU MAHOR"
}
    return(
        <>
        <h1>this is about page</h1>
        <div ><img onMouseEnter={c} onMouseLeave={c1} ref={ref} src="https://th.bing.com/th/id/OIF.QL0bZT8zwyl3Riv7CFHOzA?w=172&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" /></div>
<div onMouseEnter={b} ref={ref1}>I AM FROM MORENA, IT IS BAGHI GAD</div>
    {
        card[0].productName
    }
        </>
    )
}
export default About;