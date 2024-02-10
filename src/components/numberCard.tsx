import React from "react"

interface IProps {
  digit: string,
  className?: string,
  aos: string,
  aosDelay: string,
}
export const NumberCard: React.FC<IProps> = ({ digit, className, aos, aosDelay }) => {
  return (
    <>
      <div data-aos={aos} data-aos-delay={aosDelay} className={`number_card flex items-center justify-center min-w-[4rem] xs:min-w-[5.625rem] rounded-[0.37rem] w-full text-[3.8rem] xs:text-[5.25rem] max-sm:py-2 relative font-bold uppercase max-w-min ${className}`}>
        {digit}
      </div>
    </>
  )
}
