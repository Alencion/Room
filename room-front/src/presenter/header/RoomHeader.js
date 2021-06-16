import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constant/style'

const RoomHeader = ({ title }) => {
  return (
    <BorderWrapper>
      <Container>
        <RoomTitle>{title}</RoomTitle>
      </Container>
    </BorderWrapper>
  )
}

const BorderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 18%);
`

const Container = styled.div`
  display: flex;
  align-items: center;

  & i {
    padding: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;

    :hover {
      background: ${COLOR.LIGHT_GREY};
      cursor: pointer;

      & > svg {
        color: ${COLOR.LIGHT_BLUE};
      }
    }
  }
`

const RoomTitle = styled.div`
  margin-left: 50px;
  font-size: 1rem;
`

export default RoomHeader
