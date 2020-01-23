import React from 'react'
import Header from '../index'

describe('Header component', () => {
  it('render Header default', () => {
    const header = <Header />
    expect(header).toMatchSnapshot()
  })
})
