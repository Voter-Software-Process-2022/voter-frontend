import React from 'react'
import type { TopicCardProps } from '../interfaces/components/topicCard'

const TopicCard: React.FC<TopicCardProps> = ({ topicId, topicName }) => {
  return (
    <div className='flex justify-between items-center group relative bg-white text-zinc-800 border border-gray-400 rounded-xl p-6'>
      <div className='flex text-2xl'>
        {topicName}: {topicId}
      </div>
      <div className='flex'>
        <div className='w-[0.5px] bg-gray-400 ml-4'></div>
        <div className='m-3 mr-1 justify-end w-24'>
          <button className='w-20 my-1 ml-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 px-3 py-2 text-center text-white bg-blue-700 rounded'>
            Vote
          </button>
          <button className='w-20 my-1 ml-4 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 px-3 py-2 text-center text-white bg-green-700 rounded'>
            Result
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopicCard
