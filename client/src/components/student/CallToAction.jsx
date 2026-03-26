import React from 'react'
import { assets } from '../../assets/assets'

const Calltoaction = () => {
  return (
    <div className='mb-20 flex flex-col align-center justify-center'>
        <h2 className='md:text-3xl font-bold text-gray-900'>Learn anything, anytime, anywhere</h2>
        <p className='mt-3.5 text-gray-900/70'>Stop waiting for a reason to learn. The right time is now—dive into the best courses, expand your knowledge, 
          <br /> and level up your skills to unlock new opportunities. </p>
        <div className='flex align-center justify-center mt-8'>
          <button  className='p-4 text-white text-lg rounded gap-3 bg-blue-600' >Get Started </button>
          <div className='ml-5 flex gap-2 align-center justify-center'>
            <button >Learn more </button>
            <img className='size-4.5 mt-5.5' src={assets.arrow_icon} alt="arrow_icon" />
          </div>
        </div>
    </div>
  )
}

export default Calltoaction
