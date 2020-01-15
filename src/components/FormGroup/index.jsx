import React from 'react'
import styled from 'styled-components'

const FormGroupWrapper = styled.div`
  & > label {
    margin-bottom: 4px;
  }
  & > label,
  & > input {
    display: block;
  }
  width: ${props => props.width || 'initial'};
`

export default (props: Object) => {
  const { children, width } = props

  return <FormGroupWrapper width={width}>{children}</FormGroupWrapper>
}
