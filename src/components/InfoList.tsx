import React from 'react'
import InfoCard from './InfoCard'

const InfoList: React.FC = () => {
  return (
    <div className='bg-white'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-black px-[15rem]'>
        <InfoCard id={1} name={'John Ocha'} description='description here' />
        <InfoCard id={2} name={'john2'} description='description here' />
        <InfoCard id={3} name={'john3'} description='description here' />
        <InfoCard id={4} name={'john4'} description='description here' />
        <InfoCard id={5} name={'john5'} description='description here' />
        <InfoCard id={6} name={'john6'} description='description here' />
        <InfoCard id={7} name={'john7'} description='description here' />
        <InfoCard id={8} name={'john8'} description='description here' />
      </div>
    </div>
  )
}

export default InfoList
