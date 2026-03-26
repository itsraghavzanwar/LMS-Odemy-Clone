import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 mt-2 text-left w-full md:px-20 px-6 py-5'>
      <div>
        <div className='flex'>
          <div className='flex flex-col'>
            <img className='md:w-45 w-40' src={assets.logo} alt="logo" />
            <p className='text-white/60 mt-5'>Odemy is a global online learning platform offering thousands of  <br />courses across programming, business, design, and personal <br />development. It helps learners build practical skills  through expert led <br /> video content.</p>
          </div>
          <div className='ml-20'>
            <h2 className='text-white/80 font-bold text-xl'>Company</h2>
            <h4 className='text-white/60'><a href="">Home</a></h4>
            <h4 className='text-white/60'><a href="#">About us</a></h4>
            <h4 className='text-white/60'><a href="#">Contact us</a></h4>
            <h4 className='text-white/60'><a href="#">Private Policy</a></h4>
            <h4 className='text-white/60'><a href="#">Terms of Service</a></h4>
          </div>
          <div  className='ml-50  '>
            <div>
              <h2 className='text-white/80 font-bold text-xl ml-1'>Follow us</h2>
            </div>
            <div className="flex gap-4 mt-3">
              <img className="w-8 h-8 opacity-40 border border-blue-600 rounded-full bg-blue-600 hover:opacity-100" src={assets.instagram_icon} />
              <img className="w-8 h-8 opacity-40 border border-blue-600 rounded-full bg-blue-600 hover:opacity-100" src={assets.twitter_icon} />
              <img className="w-8 h-8 opacity-40 border border-blue-600 rounded-full bg-blue-600  hover:opacity-100" src={assets.facebook_icon} />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100/40 w-full mt-5"></div>
      </div>
      <div className='flex align-center'>
        <p className=' mt-5
       text-white/60 ml-2 mb-0.4'>Copyright © 2026 Odmey. All Right Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
