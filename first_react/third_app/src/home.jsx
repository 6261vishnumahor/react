import { useRef } from "react";

const Home = () => {
    const ref = useRef();
    const ref1 = useRef();
    const c = () => {
        ref.current.src = "https://m.media-amazon.com/images/I/61n0aVXta7L._UY1000_.jpg";

    }
    const c1 = () => {
        ref.current.src = "https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7111545d/images/Sonata/Catalog/77105SL11_1.jpg?sw=600&sh=600"
    }
    const c2 = () => {
        ref1.current.textContent = "this is vishnu page"
    }
     const c3 = () => {
        ref1.current.textContent = "sandhya rajput khandawa"
    }

    return (
        <>
            {/* <div onMouseEnter={c2} ref={ref1}> this is home page </div> */}


            <div onMouseEnter={c} onMouseLeave={c1} width="200px" height="200px" ><img ref={ref} width="200px" height="200px" src="https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7111545d/images/Sonata/Catalog/77105SL11_1.jpg?sw=600&sh=600" alt="" /></div>
            <div onMouseEnter={c2} onMouseLeave={c3} ref={ref1}> bifjsdklcoapksld;fmejkdslkoeplds</div>



        </>
    )
}

export default Home;