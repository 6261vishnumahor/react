 import "./style.css"
 import reactlogo from"./assets/react.svg"
import React from "react"
import { FaApple } from "react-icons/fa";
 
 const App = () => {

  const s1 = {
    color: "yellow",
    backgroundColor: "black"
  }
  return (
    <>
      hello
      <h1 style={s1}>eee</h1>
      <h1 style={{ color: "yellow", backgroundColor: "black" }}>eee</h1>
      <h1 >eee</h1>
      <div className="div1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti molestias sed amet eos magnam dolores, laudantium, molestiae a sit saepe error autem impedit quasi aut ex velit enim, eum minus.</div>
      <img src={reactlogo} alt="" />
      <img src="https://thvnext.bing.com/th/id/OIF.H27wQsudn8084aREN0PCVg?cb=thvnext&rs=1&pid=ImgDetMain" alt="" />
      <FaApple/>
    </>
  )
}
export default App;