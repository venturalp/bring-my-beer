import React from 'react'
import { shallow, mount } from 'enzyme'
import SearchBar from '../index'

const doSearch = jest.fn()
const onChange = jest.fn()
const doAfterSearch = jest.fn()

describe('SearchBar Component', () => {
  it('Render default SerchBar', () => {
    const searchbar = shallow(<SearchBar onChange={onChange} value="" />)
    expect(searchbar).toMatchSnapshot()
  })

  it('Render SearchBar with no pin', () => {
    const searchbar = shallow(
      <SearchBar hasPin={false} onChange={onChange} value="" />,
    )
    expect(searchbar).toMatchSnapshot()
  })
})
