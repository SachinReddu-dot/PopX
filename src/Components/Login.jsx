import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  // const [disabled, setDisabled] = useState(true)

  const handleLogin = (e) =>{
    e.preventDefault()

    if(!email || !password ){
      setError('All Fields Are required')
      return
    }

    // if(!email === user.email && !password === user.password){
    //    setError('Credentials are not matching')
    //    return
    // }

    console.log(email, password)
    navigate('/account')
  }


  return (

    <div className="w-full h-full py-20 max-sm:py-0 flex items-center max-sm:justify-start justify-center flex-col bg-gray-100 max-sm:bg-white">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg max-sm:shadow-none">
        <h1 className="text-3xl sm:text-4xl font-semibold max-sm:mr-20">Signin to your PopX Account</h1>
        <p className="text-zinc-600 leading-5 my-3 max-sm:mr-20">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-5 mt-7 font-medium">
          <div className="w-full relative">
            <label className="absolute -top-3 left-7 bg-white px-2 text-sm text-gray-600">Email</label>
            <input
              className="w-full outline-none rounded-lg p-3 border-2 border-purple-800 placeholder:text-sm"
              placeholder="Enter Email Address"
              type="email"
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="w-full relative">
            <label className="absolute -top-3 left-7 bg-white px-2 text-sm text-gray-600">Password</label>
            <input
              className="w-full outline-none rounded-lg p-3 border-2 border-purple-800 placeholder:text-sm"
              placeholder="Enter Password"
              type="password"
              onChange={(e)=> setPassword(e.target.value)}
              value={password}
            />
          </div>
          {error && <h3 className='text-red-700 text-sm'>{error}</h3>}
          <button className={`${password && email ? "bg-purple-800" : "bg-zinc-300"} w-full rounded-lg py-3 bg-purple-800 text-white  transition duration-300`}>Login</button>
          <h2 className="-mt-3 text-sm text-gray-600">
            Don't have an account ? <Link className="text-purple-600 hover:underline" to="/auth/register">
              Register
            </Link>
          </h2>
        </form>
      </div>
    </div>

  )
}

export default Login