import { useNavigate, Link } from "react-router-dom"
import "./mainheader.css"
import "./list.css";

const MainHeader = () => {
    const handleData = () => {
        navigate("/create")
      }
    return (
    <div>
        <div className="navbuttons">
            <h1 className="knowyup">KnowYup</h1>
        </div>
    
    </div>
    )
}

export default MainHeader;