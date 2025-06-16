
const About=()=>{
    const arr=[63,45,45,67,4,6,76]
    return(
        <>
        <h1>this is about page</h1>
        {
            arr.map(e=>(
                <div>
                    <div>{e}</div>
                </div>
            ))
        }
        </>
    )
}
export default About