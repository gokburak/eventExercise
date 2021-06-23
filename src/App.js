import React,{useState} from 'react'

import './App.css'



const App = () => {

  const[userName,setUserName] = useState("");
  const[password,setPassword] = useState("");
  const[showPassword,setShowPassword] = useState(true);
  return (
    <div className="container" >
       <input 
       type="text"
       placeholder=" Enter username"
       value={userName}
       onChange={(e)=>setUserName(e.target.value)
       
      }
     
       />
       <input 
       type="password"
       placeholder=" Enter Password"
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
       />
     
     <h2>{userName}</h2>
     <h2>{showPassword ? password: "*".repeat(password.length)}</h2>

     <button onClick={(e) =>setShowPassword(!showPassword)} > Show/Hide password</button>
       
     </div>
  )
}

export default App

