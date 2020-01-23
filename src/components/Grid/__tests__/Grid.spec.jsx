import React from 'react'
import Grid from '../index'

describe('Grid component', () => {
  it('render default Grid', () => {
    const grid = <Grid>Foo bar</Grid>
  })
  it('render default Grid with justify, wrap and valing setted', () => {
    const grid = (
      <Grid justify="space-between" valing="flex-start" wrap="wrap">
        Foo bar
      </Grid>
    )
  })
})
