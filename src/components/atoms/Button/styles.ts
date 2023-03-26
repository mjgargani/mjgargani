import styled, { css } from 'styled-components'

import defaults from '../../../styles/defaults/button'
import commonDefaults from '../../../styles/defaults/common'
import animation from '../../../styles/utils/animation'
import { type ButtonProps } from './types'

const hover = css`
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

  border-radius: ${commonDefaults.border.radius};
  color: ${(props) =>
    props.active ? defaults.color.active.text[0] : defaults.color.active.text[1]};
  background-color: ${(props) =>
    props.active ? defaults.color.active.bg[0] : defaults.color.active.bg[1]};

  animation: ${(props) =>
      !props.active
        ? animation.bg.color(defaults.color.active.bg[2], defaults.color.active.bg[1])
        : 'none'}
    0.25s;

  ${(props) => !props.active && hover}

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
