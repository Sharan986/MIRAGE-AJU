import React from 'react'

const Home = () => {
  return (
    <>
    <div className='flex justify-between items-center pt-3 pr-16 pl-16 gap-2 bg-[#F3F4FF] h-screen'>

        <div className='pl-6'>
        <h1 className='text-6xl font-bold'>
        Smart & Connected Rural Healthcare Platform
        </h1>
        <h2 className='text-3xl pt-20'>
        Digital health records, doctor dashboards, consultations, emergency handling, medicine tracking, and more.
        </h2>
        
        <div className='flex gap-4 pt-12 pl-20'>
        <button className='bg-blue-500 text-white px-5 py-4 rounded-md'>Get Started</button>
        <button className='text-blue-500 bg-white border border-blue-500 px-4 py-2 rounded-md'>Emergency</button>
        </div>
        </div> {/* left */}

        <div className='pr-6'>

    <img className='rounded-2xl cursor-pointer w-[80vw] h-[80vh] hover:scale-105 hover:z-10 transition-all duration-300 hover:shadow-xl hover:bg-black/20' src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f47fce7519-5e775e371ff59af382cd.png" alt="" />
        </div> {/* right */}

    </div>
    </>
  )
}

export default Home
