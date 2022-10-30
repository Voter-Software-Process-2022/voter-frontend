import { useState } from 'react'

// referecnse: https://linguinecode.com/post/focus-next-input-in-react
export default function useSSNFields() {
  const [ssnValue, setSsnValue] = useState({
    ssn1: '',
    ssn2: '',
    ssn3: '',
  })

  return {
    handleChangeFocusInput: (
      e: React.ChangeEvent<HTMLInputElement>,
      setReturnValue: React.Dispatch<React.SetStateAction<string>>,
    ) => {
      const { maxLength, value, name } = e.target
      const [, fieldIndex] = name.split('-')

      // Check if they hit the max character length
      if (value.length >= maxLength) {
        // Check if it's not the last input field
        if (parseInt(fieldIndex, 10) < 3) {
          // Get the next input field
          const nextSibling = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`,
          ) as HTMLElement | null

          // If found, focus the next field
          if (nextSibling !== null) {
            nextSibling.focus()
          }
        }
      }

      setSsnValue({ ...ssnValue, [`ssn${fieldIndex}`]: value })
      setReturnValue(value.toUpperCase())
    },
  }
}
