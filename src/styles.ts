import styled from 'styled-components'
import { device } from './utils/devices'

interface ContainerBaseProps {
  loading?: boolean
}

export const ContainerBase = styled.div<ContainerBaseProps>`
  position: absolute;
  padding: 0;
  ${(props) => props.loading && 'cursor: wait;'}

  height: 100%;
  width: 95%;
  margin: 0 2.5%;
  @media ${device.tablet} {
    width: 90%;
    margin: 0 5%;
  }
`

export const ContainerTop = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;

  height: 5%;
  @media ${device.tablet} {
    height: 10%;
  }
`

export const ContainerPage = styled.div`
  overflow-y: auto;
  position: relative;
  width: 100%;

  height: 70%;
  /* @media ${device.tablet} {
    height: 70%;
  } */
`

export const ContainerNavigation = styled.div`
  overflow-y: auto;
  position: relative;
  width: 100%;

  height: 20%;
  @media ${device.tablet} {
    height: 10%;
  }
`

export const ContainerFooter = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;

  height: 5%;
  @media ${device.tablet} {
    height: 10%;
  }
`
