import React from 'react'

import Ad from 'common/components/Ad'

import FlexCell from 'components/layout/FlexCell'
import FlexColumn from 'components/layout/FlexColumn'

class WallContainer extends React.Component {
  render = () => {
    return (
      <FlexColumn>
        <FlexCell>
          <Ad />
        </FlexCell>
        <FlexCell>
          <Ad />
        </FlexCell>
        <FlexCell>
          <Ad />
        </FlexCell>
      </FlexColumn>
    )
  }
}

export default WallContainer
