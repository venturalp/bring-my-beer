// @flow
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import TemplateMaster from '../templates/Master'
import {
  searchByAddress,
  setIsLoading,
  setPosition,
  getAddressPoc,
} from '../actions'
import SearchBar from '../components/SearchBar'
import { useHistory } from 'react-router-dom'
import Grid from '../components/Grid'

const HomeWrapper = styled(Grid)`
  width: 100%;
`

const Home = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [searchText, setSearchText] = useState('')
  const results = useSelector(({ generalReducer }) => generalReducer.position)
  const addressPoc = useSelector(
    ({ generalReducer }) => generalReducer.addressPoc,
  )
  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = e => {
    setSearchText(e.target.value)
  }

  const doSearch = () => {
    dispatch(setIsLoading(true))
    dispatch(searchByAddress(searchText))
    setShouldRedirect(true)
  }

  const doAfterSearch = () => {
    dispatch(getAddressPoc({ lat: results[0], long: results[1] }))
  }

  useEffect(() => {
    if (results.length && shouldRedirect) {
      doAfterSearch()
    } else {
      dispatch(setIsLoading(false))
    }
  }, [results])

  useEffect(() => {
    dispatch(setIsLoading(false))
    if (addressPoc && addressPoc.id) {
      history.push('/results')
    }
  }, [addressPoc])

  return (
    <TemplateMaster>
      <HomeWrapper>
        <SearchBar
          doSearch={doSearch}
          doAfterSearch={doAfterSearch}
          onChange={handleChange}
          value={searchText}
        />
      </HomeWrapper>
    </TemplateMaster>
  )
}

export default Home
