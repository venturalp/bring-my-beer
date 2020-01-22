// @flow
import React, { useState } from 'react'
import styled from 'styled-components'
import { toBRL } from '../../utils/formater'
import Beer from '../../assets/beer.svg'

const Product = styled.div`
  border: 1px solid ${props => props.theme.mainColor};
  border-radius: 12px;
  margin: 6px;
  padding: 6px;
  width: 18.5%;
  height: 120px;
  text-align: center;
  h2 {
    font-size: 12px;
    margin: 0 0 4px 0;
    padding: 0;
    font-weight: 700;
    text-align: left;
  }
  p {
    margin: 4px 0 0 0;
    font-size: 10px;
  }
`

type ProductProps = {
  infos: Object,
}

export default ({ infos }: ProductProps) => {
  const [quantity, setQuantity] = useState(0)
  return (
    <Product>
      <h2>{infos.title}</h2>
      <Beer width={45} />
      <p>R$ {toBRL(infos.price)}</p>
    </Product>
  )
}
