import React, { useRef } from 'react'
import type { SidebarProps } from '../interfaces/components/sidebar'
import SidebarLink from './SidebarLink'
import { IoPersonSharp } from 'react-icons/io5'
import useOutsideAlerter from '../hooks/useOutsideAlerter'
import { MENU_LIST } from '../config/menu'

const Sidebar: React.FC<SidebarProps> = ({
  isOpenSidebar,
  setIsOpenSidebar,
}) => {
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, setIsOpenSidebar)

  return (
    <div
      className={`w-[350px] h-[calc(100vh-88px)] bg-navbar absolute top-0 duration-500 ${
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
        <div className='py-4 hover:border-r-4 hover:border-[#632ce4] hover:bg-[#ffffff26] cursor-pointer'>
          <div className='flex items-center mx-8'>
            <IoPersonSharp className='mr-4 text-lg' />
            <span className='text-slate-300 text-xl font-medium'>
              Sign In / Sign Up
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
