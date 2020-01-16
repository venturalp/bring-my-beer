// @flow
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import TemplateMaster from '../templates/Master'
import { searchByAddress } from '../actions'

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
      <div>CONTEUDO HOME{JSON.stringify(contacts)}</div>
    </TemplateMaster>
  )
}

export default Home
