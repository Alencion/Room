import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

const Loading = ({ onLoading }) => {
  return (
    <>
      {onLoading && (
        <Backdrop>
          <Loader type="Oval" color="#3d66ba" height={30} width={30} />
        </Backdrop>
      )}
    </>
  )
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: rgba(0, 0, 0, 0.12);
  display: flex;

  justify-content: center;
  align-items: center;

  z-index: 101;
`

export default Loading
