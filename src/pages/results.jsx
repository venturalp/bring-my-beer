import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getCategories, setIsLoading } from '../actions/index'
import Grid from '../components/Grid'
import Select from '../components/Select'
import SearchBar from '../components/SearchBar'
import Button from '../components/Button'

const GridSearch = styled(Grid)`
  width: 100%;
  padding: 12px 0;
`

const ButtonStyled = styled(Button)`
  margin-bottom: 16px;
  margin-left: 16px;
`

const SearchBarStyle = styled(SearchBar)`
  width: 100%;
`

export default () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { formValues, setFormValues } = useState({
    searchTxt: '',
    category: 0,
  })
  const content = useSelector(({ generalReducer }) => {
    return generalReducer
  })
  const categories = useSelector(({ generalReducer }) => {
    return generalReducer.categories
  })

  const doSearch = useEffect(() => {
    if (!content.addressPoc) {
      history.push('/')
    }
    dispatch(setIsLoading(true))
    dispatch(getCategories())
  }, [])

  useEffect(() => {
    if (categories && categories.length) dispatch(setIsLoading(false))
  }, [categories])

  return (
    <Grid container justify="space-between">
      <GridSearch valing="flex-start" wrap="wrap" justify="flex-start">
        <SearchBarStyle
          hasPin={false}
          placeholder="busque aqui"
          doSearch={doSearch}
        />
        <Grid>
          <Select
            placeholder="Selecione uma categoria"
            value={-1}
            className="result-select"
          >
            {categories &&
              categories.map(category => (
                <option value={category.id} key={category.id}>
                  {category.title}
                </option>
              ))}
          </Select>
          <ButtonStyled className="result-button">Pesquisar</ButtonStyled>
        </Grid>
      </GridSearch>
    </Grid>
  )
}
