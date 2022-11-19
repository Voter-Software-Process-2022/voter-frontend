import React, { type ChangeEventHandler } from 'react'
import { IoSearch } from 'react-icons/io5'

interface SearchBarProps {
  placeholderWord: string
  onChangeHandler: ChangeEventHandler<HTMLInputElement>
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholderWord,
  onChangeHandler,
}) => {
  return (
    <div className='flex pt-2 relative mx-auto text-gray-600'>
      <div className='flex-col border-2 px-5 py-2 border-gray-300 bg-white rounded-full'>
        <IoSearch />
        <input
          className='bg-white h-10 rounded-lg text-sm focus:outline-none'
          type='search'
          name='search'
          placeholder={placeholderWord}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  )
}

export default SearchBar
