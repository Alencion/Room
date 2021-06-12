import React from 'react'
import styled from 'styled-components'
import PageWrapper from '../presenter/wrapper/PageWrapper'

const CreateRoomPage = () => {
  return (
    <>
      <PageWrapper>
        <CreateRoomWrapper>
          <PageTitle>룸 생성하기</PageTitle>
        </CreateRoomWrapper>
      </PageWrapper>
    </>
  )
}

const CreateRoomWrapper = styled.div``

const PageTitle = styled.h2``

export default CreateRoomPage
