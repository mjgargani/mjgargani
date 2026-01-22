import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../atoms/Button';
import React from 'react';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="container flex flex-col gap-4 md:flex-row">
      <Button
        active={currentPath === '/'}
        icon="home"
        onClick={() => navigate('/')}
        wFull={false}
        className="item flex-item-1 flex-1"
      >Início</Button>
      <Button
        active={currentPath === '/projects'}
        icon="archive"
        onClick={() => navigate('/projects')}
        wFull={false}
        className="item flex-item-1 flex-1"
      >Projetos</Button>
      <Button
        active={currentPath === '/about'}
        icon="about"
        onClick={() => navigate('/about')}
        wFull={false}
        className="item flex-item-1 flex-1"
      >Sobre</Button>
    </div>
  );
};

export default Navigation;
