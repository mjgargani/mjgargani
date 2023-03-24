import styled from 'styled-components'
import defaults from '../../../styles/defaults/button'
import commonDefaults from '../../../styles/defaults/common'

import animation from '../../../styles/utils/animation'
import { type ButtonProps } from './types'

export const Container = styled.button<ButtonProps>`
  width: 100%;
  height: 100%;
  border-style: none;
  border-width: 0px;

  border-radius: ${commonDefaults.border.radius};
  color: ${(props) => (props.active ? 
    defaults.color.active.text[0] : 
    defaults.color.active.text[1])};
  background-color: ${(props) => (props.active ? 
    defaults.color.active.bg[0] : 
    defaults.color.active.bg[1])};

  animation: ${(props) =>
      !props.active
        ? animation.bg.color(
          defaults.color.active.bg[2], 
          defaults.color.active.bg[0])
        : 'none'}
    0.25s;

  &:hover {
    cursor: ${(props) => (props.active ? 'default' : 'pointer')};
    background-color: ${(props) => (props.active ? 
      defaults.color.active.bg[0] : 
      defaults.color.active.bg[2])};
    animation: ${(props) =>
        !props.active
          ? animation.bg.color(
            defaults.color.active.bg[0], 
            defaults.color.active.bg[2])
          : 'none'}
      0.25s;
  }

  h2 span {
    font-family: 'mjgarganis Lab', sans-serif;
    font-weight: normal;
    padding: 0;
    margin-right: 0.5vw;
  }
`
