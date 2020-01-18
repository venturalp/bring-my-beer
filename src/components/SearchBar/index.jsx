// @flow
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Input from '../Input'
import IcoSearch from '../../assets/search.svg'
import IcoPin from '../../assets/pin.svg'
import Grid from '../Grid'
import { getLocation } from '../../utils/location'
import { setPosition, getProducts } from '../../actions'

const SearchBar = styled(Grid)`
  width: 100%;
  input {
    flex-grow: 2;
    margin-bottom: 0px;
  }
  svg {
    cursor: pointer;
    margin-left: 8px;
  }
`

type SearchBarProps = {
  doSearch: string => void,
  hasPin: boolean,
  placeholder: string,
}

export default ({
  doSearch,
  hasPin = true,
  placeholder = 'digite seu endereço aqui',
}: SearchBarProps) => {
  const [currentLocation, setCurrentLocation] = useState([])
  const [searchText, setSearchText] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()

  const handleChange = e => {
    setSearchText(e.target.value)
  }

  const handleKey = e => {
    if (e.keyCode === 13) {
      doSearch(searchText)
    }
  }

  const handlePin = e => {
    getLocation(coordinates => {
      setCurrentLocation([
        coordinates.coords.latitude,
        coordinates.coords.longitude,
      ])
    })
  }

  useEffect(() => {
    if (currentLocation.length) {
      dispatch(setPosition(currentLocation))
      history.push('/results')
    }
  }, [currentLocation])

  return (
    <SearchBar>
      <Input
        placeholder={placeholder}
        onKeyDown={handleKey}
        value={searchText}
        onChange={handleChange}
      />
      <IcoSearch height={35} onClick={() => doSearch(searchText)} />
      {hasPin && <IcoPin height={35} onClick={handlePin} />}
    </SearchBar>
  )
}
