import React from 'react'
import { Link } from 'react-router-dom'
import type { InfoCardProps } from '../interfaces/infolist'

const InfoCard: React.FC<InfoCardProps> = ({ candidate, voteTopicId }) => {
  return (
    <div className='flex flex-col p-[1rem]'>
      <div className='w-[300px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-auto'>
        <div className='flex flex-col items-center pb-10 pt-[1rem]'>
          <div className='w-[10rem] h-[10rem] mb-3'>
            <img
              className='w-full h-full object-cover rounded-full shadow-lg'
              src={candidate.pictureUrl}
              alt='prayuth'
            />
          </div>
          <h5
            className='mb-1 text-xl font-medium text-gray-900 dark:text-white'
            data-testid='name-field'
          >
            {candidate.name}
          </h5>
          <span
            className='text-xl text-gray-500 dark:text-gray-400'
            data-testid='id-field'
          >
            # {candidate.id}
          </span>
          {voteTopicId === 2 && (
            <div className='flex mt-4 space-x-3 md:mt-6'>
              <Link
                to={`/topics/candidate/${candidate.id}`}
                className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                See Details
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default InfoCard
