import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import type { RuleModalProps } from './../interfaces/components/ruleModal'
import { IoCloseOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

// absolute top-1/2 left-1/2 min-w-400 translate-x-1/2 translate-y-1/2'

const RuleModal: React.FC<RuleModalProps> = ({
  isOpenRuleModal,
  setIsOpenRuleModal,
}) => {
  return (
    <Modal
      open={isOpenRuleModal}
      onClose={() => setIsOpenRuleModal(false)}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      className='container flex flex-col items-center justify-center flex-1 max-w-lg px-2 mx-auto text-black'
    >
      <div className='w-full px-6 py-8 text-black bg-white rounded-lg shadow-md'>
        <Box className='w-full max-w-sm'>
          {/* flex flex-row items-center justify-center mb-8 text-3xl */}
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <IoCloseOutline
              onClick={() => setIsOpenRuleModal(false)}
              className='top-1/2 absolute left-0 -translate-y-1/2 border border-gray-300 rounded-md'
            />
            <h1>Header in a modal</h1>
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            repellat enim esse. Error, dolore sequi!
          </Typography>
        </Box>
        <Link to='#'>
          <button className='hover:bg-green-600 hover:text-white focus:outline-none p-3 text-center text-green-500 border border-green-400 bg-white rounded'>
            Next
          </button>
        </Link>
      </div>
    </Modal>
  )
}

export default RuleModal
