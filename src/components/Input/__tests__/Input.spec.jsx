import React from 'react'
import Input from '../index'
import { shallow } from 'enzyme'

describe('Input Component', () => {
  it('render default Input', () => {
    const input = <Input />
    expect(input).toMatchSnapshot()
  })
  it('render default Input with message (not error)', () => {
    const message = 'Foo bar'
    const input = shallow(<Input message={message} />)
    expect(input.text().includes(message)).toBeTruthy()
    expect(input).toMatchSnapshot()
  })
  it('render default Input with error message', () => {
    const message = 'Foo bar'
    const input = shallow(<Input message={message} error />)
    expect(input.text().includes(message)).toBeTruthy()
    expect(input).toMatchSnapshot()
  })
})
