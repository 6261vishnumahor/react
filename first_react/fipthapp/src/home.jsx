import "./style.css"

const Home = () => {
    const arr = [23, 34, 5, 65, 76]
    const obj = [{
        "name": "vishnu",
        "email": "7225vishnumahor@gmail"
    }]

    const cart = [{
        "productName": "Shirt",
        "productPrice":"1500'$",
        "productDiscount": "70% Off",
        "productImage": <img  width={250} height={300}   src="https://i5.walmartimages.com/asr/253ef255-84c8-415e-bf8c-9f5e1ee47b6d_2.4d46e344c81c23a97340653031a155ce.png?odnWidth=1000&odnHeight=1000&odnBg=ffffff" alt="image not found"></img>
    }]
    return (
        <>
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
                cart.map(b => (
                    <div className="cart">
                        <div className="img">{b.productImage}</div>
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
