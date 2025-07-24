import { useSelector } from "react-redux"

const Addcart=()=>{
    const card=useSelector(e=>e.user.card)
    // const id=useSelector(a=>a.user.id)
    // let count = useSelector(state=>state.user.count)

    return(
        <>
        this is cart pages


         {
                card.map(b => (
                    <div key={b.id} onClick={()=>{t(b)}}className="cart">
                        <div className="img"><img src={b.productImage} alt=""></img></div>
                        <div className="name">{b.productName}</div>
                        <div className="price">{b.productPrice}</div>
                        <div className="dis">{b.productDiscount}</div>
                    </div>
                ))
            }
         {
            card[0].id
           
          }
          {/* {
             count[0].id
          } */}
        </>
       
    )
}
export default Addcart