import { API_BASE_URL } from '../constant'
import { request } from './ApiUtils'

export default Object.freeze({
  fetchChats(roomId, page) {
    return request({
      url: API_BASE_URL + `/api/chat/${roomId}?page=${page}`,
      method: 'GET',
    })
  },
  fetchThread(chatId, page) {
    return request({
      url: API_BASE_URL + `/api/chat/thread/${chatId}?page=${page}`,
      method: 'GET',
    })
  },
})
