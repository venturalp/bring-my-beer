import React from 'react'
import styled, { css } from 'styled-components'
import { InputBase } from '../../utils/styles'

const InputStyled = styled.input`
  ${css`
    ${InputBase}
  `}
`

const InputWrapper = styled.div`
  flex-grow: 2;
  margin-bottom: 0;
  position: relative;
`

const Message = styled.p`
  top: 100%;
  margin: 4px 0px 0px;
  font-size: 11px;
  position: absolute;
  left: 2px;
  ${props =>
    props.error &&
    css`
      color: ${props => props.theme.error};
    `}
`

export default (props: Object) => {
  const { message = '', error = false } = props

  return (
    <InputWrapper>
      <InputStyled {...props} />
      <Message error={error} visible={message && message !== ''}>
        {message}
      </Message>
    </InputWrapper>
  )
}
