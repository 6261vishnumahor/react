import { useDispatch, useSelector } from "react-redux"
import "./style.css"
import { run ,cart} from "./userSlice"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const arr = [23, 34, 5, 65, 76]
    const obj = [{
        "name": "vishnu",
        "email": "7225vishnumahor@gmail"
    }]

    const ca = [{
        "productName": "Shirt",
        "productPrice":"1500'$",
        "productDiscount": "70% Off",
        "productImage": "https://i5.walmartimages.com/asr/253ef255-84c8-415e-bf8c-9f5e1ee47b6d_2.4d46e344c81c23a97340653031a155ce.png?odnWidth=1000&odnHeight=1000&odnBg=ffffff" 
    }]

    const val = useSelector(e=>e.user.val)
    const st = useSelector(e=>e.user.store)
    const dis = useDispatch()
    const nav=useNavigate()

    const f =()=>{
        dis(run())
    }
    const s=(b)=>{
        console.log(b)
dis(cart(b))
nav('/about')
    }
    return (
        <>
        {val}{st}
        <button onClick={f}> click </button>
            {
                arr.map(e => (
                    <div>{e}</div>
                ))
            }
            {
                obj.map(a => (
                    <div>
                        <div>{a.name}</div>
                        <div>{a.email}</div>
                    </div>
                ))
            }
            {
                ca.map(b => (
                    <div onClick={()=>{s(b)}} className="cart">
                        <div className="img"><img src={b.productImage} alt=""></img></div>
                        <div className="name">{b.productName}</div>
                        <div className="price">{b.productPrice}</div>
                        <div className="dis">{b.productDiscount}</div>
                    </div>
                ))
            }

            <h1>this is home page</h1>
        </>
    )
}
export default Home;
