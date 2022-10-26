import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useOutsideAlerter from '../hooks/useOutsideAlerter'
import type { MenuList } from '../interfaces/menu'

const NavbarLink: React.FC<MenuList> = ({
  topic,
  subTopic,
  hasSubTopic,
  path,
}) => {
  const [subnav, setSubnav] = useState(false)
  const navigate = useNavigate()

  const showSubnav = () => {
    if (!hasSubTopic && path) {
      navigate(path)
    } else {
      setSubnav(true)
    }
  }

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
        <span data-testid='navbar-topic' className='select-none'>
          {topic}
        </span>
        <div
          className='top-12 absolute left-0 z-10 overflow-hidden rounded-sm'
          ref={wrapperRef}
        >
          {subnav &&
            subTopic.map((subTopic, index) => (
              <div
                key={index}
                className='p-4 w-64 border-r-4 border-[#f5f5f5] bg-[#f5f5f5] hover:bg-[#d9d9d9] text-slate-800 hover:border-r-4 hover:border-[#632ce4]'
                onClick={() => navigate(subTopic.path)}
              >
                <span className='text-base'>{subTopic.topic}</span>
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default NavbarLink
