import React from 'react'
import styled from 'styled-components'

const PageWrapper = ({ children }) => {
  return <PageStyle>{children}</PageStyle>
}

const PageStyle = styled.div`
  width: 100%;
  height: 100%;
`

export default PageWrapper
