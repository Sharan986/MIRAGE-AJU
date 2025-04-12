import React from 'react'
import { useEffect } from 'react'
import API from "../api";

const Bottom = () => {
  useEffect(() => {
    API.get('/consultations')
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }, []);
  return (
  <>
  <div className="w-full py-16 px-4 bg-white">
  <div className="max-w-6xl mx-auto text-center mb-10">
    <h2 className="text-4xl font-bold mb-4">24/7 Emergency Services</h2>
    <p className="text-lg text-gray-600">Quick access to emergency care when you need it most</p>
  </div>
  
  <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
 
    <div className="flex-1 bg-red-50 rounded-xl p-8 flex flex-col items-center">
      <div className="bg-red-500 text-white p-4 rounded-full mb-4 flex items-center justify-center">
      
        <span className="text-xl">📞</span>
      </div>
      <h3 className="text-2xl font-bold mb-6">Emergency Contact</h3>
      <button className="w-full bg-red-600 cursor-pointer hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
        Call Emergency Services
      </button>
    </div>
    
    
    <div className="flex-1 bg-purple-50 rounded-xl p-8 flex flex-col items-center">
      <div className="bg-purple-500 text-white p-4 rounded-full mb-4 flex items-center justify-center">
      
        <span className="text-xl">📋</span>
      </div>
      <h3 className="text-2xl font-bold mb-6">Quick Form</h3>
      <button className="w-full bg-purple-600 cursor-pointer hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
        Submit Emergency Form
      </button>
    </div>
  </div>
</div>
  </>
  )
}






export default Bottom
