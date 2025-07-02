import { useContext } from "react"
import { MyContext } from "./context.jsx"


const MyPage=()=>{
    const {s,setS,v}=useContext(MyContext)
  
    return(
        <>
        <div style={{color:(s%2==0)?"black":"white",background:(s%2==0)?"white":"black" }}>
          {(s%2==0)?<button onClick={v}>dark </button>:<button onClick={v}>light </button>}
          <h1>jkdshjadsioklasodijk</h1>  
        
        </div>
    
        </>
    )
}
export default MyPage