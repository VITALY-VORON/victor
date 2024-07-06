import { Outlet } from "react-router-dom"
import MainHeader from "../../main/mainheader";

const Main = () => {
    return(
        <div>
            <MainHeader />
            <Outlet />
        </div>
    )
    
}



export default Main;