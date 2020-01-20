import React, { type Node } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  appearance: none;
  border: 0px;
  border-radius: ${props => props.theme.buttonRadius};
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.txt};
  padding: 12px;
  cursor: pointer;
  &:focus,
  &:active {
    background-color: ${props => props.theme.mainColor};
  }
  &:hover {
    background-color: ${props => props.theme.buttonHover};
  }
`

type ButtonProps = {
  children?: Node,
  onClick?: void => void,
  className?: string,
}

export default ({ children, onClick, className }: ButtonProps) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  )
}
