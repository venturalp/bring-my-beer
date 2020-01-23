import React from 'react'
import Button from '../index'
import { shallow } from 'enzyme'

describe('Button component', () => {
  it('render default button', () => {
    const button = <Button>Foo bar</Button>
    expect(button).toMatchSnapshot()
  })
  it('render success button', () => {
    const button = <Button appearance="success">Foo bar</Button>
    expect(button).toMatchSnapshot()
  })
  it('render error button', () => {
    const button = <Button appearance="success">Foo bar</Button>
    expect(button).toMatchSnapshot()
  })
  it('render button with children', () => {
    const child = <div>Foo bar</div>
    const button = shallow(<Button appearance="success">{child}</Button>)
    expect(button.find(child)).toBeTruthy()
  })
  it('render a button with onClick function', () => {
    const fnClick = jest.fn()
    const button = shallow(<Button onClick={fnClick}>Foo Bar</Button>)

    button.simulate('click')
    expect(fnClick).toHaveBeenCalled()
  })
  it('render a disabled button', () => {
    const fnClick = jest.fn()
    const button = shallow(
      <Button disabled onClick={fnClick}>
        Foo Bar
      </Button>,
    )

    button.simulate('click')
    expect(fnClick).not.toHaveBeenCalled()
  })
})
