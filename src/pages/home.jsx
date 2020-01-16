// @flow
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import TemplateMaster from '../templates/Master'
import { searchByAddress } from '../actions'
import SearchBar from '../components/SearchBar'
import Grid from '../components/Grid'

const HomeWrapper = styled(Grid)`
  width: 100%;
`

const Home = () => {
  const contacts = useSelector(
    ({ generalReducer }) => generalReducer.addressResults,
  )
  const dispatch = useDispatch()

  const doSearch = async input => {
    dispatch(searchByAddress(input))
  }

  useEffect(() => {}, [contacts])

  return (
    <TemplateMaster>
      <HomeWrapper>
        <SearchBar />
      </HomeWrapper>
    </TemplateMaster>
  )
}

export default Home
