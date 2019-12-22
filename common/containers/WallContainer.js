import React from 'react'

import FlexCell from 'lib/components/layout/FlexCell'
import FlexColumn from 'lib/components/layout/FlexColumn'

import Ad from 'common/components/Ad'

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
