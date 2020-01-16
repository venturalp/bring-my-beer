import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
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

export default withRouter(props => {
  const [currentLocation, setCurrentLocation] = useState([])

  const handleSearch = e => {
    // TODO Implementar busca por endereco
    console.log(e)
  }

  const handlePin = e => {
    getLocation(coordinates => {
      setCurrentLocation([
        coordinates.coords.latitude,
        coordinates.coords.longitude,
      ])
      props.history.push('/results')
    })
  }

  return (
    <SearchBar>
      <Input placeholder="digite seu endereço aqui" />
      <IcoSearch height={35} onClick={handleSearch} />
      <IcoPin height={35} onClick={handlePin} />
    </SearchBar>
  )
})
