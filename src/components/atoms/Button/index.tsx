import React from 'react';
import Icon from '../Icon';

interface ButtonProps {
  active?: boolean;
  href?: string | URL;
  target?: "_blank" | "_self" | "_parent" | "_top" | "framename"; // https://www.w3schools.com/tags/att_a_target.asp
  icon?: string | string[];
  wFull?: boolean;
  onClick: (e: React.MouseEvent | React.TouchEvent) => void;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  active = false, href, target, icon, wFull = true, onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      data-href={href}
      data-target={target}
      className={`${className} inline-block ${wFull ? 'min-w-full' : ''} md:w-auto py-2 px-4 text-center rounded-md transition-colors duration-300 cursor-pointer
        ${active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white'}`}
    >
      {icon && (<Icon i={icon} color="#000" />)} {children}
    </button>
  );
};

export default Button;
