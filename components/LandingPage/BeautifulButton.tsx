import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';

interface BeautifulButtonProps extends ButtonProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  fontSize?: string;
  textColor?: string;
  borderRadius?: string;
}

const BeautifulButton: React.FC<BeautifulButtonProps> = ({ 
  children, 
  className, 
  width = '400px', 
  height = '60px', 
  fontSize = '1.25rem', // default to text-xl
  textColor = 'white',
  borderRadius = '0.75rem', // default to rounded-xl
  ...props 
}) => {
  return (
    <Button
      className={`
        relative overflow-hidden
        font-extrabold
        bg-gradient-to-br from-purple-500 to-indigo-600
        shadow-[0_10px_20px_rgba(130,48,255,0.3),_0_6px_6px_rgba(130,48,255,0.3),_inset_0_-3px_0_rgba(0,0,0,0.1)]
        transition-all duration-300 ease-in-out
        hover:shadow-[0_15px_25px_rgba(130,48,255,0.4),_0_10px_10px_rgba(130,48,255,0.3),_inset_0_-3px_0_rgba(0,0,0,0.2)]
        hover:-translate-y-1
        active:shadow-[0_5px_10px_rgba(130,48,255,0.2),_0_3px_3px_rgba(130,48,255,0.3),_inset_0_-2px_0_rgba(0,0,0,0.2)]
        active:translate-y-0.5
        ${className}
      `}
      style={{
        width,
        height,
        fontSize,
        color: textColor,
        borderRadius,
      }}
      {...props}
    >
      <span className="absolute inset-0 overflow-hidden" style={{ borderRadius }}>
        <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
      </span>
      <span className="relative">{children}</span>
    </Button>
  );
};

export default BeautifulButton;