import React, { useRef, useState } from 'react'
import useOutsideAlerter from '../hooks/useOutsideAlerter'
import { MenuList } from '../interfaces/menu'

const NavbarLink: React.FC<MenuList> = ({ topic, subTopic }) => {
  const [subnav, setSubnav] = useState(false)

  const showSubnav = () => setSubnav(true)

  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, setSubnav)

  return (
    <React.Fragment>
      <div
        className={`mx-1 px-2 py-1 cursor-pointer duration-300 hover:bg-[#ffffff26] hover:rounded-lg relative ${
          subnav ? 'bg-[#ffffff26] rounded-lg' : ''
        }`}
        onClick={showSubnav}
      >
        <span className='select-none'>{topic}</span>
        <div
          className='absolute left-0 top-12 z-10 rounded-sm overflow-hidden'
          ref={wrapperRef}
        >
          {subnav &&
            subTopic.map((subTopic: string, index: number) => (
              <div
                key={index}
                className='p-4 w-64 border-r-4 border-[#f5f5f5] bg-[#f5f5f5] hover:bg-[#d9d9d9] text-slate-800 hover:border-r-4 hover:border-[#632ce4]'
              >
                <span className='text-base'>{subTopic}</span>
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default NavbarLink
