
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
            "discount": "30%",
            "image": <img width="200px" src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" ></img>
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
                    <div>
                        <div>{b.producted}</div>
                        <div>{b.productprice}</div>
                        <div>{b.image}</div>
                        <div>{b.discount}</div>
                    </div>
                ))
            }
        </>
    )
}
export default About