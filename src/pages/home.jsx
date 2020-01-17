// @flow
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import TemplateMaster from '../templates/Master'
import { searchByAddress, setIsLoading, setPosition } from '../actions'
import SearchBar from '../components/SearchBar'
import { useHistory } from 'react-router-dom'
import Grid from '../components/Grid'

const HomeWrapper = styled(Grid)`
  width: 100%;
`

const Home = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const results = useSelector(({ generalReducer }) => generalReducer.position)
  const dispatch = useDispatch()
  const history = useHistory()

  const doSearch = async input => {
    dispatch(setIsLoading(true))
    dispatch(searchByAddress(input))
    setShouldRedirect(true)
  }

  useEffect(() => {
    dispatch(setIsLoading(false))
    if (results.length && shouldRedirect) {
      history.push('/results')
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
