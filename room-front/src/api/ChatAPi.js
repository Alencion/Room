import { API_BASE_URL } from '../constant'
import { request } from './ApiUtils'

export default Object.freeze({
  fetchChats(roomId) {
    return request({
      url: API_BASE_URL + `/api/chat/${roomId}`,
      method: 'GET',
    })
  },
  fetchThread(chatId) {
    return request({
      url: API_BASE_URL + `/api/chat/thread/${chatId}`,
      method: 'GET',
    })
  },
})
