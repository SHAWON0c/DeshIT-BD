import React from 'react';

const GlobalSpinner = ({ visible }) => {
  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center 
        bg-white bg-opacity-90 
        transition-opacity duration-500 ease-in-out
        ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div className="w-12 h-12 text-orange-600">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <circle cx="4" cy="12" r="3">
            <animate id="spinner_jObz" begin="0;spinner_vwSQ.end-0.25s" attributeName="r" dur="0.75s" values="3;.2;3" />
          </circle>
          <circle cx="12" cy="12" r="3">
            <animate begin="spinner_jObz.end-0.6s" attributeName="r" dur="0.75s" values="3;.2;3" />
          </circle>
          <circle cx="20" cy="12" r="3">
            <animate id="spinner_vwSQ" begin="spinner_jObz.end-0.45s" attributeName="r" dur="0.75s" values="3;.2;3" />
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default GlobalSpinner;
