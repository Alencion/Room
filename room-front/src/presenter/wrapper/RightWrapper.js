import React from 'react'
import styled from 'styled-components'

const RightWrapper = ({ children, onClick }) => {
  return <Right onClick={onClick}>{children}</Right>
}

const Right = styled.div`
  margin-left: auto;
`
export default RightWrapper
