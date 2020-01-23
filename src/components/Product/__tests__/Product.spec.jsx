import React from 'react'
import { shallow } from 'enzyme'
import Product from '../index'

const initProp = {
  title: 'Foo bar',
  price: '2,99',
}

describe('Product component', () => {
  it('Render Product component', () => {
    const product = shallow(<Product infos={initProp} />)
    expect(product).toMatchSnapshot()
  })
})
