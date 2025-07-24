import { useDispatch, useSelector } from "react-redux"
import{cart} from "./userSlice"
import "./home.css"
import { useNavigate } from "react-router-dom"


const Home=()=>{
    let count = useSelector(state=>state.user.count)
    const dis =useDispatch()
    const nav=useNavigate()
    const ca = [{
        "id":1,
        "productName": "Shiv ji",
        "productPrice": "1500'$",
        "productDiscount": "70% Off ",
        "productImage": "https://th.bing.com/th/id/OIP.ye-BQ56pKoH7VFvHRu39KQHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    }]
    const t=(h)=>{
        console.log(h)
        dis(cart(h))
        nav("/addtocart")
    }
    return(
        <>
        this is home pages
        {count}
          {
                ca.map(b => (
                    <div key={b.id} onClick={()=>{t(b)}}className="cart">
                        <div className="img"><img src={b.productImage} alt=""></img></div>
                        <div className="name">{b.productName}</div>
                        <div className="price">{b.productPrice}</div>
                        <div className="dis">{b.productDiscount}</div>
                    </div>
                ))
            }
        </>
    )
}
export default Home