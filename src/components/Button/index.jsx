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
  outline: none;
  &:focus,
  &:active {
    background-color: ${props => props.theme.mainColor};
  }
  &:focus {
    outline: none;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
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
