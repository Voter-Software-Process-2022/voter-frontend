import { useEffect } from 'react'

export default function useOutsideAlerter(
  ref: React.RefObject<HTMLInputElement>,
  setAction: (actioin: boolean) => void,
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
