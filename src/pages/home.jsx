// @flow
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import TemplateMaster from '../templates/Master'
import { searchByAddress, setIsLoading } from '../actions'
import SearchBar from '../components/SearchBar'
import Grid from '../components/Grid'

const HomeWrapper = styled(Grid)`
  width: 100%;
`

const Home = () => {
  const results = useSelector(
    ({ generalReducer }) => generalReducer.addressResults,
  )
  const dispatch = useDispatch()

  const doSearch = async input => {
    dispatch(setIsLoading(true))
    dispatch(searchByAddress(input))
  }

  useEffect(() => {
    dispatch(setIsLoading(false))
    if (results && results.resourceSets && results.resourceSets[0]) {
      console.log([
        ...results.resourceSets[0].resources[0].geocodePoints[0].coordinates,
      ])
    }
  }, [results])

  return (
    <TemplateMaster>
      <HomeWrapper>
        <SearchBar doSearch={doSearch} />
      </HomeWrapper>
    </TemplateMaster>
  )
}

export default Home
