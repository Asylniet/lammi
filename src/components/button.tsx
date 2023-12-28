import React, { ButtonHTMLAttributes } from 'react'
import { CircleLoader } from './circleLoader';
import { cva, type VariantProps } from "class-variance-authority"


export type Status = "idle" | "error" | "success" | "pending";

export enum StatusEnum {
  IDLE = "idle",
  ERROR = "error",
  SUCCESS = "success",
  PENDING = "pending",
}
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  size?: 'default' | 'small',
  status?: Status,
}

const sizes = {
  small: 'py-2 px-8',
  default: 'text-xl xs:text-2xl px-12 py-4 sm:px-16',
}

const button: React.FC<IProps> = ({size = "default", status = "idle", ...props}) => {
  const isPending = status === StatusEnum.PENDING;
  return (
    <button {...props} className={`${sizes[size]} button no-highlight transition-all uppercase text-white font-black rounded-xl md:rounded-3xl relative ${isPending ? "pointer-events-none" : ""} ${props.className}`}>
      <div className={`${isPending ? "opacity-0" : "opacity-100"} flex justify-center gap-2`}>
        {props.children}
      </div>
      <div className={`${isPending ? "opacity-100" : "opacity-0"} transition-opacity absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
        <CircleLoader />
      </div>
    </button>
  )
}

export default button
