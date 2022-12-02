import React from 'react'
import Logo from './../assets/images/gov-logo.png'

const FooterSection: React.FC = () => {
  return (
    <footer className='p-4 shadow md:px-6 md:py-8 dark:bg-gray-900'>
      <div className='sm:flex sm:items-center sm:justify-between'>
        <a
          href='https://github.com/Voter-Software-Process-2022'
          className='flex items-center mb-4 sm:mb-0'
          data-testid='royal-thai-government'
        >
          <img src={Logo} className='mr-3 h-8' alt='Government Logo' />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Royal Thai Government
          </span>
        </a>
        <ul className='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
          <li>
            <a
              href='https://github.com/orgs/Voter-Software-Process-2022/people'
              className='mr-4 hover:underline md:mr-6 '
              target='_blank'
              rel='noreferrer'
            >
              About
            </a>
          </li>
          <li>
            <a
              href='https://github.com/Voter-Software-Process-2022'
              className='mr-4 hover:underline md:mr-6 '
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
          <li>
            <a
              href='https://github.com/Voter-Software-Process-2022/voter-frontend/issues'
              className='hover:underline'
              target='_blank'
              rel='noreferrer'
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        © 2022{' '}
        <a
          href='https://github.com/Voter-Software-Process-2022'
          className='hover:underline'
          target='_blank'
          rel='noreferrer'
        >
          Yak3BdPro
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  )
}

export default FooterSection
