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
          <form method="GET" action={baseURL + '/api/user/sign-in/github'}>
            <LoginButton icon={githubIcon} label={'Login With github'} />
          </form>
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
