import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import type { RuleModalProps } from './../interfaces/components/ruleModal'
import { IoCloseOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/system'
import LanguageSwitcher from './LanguageSwitcher'
import { thaiRule, englishRule } from '../config/rulesWords'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
  isUserAuthenticated,
  setIsAcceptedRules,
} from '../features/user/userSlice'
import { alertErrorMessage } from '../utils/alert'

const RuleModal: React.FC<RuleModalProps> = ({
  topicId,
  canVote,
  isOpenRuleModal,
  setIsOpenRuleModal,
}) => {
  const [isThaiLanguage, setIsThaiLanguage] = useState<boolean>(true)
  const [checked, setChecked] = useState<boolean>(false)
  const navigate = useNavigate()
  const selectedRule = isThaiLanguage ? thaiRule : englishRule
  const listInnerRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()
  const verifyUserAuthenticated = useAppSelector(isUserAuthenticated)

  const onScrollHandler = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current
      setChecked(scrollTop + clientHeight === scrollHeight)
    }
  }

  const onClickHandler = (topicId: string | undefined) => {
    if (!canVote) {
      setIsOpenRuleModal(false)
      alertErrorMessage(
        !verifyUserAuthenticated
          ? 'You are not signed in or your token has expired!'
          : 'You already voted this topic!',
        false,
      )
    } else {
      dispatch(setIsAcceptedRules(true))
      navigate(`/topics/${topicId}/vote`)
    }
  }

  return (
    <Modal
      open={isOpenRuleModal}
      onClose={() => {
        setIsOpenRuleModal(false)
        setChecked(false)
      }}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      className='container flex flex-col items-center justify-center flex-1 w-full px-2 mx-auto text-black'
    >
      <div className='w-full px-4 py-8 sm:p-8 text-black bg-white rounded-lg shadow-md'>
        <Box className='w-full'>
          <div className='relative flex justify-between items-center'>
            <Stack direction='row' spacing={1} alignItems='center'>
              <LanguageSwitcher
                isOpen={isThaiLanguage}
                setIsOpen={setIsThaiLanguage}
              />
            </Stack>
            <Typography
              id='modal-modal-title'
              className='absolute left-1/2 -translate-x-1/2 !text-sm !font-semibold lg:!text-3xl'
            >
              {selectedRule.title}
            </Typography>
            <IoCloseOutline
              onClick={() => setIsOpenRuleModal(false)}
              className='border border-gray-300 rounded-md'
            />
          </div>
          <div
            className='w-full my-5 px-2 sm:px-10 mx-auto max-h-[220px] overflow-y-auto'
            onScroll={() => onScrollHandler()}
            ref={listInnerRef}
          >
            {selectedRule.penaltyAndPunishment.rules.map((rule, index) => (
              <Typography
                className='!text-lg lg:text-base'
                id='modal-modal-description'
                sx={{ mt: 2 }}
                key={index}
              >
                {index + 1}. {rule}
              </Typography>
            ))}
          </div>
        </Box>
        <div className='flex items-center'>
          <p className='mt-[0.8rem] grow text-orange-800'>
            *** {selectedRule.penaltyAndPunishment.agree}
          </p>
          <button
            disabled={!checked}
            onClick={() => onClickHandler(topicId)}
            className={`${
              checked
                ? 'hover:bg-green-600 text-green-500 border-2 border-green-400 hover:text-white ml-[auto]'
                : 'bg-slate-300 text-white ml-[auto] border-2'
            } focus:outline-none p-3 text-center border bg-white rounded mt-2 uppercase`}
          >
            {selectedRule.penaltyAndPunishment.nextButton}
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default RuleModal
