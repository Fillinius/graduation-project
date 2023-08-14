import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/userService'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    intities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    usersRequested: (state) => {
      state.isLoading = true
    },
    usersRecived: (state, action) => {
      state.intities = action.payload
      state.isLoading = false
    },
    usersRequestFiled: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

const { reducer: usersReducer, actions } = usersSlice
const { usersRequested, usersRecived, usersRequestFiled } = actions

export const loadUsersList = () => async (dispatch) => {
  dispatch(usersRequested())
  try {
    const content = await userService.get()
    dispatch(usersRecived(content))
  } catch (error) {
    dispatch(usersRequestFiled())
  }
}

export const getUsers = () => (state) => state.users.intities
export const getUserloading = () => (state) => state.users.isLoading
export const getUsersById = (userId) => (state) => {
  if (state.users.intities) {
    return state.users.intities.find((u) => u._id === userId)
  }
}
export default usersReducer
