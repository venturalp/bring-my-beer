import React from 'react'
import { useSelector } from 'react-redux'
import Grid from '../components/Grid'

export default () => {
  const position = useSelector(({ generalReducer }) => {
    return generalReducer.position
  })

  return <Grid>RESULTADOS {JSON.stringify(position)}</Grid>
}
