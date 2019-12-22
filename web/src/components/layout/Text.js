import React from 'react'


export const TextWeb = props => {
  const {
    children,
    fontSize=16,
  } = props

  return (
    <span style={{
      fontSize: fontSize
    }}>
      { children }
    </span>
  )
}

export default TextWeb
