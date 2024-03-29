import React from 'react'
import styled from 'styled-components'
import RoomHeader from '../../presenter/header/RoomHeader'
import PageWrapper from '../../presenter/wrapper/PageWrapper'
import MemberCard from './MemberCard'

const RoomInfo = ({ room }) => {
  return (
    <>
      {room && (
        <PageWrapper>
          <RoomHeader title={'Room Info'} />
          <ContentsCenterWrapper>
            <RoomInfoWrapper>
              <Title>{room.title}</Title>
              <Description>{room.description}</Description>
            </RoomInfoWrapper>

            {/* {info && } */}

            <MemberInfoWrapper>
              <SubTitle>구성원 소개</SubTitle>
              <SlideWrapper>
                {room.participants.map((member, index) => (
                  <MemberCard key={index} member={member} />
                ))}
              </SlideWrapper>
            </MemberInfoWrapper>
          </ContentsCenterWrapper>
        </PageWrapper>
      )}
    </>
  )
}

const ContentsCenterWrapper = styled.div`
  margin: 0 auto;
  margin-top: 80px;
  width: 1100px;
  padding: 0 100px;
`

const RoomInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`

const Description = styled.p`
  font-size: 1.5rem;
`

const MemberInfoWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`

const SubTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
`

const SlideWrapper = styled.div`
  display: flex;
  justify-content: start;
`

export default RoomInfo
