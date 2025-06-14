import React, { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  label,
  error,
  fullWidth = true,
  className = '',
  ...props
}, ref) => {
  const widthClasses = fullWidth ? 'w-full' : '';
  
  return (
    <div className={`mb-4 ${widthClasses}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-1">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={`w-full px-4 py-3 bg-cyber-gray border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyber-purple focus:border-transparent transition duration-200 min-h-[120px] ${
          error ? 'border-cyber-red focus:ring-cyber-red' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-cyber-red">{error}</p>}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;