import React from 'react'

interface ParagraphProps {
  children: React.ReactNode
}

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return (
    <>
      <div className="py-1" />
      <p className="pl-4">
        {children}
      </p>
    </>
  )
}
