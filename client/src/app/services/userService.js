import httpService from './http.service'
import localstorageService from './localstorage.service'

const userEndPoind = 'users/'
const userService = {
  get: async () => {
    const { data } = await httpService.get(userEndPoind)
    return data
  },
  create: async (payload) => {
    const { data } = await httpService.put(userEndPoind + payload._id, payload)
    return data
  },
  getCurrentUser: async () => {
    const { data } = await httpService.get(
      userEndPoind + localstorageService.getUserId()
    )
    return data
  },
  getUpdateCurrentUser: async (payload) => {
    const { data } = await httpService.patch(
      userEndPoind + localstorageService.getUserId(),
      payload
    )
    return data
  },
}
export default userService
