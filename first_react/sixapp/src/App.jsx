import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./home"
import About from "./about.jsx"
import Contact from "./contact.jsx"

import Navbar from "./navbar.jsx"

const App=()=>{
  
  return(
    <>
    <BrowserRouter >
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
export default App;