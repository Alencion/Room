import React from 'react'
import styled from 'styled-components'
import Header from '../component/Header'
import { GITHUB } from '../constant/Icon'
import LoginButton from '../presenter/button/LoginBtn'
import Icon from '../presenter/icon/Icon'

const baseURL = process.env.REACT_APP_API_URL

const LoginPage = () => {
  const githubIcon = <Icon icon={GITHUB} size="1.6rem" />

  return (
    <>
      <Header />

      <CenterWrapper>
        <div>
          <LoginTitle>Room에 로그인</LoginTitle>
          <a
            method="GET"
            href={
              baseURL +
              '/oauth2/authorize/github?redirect_uri=http://localhost:3000/oauth2/redirect'
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > div {
    display: inline-block;
  }
`

const LoginTitle = styled.h2`
  text-align: center;
`
export default LoginPage
