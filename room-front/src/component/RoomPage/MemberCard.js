import React, { useState } from 'react'
import styled from 'styled-components'

const MemberCard = ({ member }) => {
  const [user] = useState(member.user)

  return (
    <>
      {member && (
        <MemberCardWrapper>
          <Name>{member.role}</Name>
          <AvatarWarpper>
            <img src={user.picture} alt={'member card avatar'} />
          </AvatarWarpper>
          <Name>{user.nickname}</Name>
          <Description>{user.description}</Description>
        </MemberCardWrapper>
      )}
    </>
  )
}

const MemberCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

const AvatarWarpper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 15px;

  & > img {
    width: 200px;
    border-radius: 50%;
  }
`

const Name = styled.span`
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 15px;
`

const Description = styled.p`
  width: 200px;
`

export default MemberCard
