import { useSelector } from "react-redux"
import "./product.css"
import { useNavigate } from "react-router-dom"
const ProductInfo=()=>{
    const card=useSelector(e=>e.user.card)
    const nav=useNavigate()
    const t=(h)=>{
     nav("/addtocart")
    }
    

    
    return(
        <>
        this is contact pages
         {
                card.map(b => (
                    <div key={b.id} onClick={()=>{t(b)}}className="cart1">
                        <article className="ar1">
                        <div>
                        <div className="img2"><img src={b.productImage} alt=""></img></div>
                        <div className="pro">ABOUT OF PRODUCT</div>
                        <div className="about">{b.about_this_product}</div>
                        </div>
                        <div>
                        <div className="name1">{b.productName}</div>
                        <div className="pro">PRICE PRODUCT :-</div>
                        <div className="price1">{b.productPrice}</div>
                        <div className="dis1">{b.productDiscount}</div>
                        <div  className="pro">CATEGORIES THIS PRODUCT</div>
                        <div className="category">{b.productCategory}</div>

                        <div className="pro">RATTING THIS PRODUCT</div>
                        <div className="ratting">{b.productRatting}</div>
                        <div  className="pro"> productdetails</div>
                         <div className="detail">{b.productdetails}</div>
                         <button>shopnow</button>
                         <button>addtocart</button>
                        </div>
                        </article>
                         
                    </div>
                ))
            }
        </>
    )
}
export default ProductInfo