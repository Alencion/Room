import React from 'react'
import styled from 'styled-components'

function CenterWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1200px;
  margin: 0 auto;
  padding: 0;
`

export default CenterWrapper
