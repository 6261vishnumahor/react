import { Link } from "react-router-dom"
import "./navbar.css"
const navbar=()=>{
    return(
        <>
        <article className="ar">
        <div className="div">
       <div><Link to="/">Home</Link></div>
       <div><Link to="/about">about</Link></div>
       <div><Link to="/contact">contact</Link></div>
       </div>
       <div><Link to="/add_to_cart">addcart</Link></div>
       </article>
        </>
    )
}
export default navbar