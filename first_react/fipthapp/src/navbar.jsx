import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
        <>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        </>
    )
}
export default Navbar;
