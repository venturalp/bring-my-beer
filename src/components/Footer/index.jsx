import React, { forwardRef } from 'react'
import Grid from '../Grid'
import Button from '../Button'
import styled, { css } from 'styled-components'

const Footer = styled.footer`
  padding: 8px 0;
  background-color: ${props => props.theme.mainColor};
  width: 100%;
  position: relative;
  a {
    color: ${props => props.theme.txt};
  }
  ${props =>
    props.shouldStick &&
    css`
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
    `};
`

export default forwardRef((props, ref) => {
  return (
    <Footer ref={ref} {...props}>
      <Grid justify="space-between" container>
        <p>
          by{' '}
          <a href="http://github.com/venturalp">Guilherme Ventura de souza</a>
        </p>
      </Grid>
    </Footer>
  )
})
