import { useEffect, type RefObject } from 'react'

export default function useOutsideAlerter(
  ref: RefObject<HTMLInputElement>,
  setAction: (action: boolean) => void,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLInputElement
      if (ref.current && !ref.current.contains(target)) {
        setAction(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}
