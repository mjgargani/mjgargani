import styled, {keyframes} from "styled-components";

const potionRotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`

export const Potion = styled.p`
  animation: ${potionRotate} 1s infinite linear;
  margin: 0;
  padding: 0;
  font-size: 4vw;
`

export const Container = styled.div`
  position: fixed;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  min-height: 2.5px;
  min-width: 5px;
  padding: 1%;
  top: calc(50vh - 1.25vh);
  left: calc(50vw - 2.5vw);
  background-color: rgba(0, 0, 0, .5);
  color: white;
  border-radius: 5px;
`