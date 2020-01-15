// @flow
import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: flex;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.valign || 'center'};
`

export const Col = styled.div``

export default Grid
