import React, { FormEvent, useState } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import * as AiIcon from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Checkbox from '@mui/material/Checkbox'

const SignUp: React.FC = () => {
  const [citizen, setCitizen] = useState<string>('')
  const [laser1, setLaser1] = useState<string>('')
  const [laser2, setLaser2] = useState<string>('')
  const [laser3, setLaser3] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault()
    if (
      !citizen ||
      !laser1 ||
      !laser2 ||
      !laser3 ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      alertErrorMessage('Fields must not be empty')
      return
    }

    if (password !== confirmPassword) {
      alertErrorMessage('Password mismatch!')
      return
    }

    const data = {
      citizen,
      laserId: `${laser1}-${laser2}-${laser3}`,
      email,
      password,
      confirmPassword,
    }
    console.log(data)
  }

  const alertErrorMessage = (message: string) => {
    toast.error(message, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  }

  const onCheckHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <div className='bg-navbar min-h-screen flex flex-col'>
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
      <div className='container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <form
          onSubmit={onSubmitHandler}
          className='bg-white px-6 py-8 rounded-lg shadow-md text-black w-full'
        >
          <div className='mb-8 flex flex-row text-3xl items-center justify-center relative'>
            <Link to='/'>
              <IoChevronBackOutline className='border border-gray-300 rounded-md absolute left-0 top-1/2 -translate-y-1/2' />
            </Link>
            <h1 className='text-center font-bold'>Sign Up</h1>
          </div>
          <input
            type='text'
            maxLength={13}
            className='block bg-gray-100 border border-grey-light w-full p-3 rounded-md mb-4'
            placeholder='Citizen ID'
            value={citizen}
            onChange={(e) => setCitizen(e.target.value)}
          />
          <div className='flex items-center mb-4'>
            <input
              type='text'
              className='block bg-gray-100 border border-grey-light p-3 rounded-md w-16 sm:w-28'
              placeholder='Laser ID'
              value={laser1}
              onChange={(e) => setLaser1(e.target.value.toUpperCase())}
            />
            <AiIcon.AiOutlineMinus className='mx-2 text-md' />
            <input
              type='text'
              className='block bg-gray-100 border border-grey-light w-full p-3 rounded-md flex-1'
              placeholder='Laser ID'
              value={laser2}
              onChange={(e) => setLaser2(e.target.value)}
            />
            <AiIcon.AiOutlineMinus className='mx-2 text-md' />
            <input
              type='text'
              className='block bg-gray-100 border border-grey-light p-3 rounded-md w-16 sm:w-28'
              placeholder='Laser ID'
              value={laser3}
              onChange={(e) => setLaser3(e.target.value)}
            />
          </div>
          <input
            type='email'
            className='block bg-gray-100 border border-grey-light w-full p-3 rounded-md mb-4'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            className='block bg-gray-100 border border-grey-light w-full p-3 rounded-md mb-4'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type='password'
            className='block bg-gray-100 border border-grey-light w-full p-3 rounded-md mb-4'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className='text-sm text-grey-dark my-4 flex items-center'>
            <Checkbox checked={checked} onChange={onCheckHandler} />
            <span>
              You agree to the
              <a
                className='no-underline border-b border-grey-dark text-grey-dark'
                href='#'
              >
                {' Terms of Service '}
              </a>
              and
              <a
                className='no-underline border-b border-grey-dark text-grey-dark'
                href='#'
              >
                {' Privacy Policy '}
              </a>
            </span>
          </div>
          <button
            type='submit'
            className='w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none'
          >
            Create Account
          </button>
        </form>
        <div className='text-grey-dark mt-6'>
          Already have an account? {}
          <a
            className='no-underline border-b border-blue text-blue'
            href='/login'
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
