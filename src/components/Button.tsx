import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-dark-900";

  const variants = {
    primary:
      "bg-brand-accent text-dark-950 font-bold shadow-[0_0_20px_rgba(163,230,53,0.3)] hover:bg-white hover:scale-105 hover:shadow-[0_0_35px_rgba(163,230,53,0.6)]",
    outline:
      "bg-white/5 text-white border border-white/10 backdrop-blur-sm hover:bg-brand-accent/10 hover:border-brand-accent/50 hover:text-brand-accent hover:shadow-[0_0_20px_rgba(163,230,53,0.15)]",
    ghost:
      "p-0 bg-transparent text-brand-accent hover:text-white hover:translate-x-1 text-glow-sm"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className} group`}
      {...props}
    >
      {children}
      {icon && (
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
};

export default Button;
