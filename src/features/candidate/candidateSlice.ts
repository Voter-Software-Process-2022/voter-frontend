import { createAsyncThunk } from '@reduxjs/toolkit'
import { CandidateApi } from '../../generated'

const candidateApi = new CandidateApi()

export const fetchAllCandidates = createAsyncThunk(
  'user/fetchAllCandidates',
  async ({ voteTopicId }: { voteTopicId: number }) => {
    const { data } = await candidateApi.candidateVoteTopicIdGet(voteTopicId)
    return data
  },
)

export const fetchCandidateDetails = createAsyncThunk(
  'user/fetchCandidateDetails',
  async ({
    voteTopicId,
    candidateId,
  }: {
    voteTopicId: number
    candidateId: number
  }) => {
    const { data } = await candidateApi.candidateVoteTopicIdCandidateIdGet(
      voteTopicId,
      candidateId,
    )
    return data
  },
)

export const fetchPartyMembers = createAsyncThunk(
  'user/fetchPartyMembers',
  async ({ partyId }: { partyId: number }) => {
    const { data } = await candidateApi.candidatePartymemberPartyIdGet(partyId)
    return data
  },
)
