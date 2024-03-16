import { useState } from "react"

function Login() {
  const [formData, setFormData]= useState({username:'',password:''});

  //  alternative 
  // const [username, setUsername]=useState('');
  // const [password, setPassword]=useState('');

const handleInputChange = (e)=>{
  setFormData({...formData, [e.target.name]:e.target.value})
 
  // alternative
  // const {name,value}=e.target;
  // setFormData({...formData,[name]: value})
};

const handleSubmit = (e)=>{
  e.preventDefault()
  console.log('Form Data', formData);
}
  return (

    <form onSubmit={handleSubmit}>
       <div>
        <label htmlFor="userName">Username: </label>
        <input 
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        id="userName"
        placeholder="Username"
        autoComplete=""
        required
         />
       </div>

       <div>
        <label htmlFor="Password">Password: </label>
        <input 
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        id="Password"
        placeholder="Password"
        autoComplete=""
        required
         />
       </div>
       <button type="submit">Login</button>
    </form>
   
  )
}
export default Login