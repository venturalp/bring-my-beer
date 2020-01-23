// @flow
import React, { useState } from 'react'
import styled from 'styled-components'
import { toBRL } from '../../utils/formatter'
import Beer from '../../assets/beer.svg'
import Grid from '../Grid'
import Button from '../Button'
import { lighten } from 'polished'

const ProductWrapper = styled.li`
  width: 100%;
  display: flex;
  @media screen and (min-width: 420px) {
    width: 50%;
  }
  @media screen and (min-width: 550px) {
    width: 33.3%;
  }
  @media screen and (min-width: 900px) {
    width: 20%;
  }
`

const Product = styled.div`
  border: 1px solid ${props => props.theme.mainColor};
  border-radius: 12px;
  margin: 6px;
  padding: 6px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  transition: all 0.4s linear;
  background-color: #fff;
  &:hover {
    background-color: ${props => lighten(0.2, props.theme.mainColor)};
  }
  h2 {
    font-size: 12px;
    margin: 0 0 4px 0;
    padding: 0;
    font-weight: 700;
    flex: 1 0 auto;
  }
  p {
    margin: 4px 0 0 0;
    font-size: 10px;
  }
`

const Content = styled(Grid)`
  align-content: center;
  padding: 10px 0;
`

const ButtonHolder = styled(Grid)`
  margin: 10px auto;
  width: 50%;
  p {
    margin: 0;
    padding: 0;
    line-height: 1;
  }
`

const CustomButton = styled(Button)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
`

type ProductProps = {
  infos: Object,
}

export default ({ infos }: ProductProps) => {
  const [quantity, setQuantity] = useState(0)

  const removeItem = () => {
    if (quantity > 0) setQuantity(quantity - 1)
  }

  const addItem = () => {
    setQuantity(quantity + 1)
  }

  return (
    <ProductWrapper>
      <Product>
        <h2>{infos.title}</h2>
        <Content>
          <Beer width={45} />
        </Content>
        <p>R$ {toBRL(infos.price)}</p>
        <ButtonHolder justify="space-between">
          <CustomButton
            appearance="error"
            disabled={quantity === 0}
            onClick={removeItem}
            className="teste"
          >
            -
          </CustomButton>
          <p>{quantity}</p>
          <CustomButton appearance="success" onClick={addItem}>
            +
          </CustomButton>
        </ButtonHolder>
      </Product>
    </ProductWrapper>
  )
}
