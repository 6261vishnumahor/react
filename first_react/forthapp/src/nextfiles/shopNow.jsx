import { FiChevronLeft } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { VscDash } from "react-icons/vsc";
import "./shopnow.css"
import { CheckBox, useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import { AiOutlineUnorderedList } from "react-icons/ai"
// import { FaTableCells } from "react-icons/fa6";
import { LiaTableSolid } from "react-icons/lia";
import { CiStar } from "react-icons/ci";

const Shopnow = () => {
    const [v, setV] = useState(0)
    const [s, setS] = useState(0)
    // const [isSelected, setSelection] = useState(false);
    const [t, setT] = useState(0)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)



    const plus = () => {
        setV(v + 1)
    }
    const plus1 = () => {
        setS(s + 1)
    }
    const plus2 = () => {
        setT(t + 1)
    }
    const plus3 = () => {
        setX(x + 1)
    }
    const plus4 = () => {
        setY(y + 1)
    }
    const cart = [
         {

        "img": <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-14-2-300x300.jpg" alt="" srcset="" />,
        "fres": "SHOES",
        "fres1": "New Balance Fresh Foam",
        "fres2": [<CiStar />, <CiStar />, <CiStar />, <CiStar />, <CiStar />],
        "fres3": "$109.00",

    },
 {

        "img": <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-14-2-300x300.jpg" alt="" srcset="" />,
        "fres": "SHOES",
        "fres1": "New Balance Fresh Foam",
        "fres2": [<CiStar />, <CiStar />, <CiStar />, <CiStar />, <CiStar />],
        "fres3": "$109.00",

    },
     {

        "img": <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-14-2-300x300.jpg" alt="" srcset="" />,
        "fres": "SHOES",
        "fres1": "New Balance Fresh Foam",
        "fres2": [<CiStar />, <CiStar />, <CiStar />, <CiStar />, <CiStar />],
        "fres3": "$109.00",

    },
     {

        "img": <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-14-2-300x300.jpg" alt="" srcset="" />,
        "fres": "SHOES",
        "fres1": "New Balance Fresh Foam",
        "fres2": [<CiStar />, <CiStar />, <CiStar />, <CiStar />, <CiStar />],
        "fres3": "$109.00",

    },
     {

        "img": <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-14-2-300x300.jpg" alt="" srcset="" />,
        "fres": "SHOES",
        "fres1": "New Balance Fresh Foam",
        "fres2": [<CiStar />, <CiStar />, <CiStar />, <CiStar />, <CiStar />],
        "fres3": "$109.00",

    },
     {

        "img": <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-14-2-300x300.jpg" alt="" srcset="" />,
        "fres": "SHOES",
        "fres1": "New Balance Fresh Foam",
        "fres2": [<CiStar />, <CiStar />, <CiStar />, <CiStar />, <CiStar />],
        "fres3": "$109.00",

    },
     {

        "img": <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-14-2-300x300.jpg" alt="" srcset="" />,
        "fres": "SHOES",
        "fres1": "New Balance Fresh Foam",
        "fres2": [<CiStar />, <CiStar />, <CiStar />, <CiStar />, <CiStar />],
        "fres3": "$109.00",

    },
     {

        "img": <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-14-2-300x300.jpg" alt="" srcset="" />,
        "fres": "SHOES",
        "fres1": "New Balance Fresh Foam",
        "fres2": [<CiStar />, <CiStar />, <CiStar />, <CiStar />, <CiStar />],
        "fres3": "$109.00",

    },
     {

        "img": <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-14-2-300x300.jpg" alt="" srcset="" />,
        "fres": "SHOES",
        "fres1": "New Balance Fresh Foam",
        "fres2": [<CiStar />, <CiStar />, <CiStar />, <CiStar />, <CiStar />],
        "fres3": "$109.00",

    },
     {

        "img": <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-14-2-300x300.jpg" alt="" srcset="" />,
        "fres": "SHOES",
        "fres1": "New Balance Fresh Foam",
        "fres2": [<CiStar />, <CiStar />, <CiStar />, <CiStar />, <CiStar />],
        "fres3": "$109.00",

    },
    {

        "img": <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-14-2-300x300.jpg" alt="" srcset="" />,
        "fres": "SHOES",
        "fres1": "New Balance Fresh Foam",
        "fres2": [<CiStar />, <CiStar />, <CiStar />, <CiStar />, <CiStar />],
        "fres3": "$109.00",

    },
    {

        "img": <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2018/04/shop3-soft-product-14-2-300x300.jpg" alt="" srcset="" />,
        "fres": "SHOES",
        "fres1": "New Balance Fresh Foam",
        "fres2": [<CiStar />, <CiStar />, <CiStar />, <CiStar />, <CiStar />],
        "fres3": "$109.00",

    },
   
]
    return (
        <>
            <div>HOME<FiChevronLeft />SHOP </div>
            <div id="v"></div>
            <section className="v4">

                <div className="v5">

                    <div ><a href="#">Categories</a></div>
                    <div>
                        <div>
                            {(v % 2 == 0) ? <div onClick={plus}><VscDash /></div> : <div onClick={plus}><GoPlus /></div>}
                        </div>
                        {/* <div onClick={plus}><VscDash /></div>
                        <div onClick={plus1} style={{ display: setV }}> <GoPlus /></div> */}
                    </div>

                </div>

                <div>
                    {(v % 2 == 0) ? <ul onClick={plus} className="v8">
                        <li className="v3"><a href="">Accesaries</a></li>
                        <li className="v3"><a href="">Bags</a></li>
                        <li className="v3"><a href="">Hates</a></li>
                        <li className="v3"><a href="">Jakets</a></li>
                        <li className="v3"><a href="">Shose</a></li>
                        <li className="v3"><a href="">Sunglashes</a></li>

                    </ul> : <div onClick={plus}> </div>}
                </div>

                <div id="v2"></div>
                <div className="v5">
                    <div>Price</div>
                    {(s % 2 == 0) ? <div onClick={plus1}><VscDash /></div> : <div onClick={plus1}><GoPlus /></div>}
                </div>
                <div className="v6">
                    <input type="range" name="range" />
                </div>
                {(s % 2 == 0) ?
                    <div className="v7">
                        <div>
                            Price: $30 — $300
                        </div>
                        <button>FILTER</button>
                    </div> : <div onClick={plus1}> </div>}

                <div id="v2"></div>
                <div className="v5">
                    <div>Color</div>
                    {(t % 2 == 0) ? <div onClick={plus2}><VscDash /></div> : <div onClick={plus2}><GoPlus /></div>}
                </div>
                <div className="v9">
                    {(t % 2 == 0) ? <ul onClick={plus2}>
                        <li className="v10"><div className="v11"><FaDotCircle /></div> <div>Light-blue</div></li>
                        <li className="v10"><div className="v12"><FaDotCircle /></div> <div>Black</div></li>
                        <li className="v10"><div className="v13"><FaDotCircle /></div> <div>Green</div></li>
                        <li className="v10"><div className="v14"><FaDotCircle /></div> <div>Red</div></li>
                        <li className="v10"><div className="v15"><FaDotCircle /></div> <div>Indigo</div></li>
                        <li className="v10"><div className="v16"><FaDotCircle /></div> <div>Blue</div></li>
                    </ul> : <div onClick={plus2}> </div>}
                </div>
                <div id="v2"></div>
                <div className="v5">
                    <div>Size</div>
                    {(x % 2 == 0) ? <div onClick={plus3}><VscDash /></div> : <div onClick={plus3}><GoPlus /></div>}

                </div>
                {(x % 2 == 0) ?
                    <article onClick={plus3} className="v17">
                        <div className="v18">XL</div>
                        <div className="v18">L</div>
                        <div className="v18">M</div>
                        <div className="v18">S</div>
                    </article> : <div onClick={plus3}> </div>}
                <div id="v2"></div>
                <div className="v5">
                    <div>Brand</div>
                    {(y % 2 == 0) ? <div onClick={plus4}><VscDash /></div> : <div onClick={plus4}><GoPlus /></div>}
                </div>
                {(y % 2 == 0) ?
                    <div onClick={plus4} className="v19">
                        <div>
                            <input type="checkbox" id="adidas" name="adidas" />
                            <label htmlFor="adidas">Adidas</label>
                        </div>
                        <div>1</div>
                    </div> : <div onClick={plus4}></div>}
            </section >


            <section className="b">
                <img src="https://www.portotheme.com/wordpress/porto/shop3/wp-content/uploads/sites/214/2019/12/shop3_shop_banner.jpg?id=1937" alt="" />
                <div className="b1">Winter Fashion Trends</div>
                <div className="b2">UP TO 30% OFF ON JECKETS</div>
                <div className="b3">
                    <div className="b5">STARTING At</div>
                    <div className="b4">$199<sup>99</sup></div>
                    <div><button className="b6">SHOP NOW</button></div>
                </div>
            </section>
            <article className="b7">
                <div>
                    <form action="">
                        <label htmlFor="bh1">SHORT BY:</label>
                        <select name="orderby" id="bh1">
                            <option value="orderby">DEFAULT SORTING</option>
                            <option value="orderby">SORT BY POPULARTY</option>
                            <option value="orderby">SORT  BY AVERAGE RATTING</option>
                            <option value="orderby">SORT BY LATEST</option>
                            <option value="orderby">SORT BY PRICE:LOW TO HIGH</option>
                            <option value="orderby">SORT BY PRICE:HIGH TO LOW</option>

                        </select>
                    </form>
                </div>
                <div className="b8">
                    <form action="">
                        <label htmlFor="bh2">SHOW:</label>
                        <select name="orderby" id="bh2">
                            <option value="orderby">12</option>
                            <option value="orderby">16</option>
                            <option value="orderby">24</option>
                        </select>
                    </form>
                    <div className="b9">
                        <div ><AiOutlineUnorderedList /></div>
                        <div><LiaTableSolid /></div>
                    </div>

                </div>
            </article>
            <div className="b10">
                {
                    cart.map(e => (
                        <div className="b11">
                            <div className="b12">{e.img}</div>
                            <div className="b13">{e.fres}</div>
                            <div className="b14">{e.fres1}</div>
                            <div className="b15">{e.fres2}</div>
                            <div className="b14">{e.fres3}</div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Shopnow;