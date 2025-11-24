import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='w-3/4 mx-auto bg-amber-400 p-6 mt-8 border-4 hover:scale-105 border-black justify-center transition shadow-[10px_10px_0px_black]'>
      <div className='flex justify-around'>
        <div className='text-center'>
            <span className='text-lg'>I'm </span>
            <h1 className='text-6xl'>Upendra Reddy</h1>
            <span className='text-xl'>Full Stack Developer</span>
        </div>
        <div>
            <img src="/public/me.png" alt="Profile Pic" className='w-2xs border-2 rounded-full opacity-90'/>
        </div>
      </div>
      <div className=''>
        <p className='w-full mt-8 p-2 bg-amber-300 border-2'>
            <h3>About</h3>
            Passionate developer connecting the physical and digital worlds through IoT and Embedded Systems. I love creating hardware-aware web apps and automation systems that solve real-world problems.
        </p>
      </div>
      
    </div>
    </>
  )
}

export default Hero
