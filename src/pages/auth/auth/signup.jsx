import { useState } from "react";
import "./signup.css"
import { useNavigate } from "react-router-dom"


const SignUp = () => {

  const [UserName, setUserName] = useState("")
  const [Password, setPassword] = useState("")
  const [RePassword, setRePassword] = useState("")

  const navigate = useNavigate()

  const handleUserName = (e) => {
    setUserName(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleRePassword = (e) => {
    setRePassword(e.target.value);
  }

  const handleData = () => {
    console.log({UserName, Password, RePassword});
    navigate("/main")
  }

  


return(
  <div className="page">
    <div className="sign">
      <h1 className="textSginIn">Sign Up Page</h1>
      <input type="text" placeholder="Username" className="LogInput" value={UserName} onChange={(e) => handleUserName(e)}/>
      <input type="password" placeholder="Password" className="LogInput" value={Password} onChange={(e) => handlePassword(e)}/> 
      <input type="password" placeholder="RePassword" className="LogInput" value={RePassword} onChange={(e) => handleRePassword(e)}/> 
      <button className="LoginB" onClick={handleData}>Sign Up</button>
    </div>
  </div>
)
}

export default SignUp;