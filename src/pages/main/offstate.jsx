import { useNavigate } from "react-router-dom"
import MainHeader from "./mainheader"
 
  
const Offstate = () => {

    const navigate = useNavigate("/profile")

    return(
        <div className="profile" onClick={() => navigate()}>
            <MainHeader/>
        </div>
    )
}

export default Offstate;