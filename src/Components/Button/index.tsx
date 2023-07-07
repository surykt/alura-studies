import React from 'react'

interface ButtonProps {
  children: string
}

export default function Button({ children } : ButtonProps) {
  return(
    <button>
      {children}
    </button>
  )
}
