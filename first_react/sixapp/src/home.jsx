import { useDispatch, useSelector } from "react-redux"
import{cart} from "./userSlice"
import "./home.css"


const Home=()=>{
    const val=useSelector(e=>e.user.store)
    const dis =useDispatch()
    const ca = [{
        "productName": "Shiv ji",
        "productPrice": "1500'$",
        "productDiscount": "70% Off ",
        "productImage": "https://th.bing.com/th/id/OIP.ye-BQ56pKoH7VFvHRu39KQHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    }]
    const t=(h)=>{
        console.log(h)
        dis(cart(h))
    }
    return(
        <>
        this is home pages
          {
                ca.map(b => (
                    <div onClick={()=>{t(h)}}className="cart">
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