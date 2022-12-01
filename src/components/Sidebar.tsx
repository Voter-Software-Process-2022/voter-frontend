import React, { Fragment, useRef } from 'react'
import type { SidebarProps } from '../interfaces/components/sidebar'
import SidebarLink from './SidebarLink'
import { IoPersonSharp } from 'react-icons/io5'
import useOutsideAlerter from '../hooks/useOutsideAlerter'
import { MENU_LIST } from '../config/menu'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { isUserAuthenticated } from '../features/user/userSlice'
import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'

const Sidebar: React.FC<SidebarProps> = ({
  isOpenSidebar,
  setIsOpenSidebar,
}) => {
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, setIsOpenSidebar)
  const verifyUserAuthenticated = useAppSelector(isUserAuthenticated)
  const authUser = useSelector((state: RootState) => state.user.authUser)

  return (
    <div
      className={`fixed w-[350px] h-[calc(100vh-88px)] bg-gray-900 top-[88px] duration-500 ${
        isOpenSidebar ? 'right-0' : '-right-[350px]'
      } flex flex-col justify-between lg:hidden`}
      ref={wrapperRef}
    >
      <div className='flex flex-col'>
        {MENU_LIST.map((list, index) => (
          <SidebarLink
            topic={list.topic}
            subTopic={list.subTopic}
            hasSubTopic={list.hasSubTopic}
            path={list.path}
            key={index}
          />
        ))}
      </div>
      <div className='mb-8'>
        {verifyUserAuthenticated ? (
          <div className='flex items-center mx-4'>
            {authUser && (
              <Fragment>
                <div className='w-12 h-12 rounded-full bg-[#ffaeae] flex items-center justify-center shadow-lg'>
                  <span className='text-xl font-medium select-none'>
                    {authUser.Name?.charAt(0)}
                  </span>
                </div>
                <span className='ml-4 text-xl'>
                  {authUser.Name} {authUser.Lastname}
                </span>
              </Fragment>
            )}
          </div>
        ) : (
          <Link to='/login'>
            <div className='py-4 hover:border-r-4 hover:border-[#632ce4] hover:bg-[#ffffff26] cursor-pointer'>
              <div className='flex items-center mx-8'>
                <IoPersonSharp className='mr-4 text-lg' />
                <span className='text-slate-300 text-xl font-medium'>
                  Sign In
                </span>
              </div>
            </div>
          </Link>
        )}
        {/* <div className='py-4 hover:border-r-4 hover:border-[#632ce4] hover:bg-[#ffffff26] cursor-pointer'>
          <div className='flex items-center mx-8'>
            <FaSignInAlt className='mr-4 text-lg' />
            <Link to='/register'>
              <span className='text-slate-300 text-xl font-medium'>
                Sign Up
              </span>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Sidebar
