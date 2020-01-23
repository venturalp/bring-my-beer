import React from 'react'
import Footer from '../index'

describe('Footer component', () => {
  it('render footer', () => {
    const footer = <Footer />
    expect(footer).toMatchSnapshot()
  })
})
