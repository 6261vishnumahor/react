import { useSelector } from "react-redux"
import "./product.css"
const ProductInfo=()=>{
    const card=useSelector(e=>e.user.card)
    return(
        <>
        this is contact pages
         {
                card.map(b => (
                    <div key={b.id} onClick={()=>{t(b)}}className="cart1">
                        <article className="ar1">
                        <div>
                        <div className="img2"><img src={b.productImage} alt=""></img></div>
                        </div>
                        <div>
                        <div className="name1">{b.productName}</div>
                        <div>PRICE PRODUCT :-</div>
                        <div className="price1">{b.productPrice}</div>
                        <div className="dis1">{b.productDiscount}</div>
                        <div className="category">{b.productCategory}</div>
                         <div className="detail">{b.productdetails}</div>
                        <div className="ratting">{b.productRatting}</div>
                        <div className="ratting">{b.about_this_product}</div>
                        </div>
                        </article>
                    </div>
                ))
            }
        </>
    )
}
export default ProductInfo