import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { COLOR } from '../constant/style'
import HeaderProfile from './HeaderProfile'

const Header = ({ isAuthenticated }) => {
  const history = useHistory()

  const loginClickHandle = () => {
    history.push('/login')
  }

  return (
    <>
      <HeaderWrapper>
        <Logo>
          <Link to="/">Room</Link>
        </Logo>

        <SignWrapper>
          {isAuthenticated ? (
            <>
              <HeaderProfile />
              <button>Logout</button>
            </>
          ) : (
            <button onClick={loginClickHandle}>logIn</button>
          )}
        </SignWrapper>
      </HeaderWrapper>
    </>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  height: 80px;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;

  font-family: 'Damion';
  font-size: 40px;
`

const SignWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;

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
