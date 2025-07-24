import { useDispatch, useSelector } from "react-redux"
import { MdOutlineStar } from "react-icons/md";
import { cart } from "./userSlice"
import "./home.css"
import { useNavigate } from "react-router-dom"



const Home = () => {
    let count = useSelector(state => state.user.count)
    const dis = useDispatch()
    const nav = useNavigate()
    const ca = [{
        "id": 1,
        "productName": "shose",
        "productPrice": "1500'$",
        "productDiscount": "70% Off ",
        "productImage": "https://media.istockphoto.com/id/1495664030/photo/sneakers-on-dark-gray-concrete-background-texture-of-the-old-dark-stone-or-broken-brick-the.jpg?s=612x612&w=0&k=20&c=o2yWDPIHm6pTUw5MKhGQ0X83cfGM2RUuO7RGCCrrsU8=",
        "productdetails": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quis eligendi voluptates inventore tempora quaerat, qui ex ipsam? Molestiae aperiam, libero est vitae eum blanditiis dolorem itaque ut placeat deleniti. ",
        "productCategory": "history",
        "productRatting": <MdOutlineStar />,
        "about_this_product": <ul>
            <li>Hiking boots: Rugged and supportive, often waterproof and built from durable materials for outdoor use</li>
            <li>Work and combat boots: Heavy-duty, sometimes steel-toed, made for protection and industrial tasks</li>
            <li>Chelsea boots: Sleek, ankle-length with elastic sides—versatile for casual and smart outfits</li>
            <li>Cowboy boots: Western-styled with distinctive heel and pointed toe—fashion-forward and rugged</li>
            <li>Slides: Single-band slip-ons, trending in casual street fashion</li>
        </ul>
    },
    {
        "id": 1,
        "productName": "shose",
        "productPrice": "1500'$",
        "productDiscount": "70% Off ",
        "productImage": "https://www.shutterstock.com/image-photo/new-trendy-white-sports-sneaker-260nw-1866449773.jpg",
        "productdetails": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quis eligendi voluptates inventore tempora quaerat, qui ex ipsam? Molestiae aperiam, libero est vitae eum blanditiis dolorem itaque ut placeat deleniti. ",
        "productCategory": "fashion",
        "productRatting": <MdOutlineStar />,
        "about_this_product": <ul>
            <li>Hiking boots: Rugged and supportive, often waterproof and built from durable materials for outdoor use</li>
            <li>Work and combat boots: Heavy-duty, sometimes steel-toed, made for protection and industrial tasks</li>
            <li>Chelsea boots: Sleek, ankle-length with elastic sides—versatile for casual and smart outfits</li>
            <li>Cowboy boots: Western-styled with distinctive heel and pointed toe—fashion-forward and rugged</li>
            <li>Slides: Single-band slip-ons, trending in casual street fashion</li>
        </ul>
    },
    {
        "id": 1,
        "productName": "shose",
        "productPrice": "1500'$",
        "productDiscount": "70% Off ",
        "productImage": "https://backend.orbitvu.com/sites/default/files/image/shoe-photography-mini_1.jpg",
        "productdetails": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quis eligendi voluptates inventore tempora quaerat, qui ex ipsam? Molestiae aperiam, libero est vitae eum blanditiis dolorem itaque ut placeat deleniti. ",
        "productCategory": "fashion",
        "productRatting": <MdOutlineStar />,
        "about_this_product": <ul>
            <li>Hiking boots: Rugged and supportive, often waterproof and built from durable materials for outdoor use</li>
            <li>Work and combat boots: Heavy-duty, sometimes steel-toed, made for protection and industrial tasks</li>
            <li>Chelsea boots: Sleek, ankle-length with elastic sides—versatile for casual and smart outfits</li>
            <li>Cowboy boots: Western-styled with distinctive heel and pointed toe—fashion-forward and rugged</li>
            <li>Slides: Single-band slip-ons, trending in casual street fashion</li>
        </ul>
    },

    {
        "id": 1,
        "productName": "shose",
        "productPrice": "1500'$",
        "productDiscount": "70% Off ",
        "productImage": "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?semt=ais_hybrid&w=740",
        "productdetails": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quis eligendi voluptates inventore tempora quaerat, qui ex ipsam? Molestiae aperiam, libero est vitae eum blanditiis dolorem itaque ut placeat deleniti. ",
        "productCategory": "fashion",
        "productRatting": <MdOutlineStar />,
        "about_this_product": <ul>
            <li>Hiking boots: Rugged and supportive, often waterproof and built from durable materials for outdoor use</li>
            <li>Work and combat boots: Heavy-duty, sometimes steel-toed, made for protection and industrial tasks</li>
            <li>Chelsea boots: Sleek, ankle-length with elastic sides—versatile for casual and smart outfits</li>
            <li>Cowboy boots: Western-styled with distinctive heel and pointed toe—fashion-forward and rugged</li>
            <li>Slides: Single-band slip-ons, trending in casual street fashion</li>
        </ul>
    },

    {
        "id": 1,
        "productName": "shose",
        "productPrice": "1500'$",
        "productDiscount": "70% Off ",
        "productImage": "https://5.imimg.com/data5/SELLER/Default/2022/1/QZ/AO/RT/142262681/istockphoto-1301394040-170667a.jpg",
        "productdetails": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quis eligendi voluptates inventore tempora quaerat, qui ex ipsam? Molestiae aperiam, libero est vitae eum blanditiis dolorem itaque ut placeat deleniti. ",
        "productCategory": "fashion",
        "productRatting": <MdOutlineStar />,
        "about_this_product": <ul>
            <li>Hiking boots: Rugged and supportive, often waterproof and built from durable materials for outdoor use</li>
            <li>Work and combat boots: Heavy-duty, sometimes steel-toed, made for protection and industrial tasks</li>
            <li>Chelsea boots: Sleek, ankle-length with elastic sides—versatile for casual and smart outfits</li>
            <li>Cowboy boots: Western-styled with distinctive heel and pointed toe—fashion-forward and rugged</li>
            <li>Slides: Single-band slip-ons, trending in casual street fashion</li>
        </ul>
    },

    {
        "id": 1,
        "productName": "shose",
        "productPrice": "1500'$",
        "productDiscount": "70% Off ",
        "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DNkCKa4nlOCJvn58cA6wH0JWRcHTIRfD3w&s",
        "productdetails": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quis eligendi voluptates inventore tempora quaerat, qui ex ipsam? Molestiae aperiam, libero est vitae eum blanditiis dolorem itaque ut placeat deleniti. ",
        "productCategory": "fashion",
        "productRatting": <MdOutlineStar />,
        "about_this_product": <ul>
            <li>Hiking boots: Rugged and supportive, often waterproof and built from durable materials for outdoor use</li>
            <li>Work and combat boots: Heavy-duty, sometimes steel-toed, made for protection and industrial tasks</li>
            <li>Chelsea boots: Sleek, ankle-length with elastic sides—versatile for casual and smart outfits</li>
            <li>Cowboy boots: Western-styled with distinctive heel and pointed toe—fashion-forward and rugged</li>
            <li>Slides: Single-band slip-ons, trending in casual street fashion</li>
        </ul>
    },
    {
        "id": 1,
        "productName": "shose",
        "productPrice": "1500'$",
        "productDiscount": "70% Off ",
        "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeDdy5MFKXZ9QkPb8UXd8nxC_4wrH0RTLZQ&s",
        "productdetails": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quis eligendi voluptates inventore tempora quaerat, qui ex ipsam? Molestiae aperiam, libero est vitae eum blanditiis dolorem itaque ut placeat deleniti. ",
        "productCategory": "fashion",
        "productRatting": <MdOutlineStar />,
        "about_this_product": <ul>
            <li>Hiking boots: Rugged and supportive, often waterproof and built from durable materials for outdoor use</li>
            <li>Work and combat boots: Heavy-duty, sometimes steel-toed, made for protection and industrial tasks</li>
            <li>Chelsea boots: Sleek, ankle-length with elastic sides—versatile for casual and smart outfits</li>
            <li>Cowboy boots: Western-styled with distinctive heel and pointed toe—fashion-forward and rugged</li>
            <li>Slides: Single-band slip-ons, trending in casual street fashion</li>
        </ul>
    },
    {
        "id": 1,
        "productName": "shose",
        "productPrice": "1500'$",
        "productDiscount": "70% Off ",
        "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTWtFQM7uYzKYlg2_XrBmJ_Wo-8gONFXNMWw&s",
        "productdetails": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quis eligendi voluptates inventore tempora quaerat, qui ex ipsam? Molestiae aperiam, libero est vitae eum blanditiis dolorem itaque ut placeat deleniti. ",
        "productCategory": "fashion",
        "productRatting": <MdOutlineStar />,
        "about_this_product": <ul>
            <li>Hiking boots: Rugged and supportive, often waterproof and built from durable materials for outdoor use</li>
            <li>Work and combat boots: Heavy-duty, sometimes steel-toed, made for protection and industrial tasks</li>
            <li>Chelsea boots: Sleek, ankle-length with elastic sides—versatile for casual and smart outfits</li>
            <li>Cowboy boots: Western-styled with distinctive heel and pointed toe—fashion-forward and rugged</li>
            <li>Slides: Single-band slip-ons, trending in casual street fashion</li>
        </ul>
    },
    {
        "id": 1,
        "productName": "shose",
        "productPrice": "1500'$",
        "productDiscount": "70% Off ",
        "productImage": "https://cdn.dribbble.com/userupload/42250206/file/original-4c971561c2346b59508b2450de96826e.gif",
        "productdetails": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quis eligendi voluptates inventore tempora quaerat, qui ex ipsam? Molestiae aperiam, libero est vitae eum blanditiis dolorem itaque ut placeat deleniti. ",
        "productCategory": "fashion",
        "productRatting": <MdOutlineStar />,
        "about_this_product": <ul>
            <li>Hiking boots: Rugged and supportive, often waterproof and built from durable materials for outdoor use</li>
            <li>Work and combat boots: Heavy-duty, sometimes steel-toed, made for protection and industrial tasks</li>
            <li>Chelsea boots: Sleek, ankle-length with elastic sides—versatile for casual and smart outfits</li>
            <li>Cowboy boots: Western-styled with distinctive heel and pointed toe—fashion-forward and rugged</li>
            <li>Slides: Single-band slip-ons, trending in casual street fashion</li>
        </ul>
    },
    {
        "id": 1,
        "productName": "shose",
        "productPrice": "1500'$",
        "productDiscount": "70% Off ",
        "productImage": "https://img.freepik.com/free-photo/shoes_1203-8153.jpg",
        "productdetails": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quis eligendi voluptates inventore tempora quaerat, qui ex ipsam? Molestiae aperiam, libero est vitae eum blanditiis dolorem itaque ut placeat deleniti. ",
        "productCategory": "fashion",
        "productRatting": <MdOutlineStar />,
        "about_this_product": <ul>
            <li>Hiking boots: Rugged and supportive, often waterproof and built from durable materials for outdoor use</li>
            <li>Work and combat boots: Heavy-duty, sometimes steel-toed, made for protection and industrial tasks</li>
            <li>Chelsea boots: Sleek, ankle-length with elastic sides—versatile for casual and smart outfits</li>
            <li>Cowboy boots: Western-styled with distinctive heel and pointed toe—fashion-forward and rugged</li>
            <li>Slides: Single-band slip-ons, trending in casual street fashion</li>
        </ul>
    },
    {
        "id": 1,
        "productName": "shose",
        "productPrice": "1500'$",
        "productDiscount": "70% Off ",
        "productImage": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
        "productdetails": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quis eligendi voluptates inventore tempora quaerat, qui ex ipsam? Molestiae aperiam, libero est vitae eum blanditiis dolorem itaque ut placeat deleniti. ",
        "productCategory": "fashion",
        "productRatting": <MdOutlineStar />,
        "about_this_product":
            <ul>
                <li>Hiking boots: Rugged and supportive, often waterproof and built from durable materials for outdoor use</li>
                <li>Work and combat boots: Heavy-duty, sometimes steel-toed, made for protection and industrial tasks</li>
                <li>Chelsea boots: Sleek, ankle-length with elastic sides—versatile for casual and smart outfits</li>
                <li>Cowboy boots: Western-styled with distinctive heel and pointed toe—fashion-forward and rugged</li>
                <li>Slides: Single-band slip-ons, trending in casual street fashion</li>
            </ul>
    },


    ]
    //   const cart = [{
    //     "icon": <MdOutlineLocalShipping />,
    //     "suport": "FREE SHIPPING",
    //     "suport1": "Orders Over $99",
    //     "suport2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib."
    // },
    // {

    //     "icon": <GiReturnArrow />,
    //     "suport": "FREE RETURNS",
    //     "suport1": "Easy & Free",
    //     "suport2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib."
    // },

    // {

    //     "icon": <PiContactlessPaymentThin />,
    //     "suport": "SECURED PAYMENT",
    //     "suport1": "Safe & Fast",
    //     "suport2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet."

    // },
    // {
    //     "icon": <RiCustomerServiceLine />,
    //     "suport": "CUSTOMER SUPPORT",
    //     "suport1": "Need Assistence?",
    //     "suport2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib."
    // }
    // ]

    const t = (h) => {
        console.log(h)
        dis(cart(h))
        nav("/productshop")
    }
    return (
        <>
            this is home pages
            {count}
            <div className="div1">
                {

                    ca.map(b => (

                        <div key={b.id} onClick={() => { t(b) }} className="cart">
                            <div className="img"><img src={b.productImage} alt=""></img></div>
                            <div className="name">{b.productName}</div>
                            <div className="price">{b.productPrice}</div>
                            <div className="dis">{b.productDiscount}</div>
                            {/* <div className="dis">{b.productdetails}</div>
                        <div className="dis">{b.productCategory}</div>
                        <div className="dis">{b.productRatting}</div> */}

                        </div>
                    ))

                }
            </div>
        </>
    )
}
export default Home