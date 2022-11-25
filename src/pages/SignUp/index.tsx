import React, { useState, type FormEvent } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import * as AiIcon from 'react-icons/ai'
import * as VSCIcon from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Checkbox from '@mui/material/Checkbox'
import { alertErrorMessage } from '../../utils/alert'
import useSSNFields from '../../hooks/useSSNFields'
import { LaserInfo } from '../../components'

const SignUp: React.FC = () => {
  const [citizen, setCitizen] = useState<string>('')
  const [laser1, setLaser1] = useState<string>('')
  const [laser2, setLaser2] = useState<string>('')
  const [laser3, setLaser3] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)
  const [isHoverInfo, setIsHoverInfo] = useState<boolean>(false)
  const { handleChangeFocusInput } = useSSNFields()

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
      alertErrorMessage('Fields must not be empty', true)
      return
    }

    if (password !== confirmPassword) {
      alertErrorMessage('Password mismatch!', true)
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

  const onCheckHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
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
            <h1 className='font-bold text-center'>Sign Up</h1>
          </div>
          <input
            type='text'
            maxLength={13}
            className='border-grey-light block w-full p-3 mb-4 bg-gray-100 border rounded-md'
            placeholder='Citizen ID'
            value={citizen}
            onChange={(e) => setCitizen(e.target.value)}
          />
          <div className='flex items-center mb-4 relative'>
            <input
              type='text'
              className='border-grey-light sm:w-28 block w-16 p-3 bg-gray-100 border rounded-md'
              placeholder='Laser ID'
              name='ssn-1'
              maxLength={3}
              value={laser1}
              onChange={(e) => handleChangeFocusInput(e, setLaser1)}
            />
            <AiIcon.AiOutlineMinus className='text-xs mx-2' />
            <input
              type='text'
              className='border-grey-light flex-1 block w-full p-3 bg-gray-100 border rounded-md'
              placeholder='Laser ID'
              name='ssn-2'
              maxLength={7}
              value={laser2}
              onChange={(e) => handleChangeFocusInput(e, setLaser2)}
            />
            <AiIcon.AiOutlineMinus className='text-xs mx-2' />
            <input
              type='text'
              className='border-grey-light sm:w-28 block w-16 p-3 bg-gray-100 border rounded-md'
              placeholder='Laser ID'
              name='ssn-3'
              maxLength={2}
              value={laser3}
              onChange={(e) => handleChangeFocusInput(e, setLaser3)}
            />
            <VSCIcon.VscInfo
              onMouseOver={() => setIsHoverInfo(true)}
              onMouseLeave={() => setIsHoverInfo(false)}
              className='hidden sm:block text-slate-400 ml-2 text-lg cursor-pointer'
            />
            <LaserInfo isOpen={isHoverInfo} />
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
          <input
            type='password'
            className='border-grey-light block w-full p-3 mb-4 bg-gray-100 border rounded-md'
            minLength={6}
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className='text-grey-dark flex items-center my-4 text-sm'>
            <Checkbox checked={checked} onChange={onCheckHandler} />
            <span>
              You agree to the
              <a
                className='border-grey-dark text-grey-dark no-underline border-b'
                href='/'
              >
                {' Terms of Service '}
              </a>
              and
              <a
                className='border-grey-dark text-grey-dark no-underline border-b'
                href='/'
              >
                {' Privacy Policy '}
              </a>
            </span>
          </div>
          <button
            type='submit'
            disabled={!checked}
            className={`${
              checked ? 'hover:bg-green-600 bg-green-500' : 'bg-slate-300'
            } focus:outline-none w-full py-3 text-center text-white rounded`}
          >
            Create Account
          </button>
        </form>
        <div className='text-grey-dark mt-6'>
          {'Already have an account? '}
          <a
            className='border-blue text-blue no-underline border-b'
            href='/login'
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignUp
