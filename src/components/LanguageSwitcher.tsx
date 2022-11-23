import React from 'react'
import type { LanguageSwitcherProps } from '../interfaces/components/languageSwitcher'
import USFlag from './../assets/images/flag-us.png'
import THFlag from './../assets/images/flag-th.png'

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const onToggleHandler = () => setIsOpen(!isOpen)

  return (
    <div
      className='relative w-11 h-6 bg-slate-200 rounded-2xl cursor-pointer'
      onClick={onToggleHandler}
      data-testid='flag'
    >
      {isOpen ? (
        <img
          src={THFlag}
          alt='language'
          className='absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-cover border border-slate-600 duration-150 left-[22px] select-none'
        />
      ) : (
        <img
          src={USFlag}
          alt='language'
          className='absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-cover border border-slate-600 duration-150 left-[2px] select-none'
        />
      )}
    </div>
  )
}

export default LanguageSwitcher
