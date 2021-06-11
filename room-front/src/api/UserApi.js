import { API_BASE_URL } from '../constant'
import { request } from './ApiUtils'

export default Object.freeze({
  getUserProfile() {
    return request({
      url: API_BASE_URL + '/api/user/me',
      method: 'GET',
    })
  },
})
