import React, { type Node, useState } from 'react'
import styled, { css } from 'styled-components'
import { InputBase } from '../../utils/styles'

const Select = styled.select`
  ${css`
    ${InputBase}
  `}
`

type SelectProps = {
  children: Node,
  placeholder: string,
  value: string,
  onChange: string => void,
  className: string,
}

export default ({
  children,
  placeholder,
  value,
  onChange,
  className,
}: SelectProps) => {
  const [selectValue, setSelectValue] = useState(value)

  const handleChange = e => {
    setSelectValue(e.target.value)
    if (onChange) onChange(e.target.value)
  }

  return (
    <Select value={selectValue} onChange={handleChange} className={className}>
      {placeholder && (
        <option disabled value={-1}>
          {placeholder}
        </option>
      )}
      {children}
    </Select>
  )
}
