"use client"

import { getDigits } from '@/lib/getDigits'
import React from 'react'
import { NumberCard } from './numberCard';

interface IProps {
  number: number,
  className?: string,
}

export const Numbers: React.FC<IProps> = ({ number, className }) => {
  const digits = getDigits(number);
  return (
    <div className={`mx-auto flex gap-8 ${className}`}>
      {digits.map((digit, index) => (
        <NumberCard key={index} digit={digit} />
      ))}
    </div>
  )
}

