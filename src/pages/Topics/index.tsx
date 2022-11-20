import React, { useState } from 'react'
import { LanguageSwitcher, Navbar, Sidebar, TopicCard } from '../../components'
import SearchBar from '../../components/SearchBar'
import { TOPIC_LIST } from '../../config/mockTopics'
import {
  thaiSearchPlaceholder,
  englishSearchPlaceholder,
} from '../../config/searchWords'

const Topics = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  const [isThaiLanguage, setIsThaiLanguage] = useState<boolean>(true)
  const [filterWord, setFilterWord] = useState<string>('')

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterWord(e.target.value)
  }

  const filteredTopicList = TOPIC_LIST.filter((topic) =>
    topic.topicName.toLowerCase().includes(filterWord.toLowerCase()),
  )

  const selectedSearch = isThaiLanguage
    ? thaiSearchPlaceholder
    : englishSearchPlaceholder

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
      <div className='flex flex-col justify-center mx-auto max-w-4xl py-16 px-8 sm:py-12 sm:px-6 lg:min-w-[56rem] lg:max-w-7xl lg:px-8'>
        <div className='flex flex-row ml-[54px] '>
          <SearchBar
            onChangeHandler={searchHandler}
            placeholderWord={selectedSearch.search}
          />
          <div className='self-center'>
            <LanguageSwitcher
              isOpen={isThaiLanguage}
              setIsOpen={setIsThaiLanguage}
            />
          </div>
        </div>
        <div className='mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {selectedTopicList.map((topic) => (
            <TopicCard
              key={topic.topicId}
              topicId={topic.topicId}
              topicName={topic.topicName}
              isThaiLanguage={isThaiLanguage}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Topics
