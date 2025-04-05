import React from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <>
        <div className='w-full h-screen flex items-center'>
            <div className='w-1/2 max-sm:hidden h-full bg-cover bg-center bg-[url(https://imgs.search.brave.com/hWbOoE3EDw1JVyF7W0wxSYZzlrMZGf0cjru3xKIkMfE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91bmJv/dW5jZS5jb20vcGhv/dG9zL0dyYWRpZW50/LUJhY2tncm91bmQu/cG5n)] flex items-center justify-center rounded-tr-4xl rounded-br-4xl'>
                <h1 className='text-6xl font-bold'>Welcome to PopX</h1>
            </div>
            <div className='w-1/2 max-sm:w-full h-full'>
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default Auth