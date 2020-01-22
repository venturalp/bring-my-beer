import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getCategories, setIsLoading, getProducts } from '../actions/index'
import Grid from '../components/Grid'
import Select from '../components/Select'
import SearchBar from '../components/SearchBar'
import Button from '../components/Button'
import ProductList from '../containers/ProductList'

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
  const [formValues, setFormValues] = useState({
    search: '',
    categoryId: 0,
  })

  const content = useSelector(({ generalReducer }) => {
    return generalReducer
  })

  const categories = useSelector(({ generalReducer }) => {
    return generalReducer.categories
  })

  const products = useSelector(({ generalReducer }) => {
    return generalReducer.products
  })

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const doSearch = () => {
    const searchData = {
      ...formValues,
      id: content.addressPoc.id,
    }
    dispatch(setIsLoading(true))
    dispatch(getProducts(searchData))
  }
  useEffect(() => {
    if (!content.addressPoc) {
      history.push('/')
    }
    dispatch(setIsLoading(true))
    dispatch(getCategories())
    return () => dispatch(setIsLoading(false))
  }, [])

  useEffect(() => {
    if (categories && categories.length) dispatch(setIsLoading(false))
  }, [categories])

  useEffect(() => {
    dispatch(setIsLoading(false))
  }, [content.products])

  return (
    <Grid container justify="space-between" wrap="wrap">
      <GridSearch valing="flex-start" wrap="wrap" justify="flex-start">
        <SearchBarStyle
          hasPin={false}
          placeholder="busque aqui"
          doSearch={doSearch}
          onChange={handleChange}
          value={formValues && formValues.search}
          name="search"
        />
        <Grid>
          <Select
            placeholder="Selecione uma categoria"
            value={formValues && formValues.categoryId}
            className="result-select"
            name="categoryId"
            onChange={handleChange}
            doSearch={doSearch}
          >
            {categories &&
              categories.map(category => (
                <option value={category.id} key={category.id}>
                  {category.title}
                </option>
              ))}
          </Select>
          <ButtonStyled className="result-button" onClick={doSearch}>
            Pesquisar
          </ButtonStyled>
        </Grid>
      </GridSearch>
      {products && <ProductList products={products} />}
    </Grid>
  )
}
