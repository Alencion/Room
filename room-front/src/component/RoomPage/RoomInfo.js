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
  width: 900px;
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
