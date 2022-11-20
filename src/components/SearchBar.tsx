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
    <div className='pt-2 relative mx-auto text-gray-600'>
      <div className='flex flex-row border-2 px-5 border-gray-300 bg-white rounded-full'>
        <div className='mr-3 self-center'>
          <IoSearch />
        </div>
        <div>
          <input
            className='bg-white h-10 w-56 rounded-lg text-sm focus:outline-none'
            type='search'
            name='search'
            placeholder={placeholderWord}
            onChange={onChangeHandler}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
