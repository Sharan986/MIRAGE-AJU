import React from 'react'

const Emergency = () => {
  return (
   <>
       
       <div className="flex flex-col items-center p-8 bg-white min-h-screen font-sans">
      <h1 className="text-3xl font-bold mb-2 text-center">24/7 Emergency Services</h1>
      <p className="text-gray-600 text-center mb-8">Quick access to emergency care when you need it most</p>
      
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-5xl">
        {/* Emergency Contact Section */}
        <div className="bg-red-50 p-6 rounded-xl flex-1 shadow">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-600 text-2xl">📞</span>
            <h2 className="text-xl font-semibold">Emergency Contact</h2>
          </div>
          <p className="text-gray-700 mb-4">
            For immediate medical assistance, click below to connect with emergency services
          </p>
          <button className="w-full bg-red-600 text-white py-3 rounded-md text-lg font-medium hover:bg-red-700 transition">
            📞 Call Emergency Services
          </button>
          <p className="mt-3 text-sm text-gray-600">
            Emergency Hotline: <span className="font-bold">108</span>
          </p>
        </div>

        {/* Quick Form Section */}
        <div className="bg-purple-50 p-6 rounded-xl flex-1 shadow">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-purple-600 text-2xl">📋</span>
            <h2 className="text-xl font-semibold">Quick Form</h2>
          </div>
          
          <label className="block mb-2 font-medium">Nature of Emergency</label>
          <select className="w-full p-3 mb-4 border rounded-md">
            <option>Select emergency type</option>
            <option>Medical</option>
            <option>Fire</option>
            <option>Crime</option>
            <option>Natural Disaster</option>
          </select>

          <label className="block mb-2 font-medium">Location</label>
          <input
            type="text"
            placeholder="Enter your location"
            className="w-full p-3 mb-4 border rounded-md"
          />

          <label className="block mb-2 font-medium">Additional Details</label>
          <textarea
            placeholder="Briefly describe the emergency"
            className="w-full p-3 h-24 border rounded-md mb-4"
          ></textarea>

          <button className="w-full bg-purple-600 text-white py-3 rounded-md text-lg font-medium hover:bg-purple-700 transition">
            🚀 Submit Emergency Form
          </button>
        </div>
      </div>
    </div>
   </>
  )
}

export default Emergency
