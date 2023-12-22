import React from 'react'

export const ArrowCircle: React.FC = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg" className='group active:scale-95 cursor-pointer'>
      <g filter="url(#filter0_d_84_192)">
        <rect x="20" y="20" width="77" height="77" rx="38.5" fill="url(#paint0_linear_84_192)"/>
        <path d="M81.6705 60.3397C82.3608 59.6494 82.3608 58.5303 81.6705 57.84L70.4216 46.5911C69.7314 45.9009 68.6122 45.9009 67.9219 46.5911C67.2316 47.2814 67.2316 48.4006 67.9219 49.0909L77.9209 59.0899L67.9219 69.0888C67.2316 69.7791 67.2316 70.8983 67.9219 71.5886C68.6122 72.2788 69.7314 72.2788 70.4216 71.5886L81.6705 60.3397ZM36.5898 60.8574L80.4206 60.8574L80.4206 57.3223L36.5898 57.3223L36.5898 60.8574Z" fill="white"/>
      </g>
      <defs>
        <filter id="filter0_d_84_192" x="0" y="0" width="117" height="117" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="10"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_84_192"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_84_192" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_84_192" x1="58.5" y1="20" x2="58.5" y2="97" gradientUnits="userSpaceOnUse">
          <stop offset="0.229167" stopColor="#DDAAB1"/>
          <stop offset="1" stopColor="#D18692"/>
        </linearGradient>
      </defs>
    </svg>
  )
}
