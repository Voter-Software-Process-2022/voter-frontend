import { useParams } from 'react-router-dom'
import { Navbar } from '../../components'
import { useState } from 'react'
import InfoList from '../../components/InfoList'
const Info: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  const { id } = useParams()
  return (
    <div>
      <Navbar
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
      Info {id}
      <InfoList />
    </div>
  )
}

export default Info
