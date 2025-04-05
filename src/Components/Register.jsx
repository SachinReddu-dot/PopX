import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e)=>{
    let {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
    console.log(formData)
  }

  const handleRegister = (e)=>{
    e.preventDefault()

    if(!formData.name || !formData.phone || !formData.email || !formData.password || !formData.agency){
      setError('All Fields Are required')
      return
    }

    console.log(formData)

    localStorage.setItem('user', JSON.stringify(formData))
    navigate('/account')
  }

  return (
    <div className="w-full h-full py-20 max-sm:py-0 flex items-center max-sm:justify-start justify-center flex-col bg-gray-100 max-sm:bg-white">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg max-sm:shadow-none">
        <h1 className="text-3xl sm:text-3xl font-bold max-sm:mr-20">Create your PopX Account</h1>
        <form onSubmit={handleRegister} className="w-full flex flex-col gap-5 mt-7 font-medium">
        <div className="w-full relative">
            <label className="absolute -top-4 left-7 bg-white px-2 text-sm text-gray-600">Full Name <span className='text-red-700 text-lg'>*</span></label>
            <input
              className="w-full outline-none rounded-lg p-2 border-2 border-purple-800 placeholder:text-sm"
              placeholder="eg. Marry Doe"
              type="text"
              value={formData.name}
              onChange={handleChange}
              name='name'
            />
          </div>
          <div className="w-full relative">
            <label className="absolute -top-4 left-7 bg-white px-2 text-sm text-gray-600">Phone Number <span className='text-red-700 text-lg'>*</span></label>
            <input
              className="w-full outline-none rounded-lg p-2 border-2 border-purple-800 placeholder:text-sm"
              placeholder="eg. 12345678"
              type="number"
              value={formData.phone}
              onChange={handleChange}
              name='phone'
            />
          </div>
          <div className="w-full relative">
            <label className="absolute -top-4 left-7 bg-white px-2 text-sm text-gray-600">Email Address <span className='text-red-700 text-lg'>*</span></label>
            <input
              className="w-full outline-none rounded-lg p-2 border-2 border-purple-800 placeholder:text-sm"
              placeholder="eg. eg@gmail.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              name='email'
            />
          </div>
          <div className="w-full relative">
            <label className="absolute -top-4 left-7 bg-white px-2 text-sm text-gray-600">Password <span className='text-red-700 text-lg'>*</span></label>
            <input
              className="w-full outline-none rounded-lg p-2 border-2 border-purple-800 placeholder:text-sm"
              placeholder="Enter Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              name='password'
            />
          </div>
          <div className="w-full relative">
            <label className="absolute -top-4 left-7 bg-white px-2 text-sm text-gray-600">Company Name <span className='text-red-700 text-lg'>*</span></label>
            <input
              className="w-full outline-none rounded-lg p-2 border-2 border-purple-800 placeholder:text-sm"
              placeholder="Enter Confirm Password"
              type="text"
              value={formData.company}
              onChange={handleChange}
              name='company'
            />
          </div>

          <div className="w-full relative px-2">
            <label className="bg-white text-gray-600">Are you an Agency? <span className='text-red-700 text-lg'>*</span></label>
            <div className='flex items-center gap-3 pl-5 max-sm:pl-0'>
              <div className='w-10 flex items-center gap-1'>
                <input
                  name='agency'
                  value='Yes'
                  type="radio"
                  onChange={handleChange}
                />
                <p>Yes</p>
              </div>
              <div className='w-10 flex items-center gap-1'>
                <input
                  name='agency'
                  value='No'
                  type="radio"
                />
                <p>No</p>
              </div>
            </div>
          </div>
          {error && <h3 className='text-red-700 text-sm'>{error}</h3>}
          <button className={`${formData.email.length > 0 ? 'bg-purple-800' : 'bg-zinc-300'} w-full rounded-lg py-2 bg-purple-800 text-white  transition duration-300`}>Register</button>
          <h2 className="-mt-3 text-sm text-gray-600">
            Don't have an account ? <Link className="text-purple-600 hover:underline" to="/auth/login">
              Login
            </Link>
          </h2>
        </form>
      </div>
    </div>
  )
}

export default Register