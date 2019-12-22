import React from 'react'


export const View = props => {
  const {
    children,
  } = props

  return (
    <div>
      { children }
    </div>
  )
}

export default View
