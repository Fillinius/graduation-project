import httpService from './http.service'

const qualityEndPoind = 'gualities/'
const qualityService = {
  get: async () => {
    const { data } = await httpService.get(qualityEndPoind)
    return data
  },
}
export default qualityService
