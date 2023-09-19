 import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp=()=> {
  const navigate=useNavigate()
    const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
let url="http://localhost:5007/user/register"
const signup=()=>{
    axios.post(url,{
        firstName,
        lastName,
        email,
        Password})
    .then((response)=>{
        console.log(response);
    })
setFirstName(''),
setLastName('') 
setEmail(''),
setPassword('') 
navigate("/signIn")
    //  console.log({firstName,lastName,email,Password});
    // alert("details saved")
}

  return (
    <>
   <div className='container-fluid'>
      <div className='row'>
        <div className="col-6 mx-auto shadow-sm">
      <h1>SIGN UP PAGE</h1>
          <input type="text" placeholder='First Name' className='form-control my-2' onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
          <input type="text" placeholder='Last Name' className='form-control my-2' onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
          <input type="text" placeholder='Email' className='form-control my-2' onChange={(e)=>setEmail(e.target.value)} value={email} />
          <input type="text" placeholder='Password' className='form-control my-2' onChange={(e)=>setPassword(e.target.value)} value={Password} />
            <button onClick={signup} className='btn btn-info w-100 my-2'>sign up</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default SignUp