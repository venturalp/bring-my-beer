import { css } from 'styled-components'

export const InputBase = css`
  border-radius: 4px;
  border: 1px solid ${props => props.theme.inputBorder};
  font-size: 14px;
  line-height: 1;
  padding: 9px 10px 7px;
  margin-bottom: 16px;
  width: 100%;
  background-color: #fff;
  &:focus {
    outline: none;
    border-color: ${props => props.theme.txt};
  }
  &::placeholder {
    color: ${props => props.theme.inputBorder};
  }
`
