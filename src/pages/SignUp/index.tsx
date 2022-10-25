import React from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const SignUp: React.FC = () => {
  return (
    <div className='bg-grey-lighter min-h-screen flex flex-col'>
      <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <form className='bg-white px-6 py-8 rounded-lg shadow-md text-black w-full'>
          <div className='mb-8 flex flex-row text-3xl'>
            <Link to='/'>
              <IoChevronBackOutline className='border border-gray-300 rounded-md' />
            </Link>
            <h1 className='text-center'>Sign Up</h1>
          </div>
          <input
            type='text'
            className='block bg-gray-100 border border-grey-light w-full p-3 rounded-md mb-4'
            placeholder='Citizen ID'
          />
          <input
            type='text'
            className='block bg-gray-100 border border-grey-light w-full p-3 rounded-md mb-4'
            placeholder='Laser ID'
          />
          <input
            type='text'
            className='block bg-gray-100 border border-grey-light w-full p-3 rounded-md mb-4'
            placeholder='Email'
          />
          <input
            type='text'
            className='block bg-gray-100 border border-grey-light w-full p-3 rounded-md mb-4'
            placeholder='Password'
          />
          <input
            type='text'
            className='block bg-gray-100 border border-grey-light w-full p-3 rounded-md mb-4'
            placeholder='Confirm Password'
          />

          <button
            type='submit'
            className='w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1'
          >
            Create Account
          </button>

          <div className='text-center text-sm text-grey-dark mt-4'>
            By signing up, you agree to the {}
            <a
              className='no-underline border-b border-grey-dark text-grey-dark'
              href='#'
            >
              Terms of Service
            </a>{' '}
            {} and {}
            <a
              className='no-underline border-b border-grey-dark text-grey-dark'
              href='#'
            >
              Privacy Policy
            </a>
          </div>
        </form>
        <div className='text-grey-dark mt-6'>
          Already have an account? {}
          <a
            className='no-underline border-b border-blue text-blue'
            href='../login/'
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  )
}

export default SignUp
