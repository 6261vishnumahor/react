import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";

function App(){
  return(
    <>
    
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}
export default App;