import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Contact from "./contact"
import Navbar from "./navbar"
 
 const App =()=>{
return(
  <>
 <BrowserRouter>
 <Navbar></Navbar>
 <Routes>
  <Route path="/" element={<Home></Home>}></Route>
  <Route path="/about" element={<About></About>}></Route>
  <Route path="/contact" element={<Contact></Contact>}></Route>
 </Routes>
 </BrowserRouter>
 
  </>
)
}
export default App