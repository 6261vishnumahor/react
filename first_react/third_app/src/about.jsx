import "./about.css"
const About = () => {
    const arr = [63, 45, 45, 67, 4, 6, 76]

    const dd=[{
        "name":"vishnu",
        "email":"7225vishnumahor@gmail.com"
    }]

    const dev = [
        {
            "producted": "shoes",
            "productprice": 3000,
            "discount": "30% OFF",
            "image": <img width="200px" border-radius="20px" src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" ></img>
        },
        {
             "producted": "flower",
            "productprice": 3000,
            "discount": "30% OFF",
            "image":<img width="200px" src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg"></img>
        }
    ]
    return (
        <>
            <h1>this is about page</h1>
            {
                arr.map(e => (

                    <div>
                        <div>{e}</div>
                    </div>

                ))
            }
            {
                dd.map(a => (
                    <div>
                        <div>{a.name}</div>
                        <div>{a.email}</div>
                    </div>
                ))
            }
            {
                dev.map(b => (
                    <div className="div1">
                        
                        <div className="img">{b.image}</div>
                        <div className="productname">{b.producted}</div>
                        <div className="price">{b.productprice}</div>
                        <div className="disc">{b.discount}</div>
                    </div>
                ))
            }
        </>
    )
}
export default About