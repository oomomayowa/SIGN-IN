import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import Dashboard from './Pages/Dashboard'
import home from './Pages/home'

const App =()=> {
  let token =localStorage.getItem("token")
  return (
    <>
     <Routes >
      <Route path='/' element={<home/>}/>
      <Route path='/dashboard' element={token?<Dashboard/>:<Navigate to ="/signIn"/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signIn' element={<SignIn/>}/>
      </Routes>   
    </>
  )
}

export default App