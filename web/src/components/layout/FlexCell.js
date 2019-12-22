import React from 'react'

export const FlexCellWeb = props => (
  <div
    style={{
      alignItems: 'center',
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    { props.children }
  </div>
)

export default FlexCellWeb
