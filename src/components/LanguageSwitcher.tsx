import React from 'react'
import type { LanguageSwitcherProps } from '../interfaces/components/languageSwitcher'

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const onToggleHandler = () => setIsOpen(!isOpen)

  return (
    <div
      className='relative w-11 h-6 bg-slate-200 rounded-2xl cursor-pointer'
      onClick={onToggleHandler}
    >
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-cover border border-slate-600 duration-150
        ${isOpen ? 'left-[22px] bg-th-flag' : 'left-[2px] bg-us-flag'}`}
        data-testid='flag'
      ></div>
    </div>
  )
}

export default LanguageSwitcher
