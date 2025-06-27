import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
const Navbar = () => {
    const ref = useRef()
    const v = useNavigate()
    const [c1, setC1] = useState("none")

    const r = () => {
        setC1("block")
    }
    const o = () => {
        setC1("none")
    }
    const ho = () => {
        setC1("none")
        v("/")
    }
    const ab = () => {
        setC1("none")
        v("/about")

    }
    const co = () => {
        setC1("none")
        v("/contact")

    }
    return (
        <>
            <div style={{ display: "flex" }}>
                <div onClick={r}>home</div>
                <div>product</div>
                <div>shop</div>
            </div>

            <div onMouseLeave={o} style={{ display: c1 }}>
                <div style={{ width: "200px", height: "200px", backgroundColor: "yellow" }}>
                    <div onClick={ho}> Home</div>
                    <div onClick={ab}> About</div>
                    <div onClick={co}> Contact</div>
                </div>
            </div>
        </>

    )
    


}
export default Navbar

