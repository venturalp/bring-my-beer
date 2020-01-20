import React from 'react'
import logo from '../../assets/logo.png'
import Grid from '../Grid'
import styled from 'styled-components'

const Header = styled.header`
  padding: 8px 0;
  ${Grid} {
    display: block;
    text-align: center;
  }
  @media screen and (min-width: 600px) {
    ${Grid} {
      display: flex;
    }
  }
`

export default () => {
  return (
    <Header>
      <Grid justify="space-between" container>
        {/* <img src={logo} width={175} />
        <h1>Bring my beer!</h1> */}
      </Grid>
    </Header>
  )
}
