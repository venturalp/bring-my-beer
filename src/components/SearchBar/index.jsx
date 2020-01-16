import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Input from '../Input'
import IcoSearch from '../../assets/search.svg'
import IcoPin from '../../assets/pin.svg'
import Grid from '../Grid'
import { getLocation } from '../../utils/location'

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
}

export default ({ doSearch }: SearchBarProps) => {
  const [currentLocation, setCurrentLocation] = useState([])
  const [searchText, setSearchText] = useState('')
  const history = useHistory()

  const handleSearch = e => {
    // TODO Implementar busca por endereco
    console.log(e)
  }

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
      history.push('/results')
    })
  }

  return (
    <SearchBar>
      <Input
        placeholder="digite seu endereço aqui"
        onKeyDown={handleKey}
        value={searchText}
        onChange={handleChange}
      />
      <IcoSearch height={35} onClick={() => doSearch(searchText)} />
      <IcoPin height={35} onClick={handlePin} />
    </SearchBar>
  )
}
