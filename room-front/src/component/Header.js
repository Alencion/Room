import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { COLOR } from '../constant/style'
import CenterWrapper from '../presenter/wrapper/CenterWrapper'
import HeaderProfile from './HeaderProfile'

const Header = ({ currentUser = undefined, LogoutHandle }) => {
  const history = useHistory()
  const [isAuthentication, setIsAuthentication] = useState(
    currentUser === undefined,
  )

  const loginClickHandle = () => {
    history.push('/login')
  }

  const logoutClickHandle = () => {
    LogoutHandle()
    localStorage.clear()
    setIsAuthentication(false)
  }

  return (
    <HeaderWrapper>
      <CenterWrapper>
        <Logo>
          <Link to="/">Room</Link>
        </Logo>

        <SignWrapper>
          {isAuthentication ? (
            <>
              <HeaderProfile currentUser={currentUser} />
              <button onClick={logoutClickHandle}>Logout</button>
            </>
          ) : (
            <button onClick={loginClickHandle}>logIn</button>
          )}
        </SignWrapper>
      </CenterWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  height: 80px;

  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;

  font-family: 'Damion';
  font-size: 40px;

  & > a {
    color: rgb(80, 80, 80);
  }
`

const SignWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  & > * {
    margin-left: 10px;
  }

  & > button {
    background: #fff;
    padding: 15px;
    border: 1px solid ${COLOR.BORDER_COLOR};
    border-radius: 6px;

    :hover {
      cursor: pointer;
    }

    :active {
      background: rgba(0, 0, 0, 0.08);
    }
  }
`

export default Header
