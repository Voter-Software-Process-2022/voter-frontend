import React, { useEffect, useRef } from 'react'
import { SidebarProps } from '../interfaces/components/sidebar'

const Sidebar: React.FC<SidebarProps> = ({
  isOpenSidebar,
  setIsOpenSidebar,
}) => {
  function useOutsideAlerter(ref: React.RefObject<HTMLInputElement>) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        const target = event.target as HTMLInputElement
        if (ref.current && !ref.current.contains(target)) {
          setIsOpenSidebar(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  return (
    <div
      className={`w-[350px] h-[calc(100vh-88px)] bg-red-500 absolute top-0 duration-500 ${
        isOpenSidebar ? 'right-0' : '-right-[350px]'
      }`}
      ref={wrapperRef}
    ></div>
  )
}

export default Sidebar
