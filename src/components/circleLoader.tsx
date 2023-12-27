import React from "react";

interface IProps {
  size?: string;
}

export const CircleLoader: React.FC<IProps> = ({ size = '1.5rem' }) => {
    const loaderStyle = {
        width: size,
        height: size,
    }
    return(
        <svg style={loaderStyle} className="spinner" viewBox="0 0 50 50">
            <circle className={`path`} 
              cx="25" cy="25" r="20" fill="none" strokeWidth="5" stroke="white"></circle>
        </svg>
    )
}