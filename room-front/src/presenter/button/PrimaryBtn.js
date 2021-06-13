import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constant/style'

const PrimaryBtn = ({
  type,
  disabled = false,
  onSubmit,
  onClick,
  children,
}) => {
  const Props = { type, disabled, onSubmit, onClick }
  return <Primary {...Props}>{children}</Primary>
}

const Primary = styled.button`
  font-weight: bold;
  font-size: 18px;
  padding: 10px 15px;
  background: ${COLOR.GREEN};
  color: #fff;
  border: none;
  border-radius: 20px;
  width: 200px;
  margin: 20px auto 0;
  box-shadow: 0 2px 3px 0 rgba(59, 177, 67, 0.5);
  transition: 0.3s;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  ${props =>
    props.disabled === false &&
    `
  :hover {
    cursor: pointer;
    margin: 18px auto 0;
    box-shadow: 0 5px 3px 1px rgba(59, 177, 67, 0.5);
  }
  `};
`

export default PrimaryBtn
