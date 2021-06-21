import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ChatAPi from '../../api/ChatAPi'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import useSocket from '../../hooks/useSocket'
import ChatInputBox from '../../presenter/chat/ChatInputBox'
import ChatPresenter from '../../presenter/chat/ChatPresenter'
import RoomHeader from '../../presenter/header/RoomHeader'
import Loading from '../../presenter/loading/Loading'
import PageWrapper from '../../presenter/wrapper/PageWrapper'
import ChatThread from './ThreadChat'

const Chat = ({ user, room }) => {
  const [showThread, setShowThread] = useState(false)
  const [selectChat, setSelectChat] = useState()
  const [message, setMessage] = useState('')
  const [contents, setContents] = useState({ content: [] })
  const [onScrollDown, setOnScrollDown] = useState(true)
  const [onLoading, setOnLoading] = useState(false)
  const page = useRef(1)
  const wrapperRef = useRef()
  const targetRef = useRef()

  const sendChatMessage = useSocket(
    '/chat',
    '/topic/chat/room/' + room.id,
    newMessage => {
      setOnScrollDown(true)
      setContents(prev => {
        return { ...prev, content: [...prev.content, newMessage] }
      })
    },
  )

  useIntersectionObserver({
    root: wrapperRef.current,
    target: targetRef.current,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting && page.current < contents.totalPages) {
        page.current++
        setOnLoading(true)
        ChatAPi.fetchChats(room.id, page.current)
          .then(res => {
            res.content = res.content.sort((c1, c2) => c1.id - c2.id)
            setContents({
              ...contents,
              content: [...res.content, ...contents.content],
            })
          })
          .then(() => setOnLoading(false))
      }
    },
  })

  useEffect(() => {
    ChatAPi.fetchChats(room.id, page.current).then(res => {
      res.content = res.content.sort((c1, c2) => c1.id - c2.id)
      setContents(res)
    })
  }, [room.id])

  useEffect(() => {
    if (contents.content.length !== 0 && onScrollDown) {
      wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight
      setOnScrollDown(false)
    }
  }, [contents])

  const openThread = message => {
    setShowThread(true)
    setSelectChat(message)
  }

  return (
    <>
      {room && (
        <>
          <PageWrapper>
            <Loading onLoading={onLoading} />
            <RoomHeader title={'Chat'} />
            <ContentsCenterWrapper>
              <ChatWrapper>
                <BottomBox ref={wrapperRef}>
                  <div ref={targetRef}></div>
                  <ChatContainer>
                    {contents.content.map((message, index) => (
                      <ChatPresenter
                        key={index}
                        prevMessage={contents.content[index - 1]}
                        message={message}
                        openThread={openThread}
                      />
                    ))}
                  </ChatContainer>
                </BottomBox>
                <ChatInputBox
                  user={user}
                  room={room}
                  message={message}
                  setMessage={setMessage}
                  sendChatMessage={sendChatMessage}
                />
              </ChatWrapper>
            </ContentsCenterWrapper>
          </PageWrapper>
          {showThread && (
            <ChatThread setShowThread={setShowThread} chat={selectChat} />
          )}
        </>
      )}
    </>
  )
}

const ContentsCenterWrapper = styled.div`
  margin: 0 auto;
  min-width: 600px;
  max-width: 1200px;
  height: calc(100% - 45px);
  padding: 0 20px;
`

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const BottomBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  margin-top: 3px;
  overflow-y: scroll;
  padding-top: 20px;
`

const ChatContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  margin-top: auto;
  align-content: end;
`

export default Chat
