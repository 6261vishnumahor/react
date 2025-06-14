
import {Link} from "react-router-dom"
const Navbar=()=>{
    return(
        <>
         <Link to="/"> home</Link>
         <Link to="/About"> about</Link>
         <Link to="/Contact"> contact</Link>
        </>
    )
}
export default Navbar;