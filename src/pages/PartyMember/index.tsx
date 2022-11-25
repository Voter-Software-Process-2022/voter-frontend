import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useAppDispatch } from '../../app/hooks'
import { Loader, Navbar, Sidebar } from '../../components'
import { fetchPartyMembers } from '../../features/candidate/candidateSlice'
import type { CandidateI } from '../../interfaces/candidate'

const CandidateDetail: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  const [candidates, setCandidates] = useState<CandidateI[]>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const { partyId } = useParams()

  useEffect(() => {
    const fetchPartyMembersData = async () => {
      setIsLoading(true)
      if (!partyId) return
      const { payload }: any = await dispatch(
        fetchPartyMembers({
          partyId: parseInt(partyId),
        }),
      )
      setCandidates(payload)
      setIsLoading(false)
    }
    fetchPartyMembersData()
  }, [partyId])

  return (
    <div className='w-full overflow-x-hidden bg-white min-h-screen'>
      <Navbar
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
      <div className='relative h-full'>
        <Sidebar
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <div className='max-w-6xl mx-auto h-32 text-slate-900 p-8'>
            <span className='text-4xl'>Party: {partyId}</span>
            <div className='mt-6'>
              <span className='text-2xl'>Members</span>
              <div className='flex flex-col mt-4'>
                {candidates &&
                  candidates.map((candidate) => (
                    <div
                      className='flex items-center border text-white border-zinc-800 my-2 bg-gray-800 p-2 rounded'
                      key={candidate.id}
                    >
                      <div className='w-44 h-44 mr-12'>
                        <img
                          src={candidate.pictureUrl}
                          alt={candidate.name}
                          className='h-full w-full object-cover rounded-full'
                        />
                      </div>
                      <span className='text-xl'>Name: {candidate.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CandidateDetail
