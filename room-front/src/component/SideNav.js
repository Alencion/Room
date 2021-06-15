import {
  faCaretDown,
  faChevronLeft,
  faChevronRight,
  faCog,
  faEnvelope,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { COLOR } from '../constant/style'
import Icon from '../presenter/icon/Icon'

const SideNav = ({ user, room, tabIndex, setTabIndex }) => {
  const [showNav, setShowNav] = useState(true)

  return (
    <SideNavWrapper showNav={showNav}>
      <ProfileDiv>
        <img src={user.picture} alt={'user profile'} />
        <span>{user.name}</span>
        <button onClick={() => setShowNav(!showNav)}>
          <Icon
            icon={showNav ? faChevronRight : faChevronLeft}
            color={COLOR.GREY}
            size={'1.2rem'}
          />
        </button>
      </ProfileDiv>

      <SettingList>
        <li>
          <Icon
            icon={faCog}
            color={COLOR.SIDE_NAV_TEXT}
            padding={'0 10px 0 0'}
          />
          Settings
        </li>
        <li>
          <Icon
            icon={faEnvelope}
            color={COLOR.SIDE_NAV_TEXT}
            padding={'0 10px 0 0'}
          />
          Invitation
          <RightWrapper>
            <Badge></Badge>
          </RightWrapper>
        </li>
        <li>
          <Icon
            icon={faUser}
            color={COLOR.SIDE_NAV_TEXT}
            padding={'0 10px 0 0'}
          />
          Participants<Number>{room.participants.length}</Number>
          <RightWrapper>
            <Icon icon={faCaretDown} color={COLOR.SIDE_NAV_TEXT} />
          </RightWrapper>
        </li>
      </SettingList>

      <SideNavGroupWrapper>
        <ContentTabItem
          isActive={0 === tabIndex}
          onClick={() => setTabIndex(0)}
        >
          Room Info
        </ContentTabItem>
        <ContentTabItem
          isActive={1 === tabIndex}
          onClick={() => setTabIndex(1)}
        >
          Calender
        </ContentTabItem>
        <ContentTabItem
          isActive={2 === tabIndex}
          onClick={() => setTabIndex(2)}
        >
          Chat
        </ContentTabItem>
        <ContentTabItem
          isActive={3 === tabIndex}
          onClick={() => setTabIndex(3)}
        >
          Wiki
        </ContentTabItem>
      </SideNavGroupWrapper>
    </SideNavWrapper>
  )
}

const SideNavWrapper = styled.div`
  background: ${COLOR.SIDE_NAV_BACKGROUND};
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.12);

  transform: translateX(${props => (props.showNav ? '0' : '-250px')});
`

const ProfileDiv = styled.div`
  margin: 10px 0 10px 20px;
  display: flex;
  align-items: center;
  position: relative;

  & > img {
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  & > span {
    color: #fff;
    font-weight: bold;
  }

  & > button {
    position: absolute;
    right: -25px;
    width: 40px;
    height 40px;
    border-radius: 50%;
    border: none;
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

    background: #fff;

    :hover { 
      cursor: pointer;
    }
  }
`

const SideNavGroupWrapper = styled.div`
  margin-top: 20px;
`

const SettingList = styled.ul`
  list-decoration: none;

  & > li {
    display: flex;
    color: ${COLOR.SIDE_NAV_TEXT};
    padding: 10px 20px;

    :hover {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.08);
    }
  }
`

const Number = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  font-size: 0.8rem;
`

const Badge = styled.div``

const RightWrapper = styled.div`
  margin-left: auto;
`

const ContentTabItem = styled.div`
  padding: 10px 20px;
  color: ${COLOR.SIDE_NAV_TEXT};
  ${props => props.isActive && 'background: rgba(255, 255, 255, 0.08);'}

  :hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.08);
  }
`
export default SideNav
