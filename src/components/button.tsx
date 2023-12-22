import React, { ButtonHTMLAttributes } from 'react'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  size?: 'default' | 'small',
}

const sizes = {
  small: 'py-2 px-8',
  default: 'text-xl xs:text-2xl px-12 py-4 sm:px-16',
}

const button: React.FC<IProps> = ({size = "default", ...props}) => {
  return (
    <button {...props} className={`${sizes[size]} uppercase text-white font-black rounded-xl md:rounded-3xl relative ${props.className}`}>
      {props.children}
    </button>
  )
}

export default button
