import { type CommonProps } from '../../globals';
import randomId from '../../utils/randomId';
import React from 'react';

const About: React.FC<CommonProps> = ({ dataTestId = randomId('page-about') }) => {
  // const { profile } = useContext(GitHubDataContext);
  return (
    <div data-testid={dataTestId}>About</div>
  );
};

export default About;
