import styled, { css } from 'styled-components'

import { ButtonStyles } from '../../../styles/defaults/button'
import animation from '../../../styles/utils/animation'
import { type ButtonProps } from './types'

const hover = (defaults: ButtonStyles) => css`
  &:hover {
    cursor: pointer;
    background-color: ${defaults.color.active.bg[2]};
    animation: ${animation.bg.color(defaults.color.active.bg[1], defaults.color.active.bg[2])} 0.25s;
  }
`

export const Container = styled.button<ButtonProps>`
  width: 95%;
  height: 80%;
  margin: 0 2.5%;
  padding: 0;
  border-style: none;
  border-width: 0px;
  cursor: default;

  border-radius: ${(props) => props.theme.common.border.radius};
  color: ${(props) =>
    props.active
      ? props.theme.button.color.active.text[0]
      : props.theme.button.color.active.text[1]};
  background-color: ${(props) =>
    props.active ? props.theme.button.color.active.bg[0] : props.theme.button.color.active.bg[1]};

  animation: ${(props) =>
      !props.active
        ? animation.bg.color(
            props.theme.button.color.active.bg[2],
            props.theme.button.color.active.bg[1],
          )
        : 'none'}
    0.25s;

  ${(props) => !props.active && hover(props.theme.button)}

  h2 {
    margin: 0;
  }

  h2 span {
    font-family: 'mjgarganis Lab', sans-serif;
    font-weight: normal;
    padding: 0;
    margin-right: 0.5vw;
  }

  ${(props) => props.styledCss}
`
