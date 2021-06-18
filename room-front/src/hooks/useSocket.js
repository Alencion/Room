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

const useSocket = (setContents, sendUrl, subscribeUrl) => {
  const sendChatMessage = message => {
    stompClient.send(sendUrl, {}, JSON.stringify(message))
  }

  useEffect(() => {
    stompConnect(
      () => {
        stompClient.subscribe(subscribeUrl, data => {
          const newMessage = JSON.parse(data.body)
          setContents(prev => [...prev, newMessage])
        })
      },
      error => {
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
  }, [setContents, subscribeUrl])

  return [stompClient, sendChatMessage]
}

export default useSocket
