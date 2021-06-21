import { useEffect } from 'react'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import { SOCKET_BASE_URL } from '../constant'

let sockJS
let stompClient

const stompConnect = (stompSuccessCallback, stompFailureCallback) => {
  console.log('STOMP: Attempting connection')
  sockJS = new SockJS(SOCKET_BASE_URL + '/webSocket')
  stompClient = Stomp.over(sockJS)
  stompClient.connect({}, stompSuccessCallback, stompFailureCallback)
}

const useSocket = (
  sendUrl,
  subscribeUrl,
  onMessage,
  onConnect = undefined,
  onError = undefined,
) => {
  const sendChatMessage = message => {
    stompClient.send(sendUrl, {}, JSON.stringify(message))
  }

  useEffect(() => {
    stompConnect(
      () => {
        stompClient.subscribe(subscribeUrl, data => {
          const newMessage = JSON.parse(data.body)
          onMessage(newMessage)
        })
        if (onConnect) {
          stompClient.send(sendUrl, {}, JSON.stringify(onConnect))
        }
      },
      error => {
        if (onError) {
          onError()
        }

        console.log('STOMP: ' + error)
        setTimeout(stompConnect, 10000)
        console.log('STOMP: Reconecting in 10 seconds')
      },
    )

    return () => {
      if (stompClient) {
        stompClient.disconnect()
      }
    }
  }, [subscribeUrl])

  return sendChatMessage
}

export default useSocket
