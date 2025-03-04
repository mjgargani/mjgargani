// src/components/molecules/Frame/wrapper.tsx
import React, { PropsWithChildren } from 'react';
import { type FrameProps } from './types';
import randomId from '../../../utils/randomId';

const FrameWrapper: React.FC<PropsWithChildren<FrameProps>> = ({ dataTestId = randomId('frame'), page, children }) => {
  const gradColors = {
    '/': ['#00137f', '#0095ff'],
    '/projects': ['#0095ff', '#ff0000'],
    '/about': ['#ff0000', '#51ff00'],
  };

  const colors = gradColors['/about'] || gradColors['/'];
  const gradAngle = `${Math.trunc(Math.random() * 360)}deg`;

  return (
    <div
      data-testid={dataTestId}
      className="fixed inset-0 w-full h-full z-[-50] transition-none animate-bgMove"
      style={{
        backgroundImage: `linear-gradient(${gradAngle}, ${colors[0]}, ${colors[1]})`,
        backgroundPosition: "0% 0%",
        animation: `bgMov 5s linear infinite`,
        width: '600vw',
        height: '600vh',
        overflow: 'hidden',
        top: '-250vh',
        left: '-250vw',
      }}
    >
      {children}
    </div>
  );
};

export default FrameWrapper;
