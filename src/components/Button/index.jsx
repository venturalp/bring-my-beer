// @flow
import React, { type Node } from 'react'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'

const Button = styled.div`
  user-select: none;
  border: 0px;
  border-radius: ${props => props.theme.buttonRadius};
  background-color: ${props =>
    !props.disabled
      ? props.theme[props.appearance]
      : lighten(0.3, props.theme[props.appearance])};
  color: ${props => props.theme.txt};
  padding: 12px;
  font-size: 12px;
  cursor: ${props => (!props.disabled ? 'pointer' : 'default')};
  outline: none;
  &:focus,
  &:active {
    background-color: ${props =>
      !props.disabled
        ? props.theme[props.appearance]
        : lighten(0.3, props.theme[props.appearance])};
  }
  &:focus {
    outline: none;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
  }
  ${props =>
    !props.disabled &&
    css`
      &:hover {
        background-color: ${props =>
          lighten(0.2, props.theme[props.appearance])};
      }
    `}
`

type ButtonProps = {
  children?: Node,
  onClick?: void => void,
  className?: string,
  appearance?: string,
  disabled?: Boolean,
}

export default ({
  children,
  onClick,
  className,
  appearance = 'mainColor',
  disabled = false,
}: ButtonProps) => {
  return (
    <Button
      className={className}
      onClick={e => {
        if (!disabled && onClick) {
          onClick(e)
        } else return
      }}
      appearance={appearance}
      role="button"
      disabled={disabled}
    >
      <div>{children}</div>
    </Button>
  )
}
