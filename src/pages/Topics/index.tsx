import React, { useState } from 'react'
import { Navbar, Sidebar, FooterSection, TopicCard } from '../../components'
import { TOPIC_LIST } from '../../config/mockTopics'

const Topics = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)

  return (
    <div className='w-full overflow-x-hidden bg-white'>
      <Navbar
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
      <div className='relative'>
        <Sidebar
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
      </div>
      <div className='flex justify-center mx-auto max-w-4xl py-16 px-8 sm:py-24 sm:px-6 lg:min-w-[56rem] lg:max-w-7xl lg:px-8'>
        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {TOPIC_LIST.map((topic) => (
            <TopicCard
              key={topic.topicId}
              topicId={topic.topicId}
              topicName={topic.topicName}
            />
          ))}
        </div>
      </div>
      <FooterSection />
    </div>
  )
}

export default Topics
