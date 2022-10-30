import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import type { RuleModalProps } from './../interfaces/components/ruleModal'
import { IoCloseOutline } from 'react-icons/io5'

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
      className='relative z-50 text-black'
    >
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        <Box className='w-full max-w-sm rounded bg-white'>
          {/* flex flex-row items-center justify-center mb-8 text-3xl */}
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <IoCloseOutline
              onClick={() => setIsOpenRuleModal(false)}
              className='top-1/2 absolute left-0 -translate-y-1/2 border border-gray-300 rounded-md'
            />
            <div>Header in a modal</div>
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            repellat enim esse. Error, dolore sequi!
          </Typography>
        </Box>
      </div>
    </Modal>
  )
}

export default RuleModal
