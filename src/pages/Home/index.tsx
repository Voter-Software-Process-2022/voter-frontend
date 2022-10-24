import React from 'react'
import { Navbar, Video } from '../../components'
import { FaChevronDown } from 'react-icons/fa'

const Home: React.FC = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <Video>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80'>
          <img src='../src/assets/images/center-logo.png' />
        </div>
        <a
          href='#'
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        >
          <FaChevronDown className='text-3xl' />
        </a>
      </Video>
    </div>
  )
}

export default Home
