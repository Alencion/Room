import React from 'react'
import styled from 'styled-components'
import { API_BASE_URL, REDIRECT_URL } from '../constant'
import { GITHUB } from '../constant/Icon'
import LoginButton from '../presenter/button/LoginBtn'
import Icon from '../presenter/icon/Icon'

const LoginPage = () => {
  const githubIcon = <Icon icon={GITHUB} size="1.6rem" />

  return (
    <>
      <CenterWrapper>
        <div>
          <LoginTitle>Room에 로그인</LoginTitle>
          <LoginDescription>
            Github 아이디로만 로그인이 가능합니다.
          </LoginDescription>
          <a
            method="GET"
            href={
              API_BASE_URL +
              '/oauth2/authorize/github?redirect_uri=' +
              REDIRECT_URL
            }
          >
            <LoginButton icon={githubIcon} label={'Login With github'} />
          </a>
        </div>
      </CenterWrapper>
    </>
  )
}

const CenterWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > div {
    display: inline-block;
  }
`

const LoginTitle = styled.h2`
  margin-bottom: 30px;
  text-align: center;
`

const LoginDescription = styled.p`
  text-align: center;
  margin-bottom: 30px;
`

export default LoginPage
