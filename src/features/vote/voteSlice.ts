import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import { VoteApi, type VoteNoRequest, type VoteRequest } from '../../generated'

export const voteApi = new VoteApi()

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

export const fetchVoteNo = createAsyncThunk(
  'vote/fetchVoteNo',
  async ({ voteTopicId }: VoteNoRequest) => {
    const submitVoteNoInput = {
      voteTopicId: voteTopicId,
    }
    const token = Cookies.get('token')
    const options = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const { data } = await voteApi.voteNoPost(submitVoteNoInput, options)
    return data
  },
)

export const fetchMpCandidates = createAsyncThunk(
  'vote/fetchVoteSubmit',
  async () => {
    const token = Cookies.get('token')
    const options = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const { data } = await axios.get(
      'http://localhost:8000/api/vote/mpcandidate',
      options,
    )
    return data
  },
)
