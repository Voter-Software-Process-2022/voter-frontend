// import { useParams } from 'react-router-dom'
import { Navbar, RuleModal } from '../../components'
import { useState } from 'react'
import InfoList from '../../components/InfoList'
const Info: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  const [isOpenRuleModal, setIsOpenRuleModal] = useState(false)
  // const { id } = useParams()

  return (
    <div className='min-h-screen bg-white'>
      <div className='flex flex-col'>
        <Navbar
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
        <InfoList />
        <button
          onClick={() => setIsOpenRuleModal(true)}
          className='hover:bg-gray-700 focus:outline-none p-3 w-16 self-center flex-center text-center text-white bg-gray-600 rounded'
        >
          Vote
        </button>
        <RuleModal
          isOpenRuleModal={isOpenRuleModal}
          setIsOpenRuleModal={setIsOpenRuleModal}
        />
      </div>
    </div>
  )
}

export default Info
