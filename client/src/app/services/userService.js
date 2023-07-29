import httpService from './http.service'

const userEndPoind = 'users/'
const userService = {
  get: async () => {
    const { data } = await httpService.get(userEndPoind)
    return data
  },
}
export default userService
