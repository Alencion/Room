import { API_BASE_URL } from '../constant'
import { request } from './ApiUtils'

export default Object.freeze({
  fetchRooms(userId) {
    return request({
      url: API_BASE_URL + `/api/room/${userId}`,
      method: 'GET',
    })
  },
  fetchRoom(userId, roomId) {
    return request({
      url: API_BASE_URL + `/api/room/${userId}/${roomId}`,
      method: 'GET',
    })
  },
  createRoom(userId, room) {
    return request({
      url: API_BASE_URL + `/api/room/${userId}/new`,
      method: 'POST',
      body: JSON.stringify(room),
    })
  },
})
