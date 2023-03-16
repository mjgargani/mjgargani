import styled from 'styled-components'
import { CardTitleProps } from './types'

export const Container = styled.div<CardTitleProps>`
  position: relative;
  min-height: 60%;
`

export const Title = styled.h1`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Sono', sans-serif;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  padding: 0;
  line-height: 200%;
`
