"use client"

import { getDigits } from '@/lib/getDigits'
import React from 'react'
import { NumberCard } from './numberCard';

interface IProps {
  number: number,
  className?: string,
  suffix?: string,
}

export const Numbers: React.FC<IProps> = ({ number, className, suffix }) => {
  const digits = getDigits(number);
  return (
    <div className={`mx-auto flex gap-8 ${className}`}>
      {digits.map((digit, index) => (
        <NumberCard key={index} aos="fade-up" aosDelay={`${index * 50}`} digit={String(digit)} />
      ))}
      {suffix && (
        <NumberCard aos="fade-up" aosDelay={`${digits.length - 1 * 50}`} digit={suffix} />
      )}
    </div>
  )
}

