/**
 * Navigation Component
 * 
 * Provides navigation buttons for the main routes:
 * - Home (/)
 * - Projects (/projects)
 * - About (/about)
 * 
 * Highlights the active route based on current location.
 */

import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../atoms/Button';
import React from 'react';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex flex-col md:w-max md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 mx-4 md:mx-auto">
      <Button
        active={currentPath === '/'}
        onClick={() => navigate('/')}
        className="px-4 py-2 text-center w-full md:w-auto"
      >
        Início
      </Button>
      <Button
        active={currentPath === '/projects'}
        onClick={() => navigate('/projects')}
        className="px-4 py-2 text-center w-full md:w-auto"
      >
        Projetos
      </Button>
      <Button
        active={currentPath === '/about'}
        onClick={() => navigate('/about')}
        className="px-4 py-2 text-center w-full md:w-auto"
      >
        Sobre
      </Button>
    </div>
  );
};

export default Navigation;
