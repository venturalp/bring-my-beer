import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.input`
  border-radius: 4px;
  border: 1px solid ${props => props.theme.inputBorder};
  font-size: 14px;
  line-height: 1;
  padding: 9px 10px 7px;
  margin-bottom: 16px;
  width: 100%;
  &:focus {
    outline: none;
    border-color: ${props => props.theme.txt};
  }
`

export default (props: Object) => {
  return <InputStyled {...props} />
}
