 import { BrowserRouter,Routes,Route, } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Contactdetails from "./Contactdetails";
 const App=()=>{
  return(
    <>
  <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
    <Route path="/" element= {<Home></Home>}> </Route>
    <Route path="/About" element={<About></About>}> </Route>
    <Route path="/Contact" element={<Contact></Contact>}>

    <Route path="/Contact/details" element={<Contactdetails></Contactdetails>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}
export default App;