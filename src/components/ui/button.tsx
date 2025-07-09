import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline' | 'destructive';
  size?: 'default' | 'sm' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'default', 
    size = 'default', 
    className, 
    children, 
    ...props 
  }, ref) => {
    // Stil sınıflarını belirle
    const variantClasses = {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      ghost: 'bg-transparent hover:bg-gray-100',
      outline: 'border border-gray-300 bg-transparent hover:bg-gray-50',
      destructive: 'bg-red-600 text-white hover:bg-red-700',
    };
    
    const sizeClasses = {
      default: 'px-4 py-2',
      sm: 'px-3 py-1 text-sm',
      lg: 'px-6 py-3 text-lg',
    };
    
    const classes = `${variantClasses[variant]} ${sizeClasses[size]} ${className || ''} rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`;
    
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };