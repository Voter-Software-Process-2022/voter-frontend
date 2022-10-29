import React, { useState, type FormEvent } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'
import { alertErrorMessage } from '../../utils/alert'

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      alertErrorMessage('Fields must not be empty')
      return
    }

    const data = {
      email,
      password,
    }
    console.log(data)
  }

  return (
    <div className='bg-navbar flex flex-col min-h-screen'>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <div className='container flex flex-col items-center justify-center flex-1 max-w-lg px-2 mx-auto'>
        <form
          onSubmit={onSubmitHandler}
          className='w-full px-6 py-8 text-black bg-white rounded-lg shadow-md'
        >
          <div className='relative flex flex-row items-center justify-center mb-8 text-3xl'>
            <Link to='/'>
              <IoChevronBackOutline className='top-1/2 absolute left-0 -translate-y-1/2 border border-gray-300 rounded-md' />
            </Link>
            <h1 className='font-bold text-center'>Sign In</h1>
          </div>
          <input
            type='email'
            className='border-grey-light block w-full p-3 mb-4 bg-gray-100 border rounded-md'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            className='border-grey-light block w-full p-3 mb-4 bg-gray-100 border rounded-md'
            placeholder='Password'
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='submit'
            className='hover:bg-green-600 focus:outline-none w-full py-3 text-center text-white bg-green-500 rounded'
          >
            Sign In
          </button>
        </form>
        <div className='text-grey-dark mt-6'>
          {'Does not have any account? '}
          <a
            className='border-blue text-blue no-underline border-b'
            href='/register'
          >
            Register
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignIn
