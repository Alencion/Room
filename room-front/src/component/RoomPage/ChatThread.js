import { faTimes } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constant/style'
import Icon from '../../presenter/icon/Icon'
import RightWrapper from '../../presenter/wrapper/RightWrapper'

const ChatThread = ({ setShowThread }) => {
  return (
    <ChatThreadWrapper>
      <ChatThreadHeader>
        Thread
        <RightWrapper onClick={() => setShowThread(false)}>
          <Icon icon={faTimes} color={COLOR.GREY} />
        </RightWrapper>
      </ChatThreadHeader>
    </ChatThreadWrapper>
  )
}

const ChatThreadWrapper = styled.div`
  width: 500px;
  border-left: 1px solid ${COLOR.SEPERATOR_COLOR};
`

const ChatThreadHeader = styled.div`
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  height: 47px;
  width: 499px;
  border-bottom: 1px solid ${COLOR.SEPERATOR_COLOR};

  & i {
    font-size: 30px;

    & > svg {
      transition: 0.5s;
    }

    :hover {
      cursor: pointer;

      & > svg {
        color: ${COLOR.BLACK};
      }
    }
  }
`
export default ChatThread
