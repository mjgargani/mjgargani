/**
 * Animation Utilities
 * 
 * Provides reusable CSS animation generators for styled-components.
 * These functions create keyframe animations that can be used inline.
 */

import { keyframes } from 'styled-components';

/**
 * Creates an opacity transition animation
 * @param from - Starting opacity value (0-1)
 * @param to - Ending opacity value (0-1)
 * @returns Keyframes animation for opacity transition
 */
const opacity = (from: number, to: number) => keyframes`
  from {
    opacity: ${from};
  }
  to {
    opacity: ${to};
  }
`;

/**
 * Creates a rotation animation
 * @param from - Starting rotation in degrees
 * @param to - Ending rotation in degrees
 * @returns Keyframes animation for rotation
 */
const rotate = (from: number, to: number) => keyframes`
  from {
    transform: rotate(${from}deg);
  }
  to {
    transform: rotate(${to}deg);
  }
`;

export default {
  opacity,
  rotate,
};
