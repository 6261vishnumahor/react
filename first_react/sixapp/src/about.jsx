
import { useSelector } from "react-redux"
const About=()=>{
        const card=useSelector(e=>e.user.card)
    
    return(
        <>
        this is about pages
          {
            card[0].productName
          }
        </>
    )
}
export default About