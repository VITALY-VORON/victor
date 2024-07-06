import "./signin.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const SignIn = () => {

  const [UserName, setUserName] = useState("")
  const [Password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleUserName = (e) => {
    setUserName(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleData = () => {
    console.log({UserName, Password});
    navigate("/main")
  }


return(
  <div className="page">
    <div className="sign">
      <h1 className="textSginIn">Sign In Page</h1>
      <input type="text" placeholder="Username" className="LogInput" value={UserName} onChange={(e) => handleUserName(e)}/>
      <input type="password" placeholder="Password" className="LogInput" value={Password} onChange={(e) => handlePassword(e)}/> 
      <button className="LoginB" onClick={handleData}>Sign In</button>
    </div>
  </div>
)
}

export default SignIn;