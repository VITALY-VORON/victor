import { createBrowserRouter } from "react-router-dom"
import Auth from "../pages/auth/auth/auth"
import SignIn from "../pages/auth/auth/signin"
import SignUp from "../pages/auth/auth/signup"
import Offstate from "../pages/auth/main/offstate"
import Main from "../pages/auth/main/maini"
import Create from "../pages/main/create"

export const router = createBrowserRouter([
    {
        element: <Auth />,
        path: "/auth",
        children: [
            {
                path: "",
                element: <SignIn />
            },
            {
                path: "signin",
                element: <SignIn />
            },
            {
                path: "signup",
                element: <SignUp />
            }
            
        ]
    },
    {
        element: <Main />,
        path: "/main",
        children: [
            {
                path: "",
                element: <Offstate />
            },
            {
                path: "offstate",
                element: <Offstate />
            },
            {
                path: "create",
                element: <Create />
            }
        ]
    }
])