import React, { useEffect, useState } from 'react'
import { sessionGet, sessionSet } from '../utils/storage'
import { delay } from '../utils/time'

const CookieInformation = () => {
  const [isAccepted, setIsAccepted] = useState<boolean | null>(false)

  const [isClicked, setIsClicked] = useState<boolean>(false)

  useEffect(() => {
    const isAcceptedFromSession = sessionGet('acceptedCookie')

    setIsAccepted(isAcceptedFromSession)
  }, [])

  const handleClick = async () => {
    setIsClicked(true)
    await delay(700)

    setIsAccepted(true)

    sessionSet('acceptedCookie', true)
  }

  if (isAccepted) return null

  return (
    <div
      className={`w-screen xs:w-[405px] fixed bg-whitesmoke text-zinc-800 left-1/2 -translate-x-1/2 py-3 px-6 rounded-t-md duration-700
        ${!isAccepted && isClicked ? 'bottom-[-405px]' : 'bottom-0'}
      `}
      data-testid='cookie-information'
    >
      <div className='relative w-max'>
        <h1 className='text-3xl font-bold'>We uses cookies</h1>
        <div className='absolute bottom-0 left-1 z-[-10] w-full h-1/2 bg-blue-200'></div>
      </div>
      <p className='mt-2 mb-4'>
        We use <span className='font-bold'>cookies</span> to make your
        experience on this website better
      </p>
      <div className='flex items-center'>
        <button
          className='bg-green-500 hover:bg-green-400 text-whitesmoke py-2 px-6 font-semibold rounded mr-6 duration-300'
          onClick={handleClick}
        >
          I understood
        </button>
        <a
          href='https://www.cloudflare.com/learning/privacy/what-are-cookies/'
          target='_blank'
          rel='noreferrer'
          className='underline'
        >
          Learn more
        </a>
      </div>
    </div>
  )
}

export default CookieInformation
