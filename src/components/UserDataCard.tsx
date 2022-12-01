import React, { Fragment, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'
import { BiLogOut } from 'react-icons/bi'
import useOutsideAlerter from '../hooks/useOutsideAlerter'
import { useAppDispatch } from '../app/hooks'
import {
  setAllowedVoteTopics,
  setAuthUser,
  setIsAcceptedRules,
  setIsAuthenticated,
} from '../features/user/userSlice'
import Cookies from 'js-cookie'

const UserDataCard: React.FC = () => {
  const [isOpenData, setIsOpenData] = useState<boolean>(false)
  const authUser = useSelector((state: RootState) => state.user.authUser)
  const dispatch = useAppDispatch()

  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, setIsOpenData)

  const onLogoutHandler = () => {
    dispatch(setIsAuthenticated(false))
    dispatch(setIsAcceptedRules(false))
    dispatch(setAuthUser(null))
    dispatch(setAllowedVoteTopics([]))
    Cookies.remove('token')
  }

  return (
    <div className='relative'>
      {authUser && (
        <Fragment>
          <div
            className='w-12 h-12 rounded-full bg-[#ffaeae] flex items-center justify-center shadow-lg hover:bg-[#e49898] cursor-pointer'
            onClick={() => setIsOpenData(true)}
          >
            <span className='text-xl font-medium select-none'>
              {authUser.Name?.charAt(0)}
            </span>
          </div>
          {isOpenData && (
            <div
              className='absolute flex flex-col min-w-max bg-slate-100 text-black top-14 right-0 rounded py-2 px-4 shadow-xl z-10'
              ref={wrapperRef}
            >
              <div className='flex'>
                <div className='mr-2 font-medium'>
                  <p>Name :</p>
                  <p>Citizen ID :</p>
                  <p>Laser ID :</p>
                  <p>Date of Birth :</p>
                  <p>Nationality :</p>
                </div>
                <div className='flex-1'>
                  <p>
                    {authUser.Name} {authUser.Lastname}
                  </p>
                  <p>{authUser.CitizenID}</p>
                  <p>{authUser.LazerID}</p>
                  <p>{authUser.Birthday?.split('T')[0]}</p>
                  <p>{authUser.Nationality}</p>
                </div>
              </div>
              <div
                className='mt-2 bg-slate-200 flex items-center justify-center py-2 rounded cursor-pointer hover:bg-slate-300'
                onClick={onLogoutHandler}
              >
                <BiLogOut className='text-2xl mr-2' />
                <span className='font-semibold'>LOGOUT</span>
              </div>
            </div>
          )}
        </Fragment>
      )}
    </div>
  )
}

export default UserDataCard
