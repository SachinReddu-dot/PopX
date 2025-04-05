import React, { useEffect } from 'react'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import RegisterPage from './Components/Register'
import { useNavigate } from 'react-router-dom'
import Account from './pages/Account'


const App = () => {

  // const navigate = useNavigate()

  // useEffect(()=>{
  //   const user = localStorage.getItem('user')
  //   if(user){
  //     navigate('/home')
  //   }
  //   if(!user){
  //     navigate('/auth/login')
  //   }
  // },[])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/auth' element={<Auth />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<RegisterPage/>}/>
        </Route>
        <Route path='/account' element={<Account />}/> 
      </Routes> 
    </>
  )
}

export default App