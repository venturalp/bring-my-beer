// @flow
import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import TemplateMaster from '../templates/Master'
import { searchByAddress } from '../actions'

const Home = () => {
  const contacts = useSelector(
    ({ generalReducer }) => generalReducer.addressResults,
  )
  const dispatch = useDispatch()

  return <TemplateMaster>conteúdo home</TemplateMaster>
}

export default Home
