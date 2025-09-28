"use client";

import React from "react";

interface GlobalInputProps {
  id: string;
  label: string;
  type?: string;
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autoComplete?: string;
  disabled?: boolean;
  className?: string;
}

const GlobalInput: React.FC<GlobalInputProps> = ({
  id,
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  autoComplete,
  disabled = false,
  className = "",
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}*
      </label>
      <input
        id={id}
        name={name || id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full h-[42px] px-4 bg-gray-50 border border-gray-300 rounded-lg 
          focus:outline-none focus:bg-transparent focus:border-gray-400 
          text-gray-900 placeholder-gray-300 transition-all duration-200 
          placeholder:font-[300] ${className}`}
      />
    </div>
  );
};

export default GlobalInput;