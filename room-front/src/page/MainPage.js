import React from 'react'
import styled from 'styled-components'
import Header from '../component/Header'

const MainPage = () => {
  return (
    <>
      <PageStyle>
        <Header isAuthenticated={false} />
        MainPage
      </PageStyle>
    </>
  )
}

const PageStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  width: 1200px;
  margin: 0 auto;
`

export default MainPage
