import styled from 'styled-components'
import { CardDescriptionProps } from './types'

export const Container = styled.div<CardDescriptionProps>`
  position: relative;
  min-height: 40%;
  
  p{
    position: absolute;
    width: 94%;
    top: 50%;
    transform: translateY(-50%);
    vertical-align: middle;
    font-weight: normal;
    margin: 0;
    padding: 0 3%;
  }
`
