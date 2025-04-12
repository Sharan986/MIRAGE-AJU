import React from 'react'

const Home2 = () => {
    
  return (
    <>
    <div className='flex justify-center items-center pt-7'>
      <h1 className='text-4xl font-bold ' >Key Features</h1>
    </div>

    <div className='flex justify-center items-center gap-4 pt-9 pb-4'>

    <div className="bg-white p-6 rounded-xl shadow-md max-w-sm border-2 border-gray-200">
      <div className="w-6 h-16 mb-4 rounded-full border-2 border-dashed border-purple-400 flex items-center justify-center text-purple-500 font-bold">
        !
      </div>
      <h3 className="text-lg font-semibold mb-2">Access Your Records</h3>
      <p className="text-gray-600">
        View your consultations and lab reports securely from anywhere, anytime.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md max-w-sm border-2 border-gray-200">
      <div className="w-6 h-16 mb-4 rounded-full border-2 border-dashed border-purple-400 flex items-center justify-center text-purple-500 font-bold">
        !
      </div>
      <h3 className="text-lg font-semibold mb-2">Mental Wellness Tools</h3>
      <p className="text-gray-600">
      Self-assessments, resources, and guided breathing exercises for mental health.
      </p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-md max-w-sm border-2 border-gray-200">
      <div className="w-6 h-16 mb-4 rounded-full border-2 border-dashed border-purple-400 flex items-center justify-center text-purple-500 font-bold">
        !
      </div>
      <h3 className="text-lg font-semibold mb-2">Learn About Health</h3>
      <p className="text-gray-600">
      Educational resources and health tips in your preferred language.
      </p>
    </div>

    </div>

    {/* 2nd row */}

    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 px-8 py-12 rounded-xl shadow-sm pl-20 pr-20">
  
  {/* Left Side: Text Content */}
  <div className="md:w-1/2 mb-10 md:mb-0">
    <h2 className="text-5xl font-bold text-black mb-6">
      Comprehensive Healthcare Dashboard
    </h2>
    <ul className="space-y-4 text-gray-700">
      <li className="flex items-start">
        <span className="text-green-500 mr-3 mt-1">✔️</span>
        <span className='text-2xl'>Personal health records and history</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-500 mr-3 mt-1">✔️</span>
        <span className='text-2xl'>Online consultations with doctors</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-500 mr-3 mt-1">✔️</span>
        <span className='text-2xl'>Emergency services access</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-500 mr-3 mt-1">✔️</span>
        <span className='text-2xl'>Medicine tracking and reminders</span>
      </li>
    </ul>
  </div>

  {/* Right Side: Image */}
  <div className="md:w-1/2 flex justify-center">
    <img
      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ba9c1537da-77cc8b66e7a93b9fbee4.png"
      alt="Healthcare Dashboard"
      className="rounded-2xl shadow-md w-[80vw] h-[80vh]"
    />
  </div>
</div>

    </>
  )
}

export default Home2
