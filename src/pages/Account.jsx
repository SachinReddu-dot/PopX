import React from 'react'

const Account = () => {
  return (
    <>
    <div className="w-full min-h-screen overflow-hidden">
      <div className="w-full bg-white p-4 shadow-md">
        <h1 className="text-xl font-semibold">Account Settings</h1>
      </div>

      <div className="w-full h-screen bg-zinc-100 p-6">
        <div className="flex items-start gap-6">
          <img
            className="w-20 h-20 rounded-full bg-red-200 object-cover object-center"
            src="https://imgs.search.brave.com/wGgfdqlFqaMenZ26MF0WogbGt-djpTOK_PzwLaN1lPs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY0LzY3LzI3/LzM2MF9GXzY0Njcy/NzM2X1U1a3BkR3M5/a2VVbGw4Q1JRM3Az/WWFFdjJNNnFrVlk1/LmpwZw"
          />
          <div>
            <h1 className="text-xl font-semibold">John Doe</h1>
            <h3 className="text-gray-600">email@gmail.com</h3>
          </div>
        </div>

        <p className="my-5 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptates nisi soluta sed beatae voluptatibus facilis temporibus provident aperiam eius.
        </p>

        <div className="w-full h-[400px] border-dotted border-y-2 border-zinc-300">
          <div className="flex justify-center items-center h-full text-gray-500">
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Account