import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constant/style'

const PrimaryInput = ({ id, type, value, onChange, onKeyUp, disabled }) => {
  const Props = { id, type, value, onChange, onKeyUp, disabled }
  return <Primary {...Props} />
}

const Primary = styled.input`
  margin-top: 10px;
  width: 100%;
  padding: 7px 10px;
  border: 1px solid ${COLOR.GREY};
  border-radius: 4px;
  font-size: 15px;

  :focus-visible {
    outline: none;
    border: 1px solid ${COLOR.LIGHT_BLUE};
    box-shadow: 0px 0px 3px 0px rgba(64, 169, 255, 0.12);
  }
`

export default PrimaryInput
