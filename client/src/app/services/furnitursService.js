import httpService from './http.service'
import localstorageService from './localstorage.service'

const furnitureEndPoint = 'furniturs/'

const furnitursService = {
  get: async () => {
    const { data } = await httpService.get(furnitureEndPoint)
    return data
  },
  create: async (payload) => {
    const { data } = await httpService.put(
      furnitureEndPoint + payload._id,
      payload
    )
    return data
  },
  getCurrentUser: async () => {
    const { data } = await httpService.get(
      furnitureEndPoint + localstorageService.getUserId()
    )
    return data
  },
  getUpdateCurrentUser: async (payload) => {
    const { data } = await httpService.patch(
      furnitureEndPoint + localstorageService.getUserId(),
      payload
    )
    return data
  },
}

export default furnitursService
