import React from 'react'
import LaserInformationImage from './../assets/images/laser.png'

interface LaserInfomationProps {
  isOpen: boolean
}

const LaserInfomation: React.FC<LaserInfomationProps> = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? 'opacity-1' : 'opacity-0'
      } absolute bottom-[3.2rem] right-0 lg:bottom-[unset] lg:-right-[16rem] w-60 duration-500 z-[0]`}
    >
      <img src={LaserInformationImage} alt='laser' className='rounded-md' />
    </div>
  )
}

export default LaserInfomation
