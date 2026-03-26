import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link, useLocation } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import Educator from './../../pages/educator/Educator';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {
  const location = useLocation()
  const {navigate,isEducator} = useContext(AppContext)
  const isCourseListPage = location.pathname.includes('/course-list')
  const { openSignIn } = useClerk()
  const { user } = useUser()

  return (
    <div className={`flex items-center justify-between 
                    px-4 sm:px-10 md:px-14 lg:px-8 
                    border-b border-gray-500 py-4 
                    ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>

      {/* Logo Only - no extra text */}
      <Link to='/'>
        <img src={assets.logo} alt="Odemy Logo"
          className='w-32 lg:w-40 cursor-pointer' />
      </Link>

      {/* Right Side */}
      <div className='hidden md:flex items-center gap-5 text-gray-600'>
        {user && <>
          <button onClick={()=>{navigate('/educator')}}>{isEducator ? ' Educator Dashboard' : 'Become Educator'}</button>
          <div>|</div>
          <Link to='/my-enrollments'>My Enrollments</Link>
        </>}
        {user ? <UserButton /> :
          <button onClick={() => openSignIn()} className='bg-blue-600 text-white 
                           px-7 py-2 rounded-full'>
            Create Account
          </button>}
      </div>
      {/* for smart phone */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-600'>
        <div className='flex item-center gap-1 sm:gap-2 max-sm:text-xs'>
          {user && <>
                      <button onClick={()=>{navigate('/educator')}}>{isEducator ? ' Educator Dashboard' : 'Become Educator'}</button>
            <div>|</div>
            <Link to='/my-enrollments'>My Enrollments</Link>
          </>}
        </div>
        {
          user ? <UserButton/> : <button onClick={()=> openSignIn()}><img src={assets.user_icon} alt="" /></button>
        }
      </div>
    </div>
  )
}

export default Navbar