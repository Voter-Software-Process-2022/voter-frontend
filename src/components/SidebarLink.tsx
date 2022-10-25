import React, { useState } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { MenuList } from '../interfaces/menu'

const SidebarLink: React.FC<MenuList> = ({ topic, subTopic }) => {
  const [subnav, setSubnav] = useState(false)

  const showSubnav = () => setSubnav(!subnav)

  return (
    <React.Fragment>
      <div
        onClick={showSubnav}
        className='py-4 border-r-4 border-navbar hover:border-r-4 hover:border-[#632ce4] hover:bg-[#ffffff26] cursor-pointer'
      >
        <div className='flex items-center justify-between mx-8'>
          <span className='text-slate-300 text-xl font-medium'>{topic}</span>
          {subTopic.length !== 0 && (
            <AiOutlineCaretDown
              className={`duration-300 ${subnav ? '-rotate-180' : ''}`}
            />
          )}
        </div>
      </div>
      {subnav &&
        subTopic.map((subTopic: string, index: number) => (
          <div
            key={index}
            className='bg-[#23263b] py-4 hover:bg-[#632ce4] cursor-pointer'
          >
            <div className='flex items-center justify-between mx-12'>
              <span className='text-slate-300 text-lg font-medium'>
                {subTopic}
              </span>
            </div>
          </div>
        ))}
    </React.Fragment>
  )
}

export default SidebarLink
