// @flow
import React from 'react'
import styled, { css } from 'styled-components'

const Grid = styled.div`
  display: flex;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.valign || 'center'};
  ${props =>
    props.container &&
    css`
      max-width: 96%;
      margin: 0 auto;
      @media screen and (min-width: 600px) {
        max-width: 90%;
      }
    `}
`

export const Col = styled.div``

export default Grid
