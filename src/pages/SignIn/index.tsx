import React, { useState, type FormEvent } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'
import { alertErrorMessage } from '../../utils/alert'
import useSSNFields from '../../hooks/useSSNFields'
import * as AiIcon from 'react-icons/ai'
import * as VSCIcon from 'react-icons/vsc'
import { LaserInfo, Loader } from '../../components'
import { useAppDispatch } from '../../app/hooks'
import { fetchLogin } from '../../features/user/userSlice'

const SignIn: React.FC = () => {
  const [citizen, setCitizen] = useState<string>('')
  const [laser1, setLaser1] = useState<string>('')
  const [laser2, setLaser2] = useState<string>('')
  const [laser3, setLaser3] = useState<string>('')
  const { handleChangeFocusInput } = useSSNFields()
  const [isHoverInfo, setIsHoverInfo] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    if (!citizen || !laser1 || !laser2 || !laser3) {
      alertErrorMessage('Fields must not be empty', true)
      setIsLoading(false)
      return
    }

    const data = {
      citizenId: citizen,
      laserId: `${laser1}${laser2}${laser3}`,
    }

    const { payload } = await dispatch(fetchLogin(data))
    setIsLoading(false)
    if (!payload) {
      alertErrorMessage(
        'Cannot authenticate with this CitizenID and LaserID',
        true,
      )
    }
  }

  return (
    <div className='bg-gray-800 flex flex-col min-h-screen'>
      {isLoading && <Loader />}
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
          <label htmlFor='citizen' className='text-lg'>
            Citizen ID
          </label>
          <input
            id='citizen'
            type='text'
            maxLength={13}
            className='border border-gray-300 block w-full p-3 mt-2 mb-4 bg-gray-100 rounded-md focus:outline-none focus:border-gray-400'
            placeholder='eg. 1200349992429'
            value={citizen}
            onChange={(e) => setCitizen(e.target.value)}
          />
          <label htmlFor='laser' className='text-lg'>
            Laser ID
          </label>
          <div className='flex items-center mt-2 mb-4 relative'>
            <input
              type='text'
              className='border border-gray-300  sm:w-28 block w-16 p-3 bg-gray-100 rounded-md focus:outline-none focus:border-gray-400'
              name='ssn-1'
              maxLength={3}
              placeholder={'eg. RP7'}
              value={laser1}
              onChange={(e) => handleChangeFocusInput(e, setLaser1)}
            />
            <AiIcon.AiOutlineMinus className='text-xs mx-2' />
            <input
              type='text'
              className='border border-gray-300  flex-1 block w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:border-gray-400'
              name='ssn-2'
              maxLength={7}
              placeholder={'eg. 1234567'}
              value={laser2}
              onChange={(e) => handleChangeFocusInput(e, setLaser2)}
            />
            <AiIcon.AiOutlineMinus className='text-xs mx-2' />
            <input
              type='text'
              className='border border-gray-300  sm:w-28 block w-16 p-3 bg-gray-100 rounded-md focus:outline-none focus:border-gray-400'
              name='ssn-3'
              maxLength={2}
              placeholder={'eg. 89'}
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
          <button
            type='submit'
            className='hover:bg-green-600 focus:outline-none w-full py-3 text-center text-white bg-green-500 rounded'
            onClick={onSubmitHandler}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
