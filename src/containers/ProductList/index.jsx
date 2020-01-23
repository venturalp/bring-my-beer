// @flow
import React, { useState } from 'react'
import styled from 'styled-components'
import Product from '../../components/Product'
import _get from 'lodash/get'

const ProductList = styled.ul`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
`

type ProductProps = {
  products: Array<Object>,
}

export default ({ products }: ProductProps) => {
  return (
    <ProductList wrap="wrap" justify="flex-start">
      {products &&
        products.map(product => {
          return (
            <Product
              infos={product.productVariants[0]}
              key={product.productVariants[0].title}
            />
          )
        })}
    </ProductList>
  )
}
