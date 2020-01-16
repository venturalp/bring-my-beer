import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPosition } from '../actions/index'
import Grid from '../components/Grid'

export default () => {
  const dispatch = useDispatch()
  const position = useSelector(({ generalReducer }) => {
    return generalReducer.position
  })

  useEffect(() => {
    return () => {
      console.log('clean results')
      dispatch(setPosition([]))
    }
  }, [])

  return <Grid>RESULTADOS {JSON.stringify(position)}</Grid>
}
