import React, { useEffect } from 'react'
import axios,{Axios} from 'axios'
import { useNavigate } from 'react-router-dom';
const Dashboard=()=>{
  const navigate =useNavigate()
  useEffect(()=>{
    let url="https://user-api-d3qv.onrender.com/user/dashboard"
    let token = localStorage.token
    axios.get(url,{
      headers:{
        Authorization:`Bearer ${token}`,
        "Content-Type":"application/json",
        "Accept":"application/json"

      }
     
    
    })
    .then((result)=>{
      if(result){
        console.log(result.data);
      }
      else{
        navigate('/signin')
      }
    })
    .catch(err=>console.log(err))
      
  },[]);



  return (
    <>
      <div>
        <h1>Dashboard</h1>
      </div>

    </>
  )
}

export default Dashboard