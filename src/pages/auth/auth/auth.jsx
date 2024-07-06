import { Outlet } from "react-router-dom"
import Header from "./header";

const Auth = () => {
    return(
        <div>
            <Header />
            <Outlet />
        </div>
    )
    
}



export default Auth;