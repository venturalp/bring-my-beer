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
import { setPosition, getProducts, setIsLoading } from '../../actions'

const SearchBar = styled(Grid)`
  width: 100%;
  padding-bottom: 16px;
  input {
    margin-bottom: 0;
  }
  svg {
    cursor: pointer;
    margin-left: 8px;
  }
`

type SearchBarProps = {
  doSearch: void => void,
  hasPin?: boolean,
  placeholder?: string,
  doAfterSearch?: void => void,
  className?: string,
  value: string,
  onChange: void => void,
  name?: string,
}

export default ({
  doSearch,
  hasPin = true,
  placeholder = 'digite seu endereço aqui',
  doAfterSearch,
  className,
  value,
  onChange,
  name,
}: SearchBarProps) => {
  const [currentLocation, setCurrentLocation] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()

  const handleKey = e => {
    if (e.keyCode === 13) {
      validateSearch()
    }
  }

  const validateSearch = () => {
    if (!value) {
      setErrorMessage('Por favor, preencha com um endereço válido!')
    } else {
      setErrorMessage('')
      doSearch()
    }
  }

  const handlePin = e => {
    dispatch(setIsLoading(true))
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
      if (doAfterSearch) doAfterSearch()
    }
  }, [currentLocation])

  return (
    <SearchBar className={className}>
      <Input
        placeholder={placeholder}
        onKeyDown={handleKey}
        value={value}
        onChange={onChange}
        message={errorMessage}
        error={errorMessage !== ''}
        name={name}
      />
      <IcoSearch height={35} onClick={validateSearch} />
      {hasPin && <IcoPin height={35} onClick={handlePin} />}
    </SearchBar>
  )
}
