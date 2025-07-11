import { FiChevronLeft } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { VscDash } from "react-icons/vsc";
import "./shopnow.css"
import { useState } from "react";
import { BsDisplay } from "react-icons/bs";
const Shopnow = () => {
    const [v, setV] = useState(0)
    const [s, setS] = useState(0)
   
    const plus = () => {
        setV(v+1)
    }
    const plus1 = () => {
        setS(s+1)
    }
    return (
        <>
            <div>HOME<FiChevronLeft />SHOP </div>
            <div id="v"></div>
            <section className="v4">

                <div className="v5">

                    <div ><a href="#">Categories</a></div>
                    <div>
                        <div>
                            {(v%2==0)? <div onClick={plus}><VscDash /></div>:<div onClick={plus}><GoPlus /></div>}
                        </div>
                        {/* <div onClick={plus}><VscDash /></div>
                        <div onClick={plus1} style={{ display: setV }}> <GoPlus /></div> */}
                    </div>

                </div>

                <div>
                 {(v%2==0)?<ul onClick={plus} className="v8">
                        <li className="v3"><a href="">Accesaries</a></li>
                        <li className="v3"><a href="">Bags</a></li>
                        <li className="v3"><a href="">Hates</a></li>
                        <li className="v3"><a href="">Jakets</a></li>
                        <li className="v3"><a href="">Shose</a></li>
                        <li className="v3"><a href="">Sunglashes</a></li>

                    </ul>: <div onClick={plus}> </div>}
                </div>
            
            <div id="v2"></div>
           <div className="v5">
            <div>Price</div>
            {(s%2==0)? <div onClick={plus1}><VscDash /></div>:<div onClick={plus1}><GoPlus /></div>}
            </div>
            <div className="v6">
                <input type="range" name="range" />
            </div>
            {(s%2==0)?
            <div className="v7">
                <div>
                    Price: $30 — $300
                </div>
                <button>FILTER</button>
            </div>: <div onClick={plus1}> </div>}

            <div id="v2"></div>
            <div className="v5">
                <div>Color</div>
            {(s%2==0)? <div onClick={plus1}><VscDash /></div>:<div onClick={plus1}><GoPlus /></div>}
            </div>
           <ul className="v9">
            <li id="v10">Light-blue</li>
            <li> Black</li>
            <li> Green</li>
            <li>Red</li>
            <li>Indigo</li>
           </ul>
            </section >
        </>
    )
}
export default Shopnow;