import React from 'react'

const Login = () => {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-[#F5F6FF] px-4">
      <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Left Panel */}
        <div className="w-1/2 bg-[#7B2CF3] text-white p-10 flex flex-col justify-center rounded-l-2xl">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to <br />SwasthyaSetu
          </h1>
          <p className="text-sm mb-6">
            Your trusted healthcare companion. Access your medical records, connect with doctors, and manage your health journey.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <span className="mr-2 text-lg">✔</span> 24/7 Emergency Support
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-lg">✔</span> Secure Health Records
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-lg">✔</span> Expert Consultation
            </li>
          </ul>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          
          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <img
              className="w-16 h-16 rounded-full object-cover"
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User Avatar"
            />
          </div>

          {/* Email */}
          <label className="text-sm font-medium mb-1">Email Address</label>
          <div className="mb-4 relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded focus:outline-none"
            />
          </div>

          {/* Password */}
          <label className="text-sm font-medium mb-1">Password</label>
          <div className="mb-2 relative">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded focus:outline-none"
            />
          </div>

          {/* Remember me + Forgot */}
          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-[#7B2CF3] hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Sign In */}
          <button className="bg-[#7B2CF3] text-white py-2 rounded w-full font-semibold mb-4">
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center mb-4">
            <hr className="w-1/4 border-gray-300" />
            <span className="mx-2 text-sm text-gray-500">Or continue with</span>
            <hr className="w-1/4 border-gray-300" />
          </div>

          {/* Social Login */}
          <div className="flex space-x-4 mb-4">
            <button className="w-full border rounded py-2 flex items-center justify-center space-x-2">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className=" h-5"
              />
              <span>Google</span>
            </button>
            
          </div>

          {/* Sign up link */}
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="#" className="text-[#7B2CF3] font-medium hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  </>
  )
}

export default Login
