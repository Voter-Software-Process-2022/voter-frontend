import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import type { RuleModalProps } from './../interfaces/components/ruleModal'
import { IoCloseOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/system'
import LanguageSwitcher from './LanguageSwitcher'
import { thaiRule, englishRule } from '../config/rulesWords'
import { Checkbox } from '@mui/material'

const RuleModal: React.FC<RuleModalProps> = ({
  isOpenRuleModal,
  setIsOpenRuleModal,
}) => {
  const [isThaiLanguage, setIsThaiLanguage] = useState<boolean>(true)
  const [checked, setChecked] = useState<boolean>(false)
  const selectedRule = isThaiLanguage ? thaiRule : englishRule
  const listInnerRef = useRef()

  const onScrollHandler = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current
      if (scrollTop + clientHeight === scrollHeight) {
        // TO SOMETHING HERE
        console.log('Reached bottom')
      }
    }
  }

  const onCheckHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <Modal
      open={isOpenRuleModal}
      onClose={() => setIsOpenRuleModal(false)}
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
              className='absolute left-1/2 -translate-x-1/2 !text-sm !font-semibold lg:!text-2xl'
            >
              {selectedRule.title}
            </Typography>
            <IoCloseOutline
              onClick={() => setIsOpenRuleModal(false)}
              className='border border-gray-300 rounded-md'
            />
          </div>
          <div
            className='w-full my-5 px-2 sm:px-10 mx-auto max-h-[350px] overflow-y-auto'
            onScroll={() => onScrollHandler()}
            ref={listInnerRef}
          >
            {selectedRule.penaltyAndPunishment.rules.map((rule, index) => (
              <Typography
                className='!text-sm lg:text-base'
                id='modal-modal-description'
                sx={{ mt: 2 }}
                key={index}
              >
                {index + 1}. {rule}
              </Typography>
            ))}
          </div>
        </Box>
        <div className='flex justify-center'>
          <p className='mt-[0.8rem]  grow text-center'>
            <Checkbox checked={checked} onChange={onCheckHandler} />
            {selectedRule.penaltyAndPunishment.agree}
          </p>
          <Link to='#'>
            <button
              disabled={!checked}
              className={`${
                checked
                  ? 'hover:bg-green-600 text-green-500 border-green-400 hover:text-white ml-[auto]'
                  : 'bg-slate-300 text-white ml-[auto]'
              } focus:outline-none p-3 text-center border bg-white rounded mt-2 `}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </Modal>
  )
}

export default RuleModal