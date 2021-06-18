import { faCommentMedical } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constant/style'
import Icon from '../icon/Icon'
import 'moment/locale/ko'

const ChatPresenter = ({ message, openThread }) => {
  const time = () => {
    moment.locale('ko')
    return moment(message.createdAt).format('LT')
  }

  return (
    <ChatWrapper>
      <AvartarWrapper>
        <img src={message.sender.picture + '&s=70'} alt={'user profile'} />
      </AvartarWrapper>
      <MessageWrapper>
        <UserName>
          <b>{message.sender.nickname}</b>
          <span>{time()}</span>
        </UserName>
        <Message>{message.content}</Message>
      </MessageWrapper>
      <PopChatToolKit className="pop">
        <button onClick={() => openThread(message)}>
          <Icon icon={faCommentMedical} color={COLOR.GREY} />
        </button>
      </PopChatToolKit>
    </ChatWrapper>
  )
}

const ChatWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 40px;
  padding: 10px 0 20px;
  border-bottom: 1px solid ${COLOR.SEPERATOR_COLOR};
  position: relative;

  & > * {
    font-size: 1rem;
  }

  :hover > .pop {
    display: flex;
  }
`

const AvartarWrapper = styled.div`
  width: 60px;
  padding: 0 10px;

  & > img {
    width: 35px;
    height: 35px;
    border-radius: 4px;
    margin-right: 10px;
  }
`

const MessageWrapper = styled.div`
  width: calc(100% - 60px);
`

const UserName = styled.p`
  margin-bottom: 5px;

  & > span {
    margin-left: 10px;
    font-size: 0.7rem;
    color: ${COLOR.LIGHT_BLACK};
  }
`

const Message = styled.div``

const PopChatToolKit = styled.div`
  position: absolute;
  top: 5px;
  right: 20px;
  display: none;

  width: 50px;
  height: 30px;
  background: #fff;
  border: 1px solid ${COLOR.GREY};
  border-radius: 15px;
  box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.08);

  align-items: center;
  justify-content: center;

  & > button {
    background: #fff;
    border: none;
    padding: 3px;
    border-radius: 5px;
    transition: 0.3s ease-in-out;

    :hover {
      cursor: pointer;

      background: ${COLOR.SEPERATOR_COLOR};

      & svg {
        color: ${COLOR.LIGHT_BLACK};
      }
    }

    & svg {
      transition: 0.3s ease-in-out;
    }
  }
`

export default ChatPresenter
