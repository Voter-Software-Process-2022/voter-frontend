import React, { useState } from 'react'
import { Navbar, Sidebar, TopicCard } from '../../components'
import SearchBar from '../../components/SearchBar'
import { TOPIC_LIST } from '../../config/mockTopics'

const Topics = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  const [filterWord, setFilterWord] = useState<string>('')

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterWord(e.target.value)
  }

  const filteredTopicList = TOPIC_LIST.filter((topic) =>
    topic.topicName.toLowerCase().includes(filterWord.toLowerCase()),
  )

  const selectedTopicList = filterWord === '' ? TOPIC_LIST : filteredTopicList

  return (
    <div className='w-full overflow-x-hidden bg-white min-h-screen'>
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
      <div className='flex flex-col justify-center mx-auto max-w-4xl py-16 px-8 sm:py-24 sm:px-6 lg:min-w-[56rem] lg:max-w-7xl lg:px-8'>
        <SearchBar onChangeHandler={searchHandler} />
        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {selectedTopicList.map((topic) => (
            <TopicCard
              key={topic.topicId}
              topicId={topic.topicId}
              topicName={topic.topicName}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Topics
