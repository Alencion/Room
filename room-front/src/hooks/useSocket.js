import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
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

const useSocket = setContents => {
  const { roomId } = useParams()

  const handleEnter = (username, content) => {
    const newMessage = { username, content, date: new Date() }
    stompClient.send('/hello', {}, JSON.stringify(newMessage))
  }

  const addMessage = message => {
    setContents(prev => [...prev, message])
  }

  useEffect(() => {
    stompConnect(
      () => {
        stompClient.subscribe('/topic/roomId', data => {
          const newMessage = JSON.parse(data.body)
          addMessage(newMessage)
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
  }, [roomId])

  return [stompClient, handleEnter]
}

export default useSocket
