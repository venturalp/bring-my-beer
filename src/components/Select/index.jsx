import React, { type Node, useState } from 'react'
import styled, { css } from 'styled-components'
import { InputBase } from '../../utils/styles'
import arrow from '../../assets/arrow.png'

const Select = styled.select`
  ${css`
    ${InputBase}
  `}
  appearance: none;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: right 6px center;
  padding-right: 30px;
  & option[disabled] {
    color: ${props => props.theme.inputBorder};
  }
`

type SelectProps = {
  children: Node,
  placeholder: string,
  value: string,
  onChange: string => void,
  className: string,
  name: string,
}

export default ({
  children,
  placeholder,
  value,
  onChange,
  className,
  name,
}: SelectProps) => {
  return (
    <Select value={value} onChange={onChange} className={className} name={name}>
      {placeholder && (
        <option disabled value={0} className="empty">
          {placeholder}
        </option>
      )}
      {children}
    </Select>
  )
}
