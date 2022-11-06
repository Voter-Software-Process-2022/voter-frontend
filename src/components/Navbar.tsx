import React from 'react'
import { Link } from 'react-router-dom'
import { IoPersonSharp } from 'react-icons/io5'
import { VscListSelection, VscClose } from 'react-icons/vsc'
import type { NavbarProps } from './../interfaces/components/navbar'
import NavbarLink from './NavbarLink'
import Logo from './../assets/images/gov-logo.png'
import { MENU_LIST } from '../config/menu'

const Navbar: React.FC<NavbarProps> = ({ isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <div className='w-full flex items-center justify-between py-3 px-6 sm:px-12 bg-navbar h-[88px]'>
      <div className='flex'>
        <div className='flex items-center'>
          <img src={Logo} className='w-16' alt='logo' />
          <div className='font-chraka xs:flex flex-col hidden mx-4'>
            <span className='text-2xl '>รัฐบาลไทย</span>
            <span>Royal Thai Government</span>
          </div>
        </div>
        <div className='lg:flex items-center hidden ml-4 text-lg font-semibold'>
          {MENU_LIST.map((list, index) => (
            <NavbarLink
              topic={list.topic}
              subTopic={list.subTopic}
              hasSubTopic={list.hasSubTopic}
              path={list.path}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className='flex items-center'>
        {!isOpenSidebar ? (
          <VscListSelection
            className='lg:hidden text-3xl rotate-180 cursor-pointer'
            onClick={() => setIsOpenSidebar(true)}
          />
        ) : (
          <VscClose
            className='lg:hidden text-4xl cursor-pointer'
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
