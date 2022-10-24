import React from 'react'
import { Link } from 'react-router-dom'
import { IoPersonSharp } from 'react-icons/io5'
import { HiOutlineBars3BottomRight, HiOutlineXMark } from 'react-icons/hi2'
import { NavbarProps } from '../../interfaces/components/navbar'

const NAVBAR_LIST = ['Home', 'Vote', 'Information', 'About']

const Navbar: React.FC<NavbarProps> = ({ isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <div className='w-full flex items-center justify-between py-3 px-12 bg-navbar'>
      <div className='flex'>
        <div className='flex items-center'>
          <img src='../src/assets/images/gov-logo.png' className='w-16' />
          <div className='flex flex-col mx-4 font-thai'>
            <span className='text-2xl'>รัฐบาลไทย</span>
            <span>Royal Thai Government</span>
          </div>
        </div>
        <div className='hidden items-center text-lg font-semibold ml-4 lg:flex'>
          {NAVBAR_LIST.map((topic, index) => (
            <span
              className='mx-1 px-2 py-1 cursor-pointer duration-300 hover:bg-[#ffffff26] hover:rounded-lg'
              key={index}
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
      <div className='flex items-center'>
        {!isOpenSidebar ? (
          <HiOutlineBars3BottomRight
            className='text-3xl lg:hidden cursor-pointer'
            onClick={() => setIsOpenSidebar(true)}
          />
        ) : (
          <HiOutlineXMark
            className='text-3xl lg:hidden cursor-pointer'
            onClick={() => setIsOpenSidebar(false)}
          />
        )}
        <div className='hidden lg:flex items-center h-[40px] bg-[#ffffff17] rounded-lg'>
          <Link to='/register'>
            <div className='flex items-center px-4 py-2 cursor-pointer duration-300 hover:bg-[#ffffff26] hover:rounded-l-lg '>
              <IoPersonSharp className='mr-2' />
              <span>Sign up</span>
            </div>
          </Link>
          <div className='w-[0.5px] bg-white h-[70%]'></div>
          <Link to='/login'>
            <div className='px-4 py-2 cursor-pointer duration-300 hover:bg-[#ffffff26] hover:rounded-r-lg'>
              <span>Sign in</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
