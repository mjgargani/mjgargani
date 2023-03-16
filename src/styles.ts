import styled from 'styled-components'
import { device } from './utils/devices'

export const ContainerBase = styled.div`
  position: absolute;
  background-color: purple;
  padding: 0;

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
  background-color: rgba(128,128,128,.5);
  position: relative;
  width: 100%;

  height: 5%;
  @media ${device.tablet} {
    height: 10%;
  }
`

export const ContainerPage = styled.div`
  background-color: rgba(0,0,255,.5);
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
  background-color: rgba(0,255,0,.5);
  position: relative;
  width: 100%;

  height: 20%;
  @media ${device.tablet} {
    height: 10%;
  }
`

export const ContainerFooter = styled.div`
  overflow: hidden;
  background-color: rgba(255,0,0,.5);
  position: relative;
  width: 100%;

  height: 5%;
  @media ${device.tablet} {
    height: 10%;
  }
`