import React from 'react'
import { Bars } from 'svg-loaders-react'
import styled from 'styled-components'
import Grid from '../Grid'

const Loading = styled(Grid)`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  .bg {
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  svg {
    position: absolute;
    z-index: 2;
    fill: ${props => props.theme.mainColor};
  }
`

export default () => {
  return (
    <Loading valing="center" justify="center">
      <div className="bg" />
      <Bars width={80} />
    </Loading>
  )
}
