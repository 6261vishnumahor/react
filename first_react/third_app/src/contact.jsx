 
 import { Link ,Outlet} from "react-router-dom";
 const Contact=()=>{
    return(
        <>
     <h1>this is contact page</h1>
        <div><Link to="/Contact/details">Details</Link></div>
        <Outlet></Outlet>
        </>
    )
}
export default Contact;