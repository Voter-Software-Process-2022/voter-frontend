import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import type { RuleModalProps } from './../interfaces/components/ruleModal'
import { IoCloseOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/system'
// import ThFlag from './../assets/images/flag-th.png'
// import UsFlag from './../assets/images/flag-us.png'

const RuleModal: React.FC<RuleModalProps> = ({
  isOpenRuleModal,
  setIsOpenRuleModal,
}) => {
  // const [isThaiLanguage, setIsThaiLanguage] = useState(true)

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
            <Stack direction='row' spacing={1} alignItems='center'></Stack>
            <Typography
              id='modal-modal-title'
              variant='h4'
              component='h1'
              className='absolute left-1/2 -translate-x-1/2'
            >
              Header in a modal
            </Typography>
            <IoCloseOutline
              onClick={() => setIsOpenRuleModal(false)}
              className='border border-gray-300 rounded-md'
            />
          </div>
          <div className='w-full my-5 px-2 sm:px-10 mx-auto h-[220px] overflow-y-auto'>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              1. ห้ามถ่ายภาพบัตรเลือกตั้ง
              เพื่อให้เห็นเครื่องหมายลงคะแนนในคูหาเลือกตั้ง
              หากฝ่าฝืนจะผิดกฎหมายตาม &quot;มาตรา 135&quot; ระวางโทษจำคุกไม่เกิน
              1 ปี หรือ ปรับไม่เกิน 20,000 บาท หรือทั้งจำทั้งปรับ
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              2. 'Do not impersonate or falsify other people\'s id cards, both
              occupied and not occupied, to be used to vote instead. If
              Disobedience, it would be illegal under "Section 91 Paragraph
              two", with penalties in "Section 136", you will get imprisonment
              for not more than 10 years or a fine of not more than 200,000 baht
              or both and the court ordered the revocation of the right to vote
              for 10 years.',
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              2. 'Do not impersonate or falsify other people\'s id cards, both
              occupied and not occupied, to be used to vote instead. If
              Disobedience, it would be illegal under "Section 91 Paragraph
              two", with penalties in "Section 136", you will get imprisonment
              for not more than 10 years or a fine of not more than 200,000 baht
              or both and the court ordered the revocation of the right to vote
              for 10 years.',
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              2. 'Do not impersonate or falsify other people\'s id cards, both
              occupied and not occupied, to be used to vote instead. If
              Disobedience, it would be illegal under "Section 91 Paragraph
              two", with penalties in "Section 136", you will get imprisonment
              for not more than 10 years or a fine of not more than 200,000 baht
              or both and the court ordered the revocation of the right to vote
              for 10 years.',
            </Typography>
          </div>
        </Box>
        <div className='flex justify-end'>
          <Link to='#'>
            <button className='hover:bg-green-600 hover:text-white focus:outline-none p-3 text-center text-green-500 border border-green-400 bg-white rounded'>
              Next
            </button>
          </Link>
        </div>
      </div>
    </Modal>
  )
}

export default RuleModal
