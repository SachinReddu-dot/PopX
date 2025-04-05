import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>

    <div className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-[url(https://imgs.search.brave.com/hWbOoE3EDw1JVyF7W0wxSYZzlrMZGf0cjru3xKIkMfE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91bmJv/dW5jZS5jb20vcGhv/dG9zL0dyYWRpZW50/LUJhY2tncm91bmQu/cG5n)]">
      <div className="max-sm:mb-10 text-center max-sm:text-start p-8 max-sm:p-5 max-w-lg w-full max-sm:absolute max-sm:bottom-0 max-sm:left-0">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">Welcome to PopX</h1>
        <p className="text-lg mb-8 max-sm:mr-14 text-zinc-600 font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

        <div className="flex justify-center space-x-4 max-sm:flex-col max-sm:gap-3">
          <Link to='/auth/register'>
            <button className="w-full px-6 py-3 bg-purple-800 text-white font-semibold rounded-lg transition duration-300 hover:bg-purple-600">
              Create Account
            </button>
          </Link>

          <Link to='/auth/login'>
            <button className="w-full px-6 py-3 bg-purple-300 font-semibold rounded-lg transition duration-300 hover:bg-purple-700">
              Already Registered ? Login
            </button>
          </Link>
        </div>
      </div>
    </div>

    </>
  )
}

export default Home