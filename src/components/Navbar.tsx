import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoPersonSharp } from 'react-icons/io5'
import { VscListSelection, VscClose } from 'react-icons/vsc'
import type { NavbarProps } from './../interfaces/components/navbar'
import NavbarLink from './NavbarLink'
import Logo from './../assets/images/gov-logo.png'
import { MENU_LIST } from '../config/menu'
import UserDataCard from './UserDataCard'
import { useAppSelector } from '../app/hooks'
import { isUserAuthenticated } from '../features/user/userSlice'

const Navbar: React.FC<NavbarProps> = ({ isOpenSidebar, setIsOpenSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHomepage, setIsHomepage] = useState(false)
  const verifyUserAuthenticated = useAppSelector(isUserAuthenticated)

  useEffect(() => {
    setIsHomepage(window.location.pathname === '/')
    setIsScrolled(window.location.pathname !== '/')
  }, [])

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    if (window.location.pathname !== '/') {
      setIsScrolled(true)
    }
    return () => window.onscroll === null
  }

  return (
    <div
      className={`w-full flex items-center justify-between py-3 px-6 sm:px-12h-[88px] top-0 z-10 ${
        isHomepage ? 'fixed' : 'static'
      } ${
        !isScrolled ? 'bg-gray-900 lg:bg-transparent' : 'bg-gray-900 shadow-2xl'
      }`}
    >
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
        <div
          className={`hidden lg:flex items-center h-[40px] bg-[#ffffff17] rounded-lg ${
            !verifyUserAuthenticated ? 'rounded-lg' : 'rounded-full'
          }`}
        >
          {verifyUserAuthenticated ? (
            <UserDataCard />
          ) : (
            <Link to='/login'>
              <div className='flex items-center px-4 py-2 cursor-pointer duration-300 hover:bg-[#ffffff26] hover:rounded-lg'>
                <IoPersonSharp className='mr-2' />
                <span>Sign In</span>
              </div>
            </Link>
          )}
          {/* <div className='w-[0.5px] bg-white h-[70%]'></div>
          <Link to='/register'>
            <div className='px-4 py-2 cursor-pointer duration-300 hover:bg-[#ffffff26] hover:rounded-r-lg'>
              <span>Sign </span>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
