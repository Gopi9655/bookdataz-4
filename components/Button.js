// components/Button.js
import React from 'react';

const Button = ({ label, onClick, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#00719E] text-white font-semibold py-3 px-7  rounded-md 
                  transition-all duration-300 ease-in-out transform hover:scale-105 
                  hover:bg-[#005f87] focus:ring-4 focus:ring-[#7ec6dc] focus:outline-none
                  active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed`}
    >
      {label}
    </button>
  );
};

export default Button;
