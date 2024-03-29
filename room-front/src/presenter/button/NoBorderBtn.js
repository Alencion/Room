import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constant/style'

const NoBorderBtn = ({ onClick = undefined, value = '' }) => {
  return <PrimaryButton onClick={onClick}>{value}</PrimaryButton>
}

const PrimaryButton = styled.button`
  background: none;
  border: 1px solid ${COLOR.GREY};
  border-radius: 4px;
  width: 110px;
  height: 30px;
  color: ${COLOR.LIGHT_BLACK};
  transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  font-weight: bold;

  :hover {
    cursor: pointer;
    border: 1px solid ${COLOR.LIGHT_BLUE};
    color: ${COLOR.LIGHT_BLUE};
    box-shadow: 0px 0px 3px 0px rgba(64, 169, 255, 0.5);
  }

  :active {
    border: 1px solid ${COLOR.LIGHT_BLUE};
    color: ${COLOR.LIGHT_BLUE};
    background: rgba(0, 0, 0, 0.08);
  }
`

export default NoBorderBtn
