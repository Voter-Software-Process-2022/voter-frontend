import { createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { VoteApi, type VoteRequest } from '../../generated'

const voteApi = new VoteApi()

export const fetchVoteSubmit = createAsyncThunk(
  'vote/fetchVoteSubmit',
  async ({ voteTopicId, candidateId }: VoteRequest) => {
    const submitVoteInput = {
      voteTopicId: voteTopicId,
      candidateId: candidateId,
    }
    const token = Cookies.get('token')
    const options = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const { data } = await voteApi.voteSubmitPost(submitVoteInput, options)
    return data
  },
)
