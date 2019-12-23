import React from 'react'
import { connect } from 'react-redux'

import { commaFormat } from 'common/lib/core/util/number'
import { getIn } from 'common/lib/core/util/iterable'

import FlexCell from 'lib/components/layout/FlexCell'
import FlexRow from 'lib/components/layout/FlexRow'
import Text from 'lib/components/layout/Text'
import View from 'lib/components/layout/View'


class Header extends React.Component {
  render = () => {
    const {
      score
    } = this.props

    return (
      <View
        {...this.props}
        style={{
          ...this.props.style,
          cursor: 'pointer',
        }}
      >
        <FlexRow>
          <FlexCell
            style={{alignItems: 'flex-start'}}
          >
            <Text
              style={{
                fontSize: 40
              }}
            >
              Wall of Ads
            </Text>
          </FlexCell>
          <FlexCell
            style={{alignItems: 'flex-end'}}
          >
            <Text>
              Score: {score ? commaFormat(score) : 0}
            </Text>
          </FlexCell>
        </FlexRow>
        <View>
          <Text
            style={{
              fontSize: 20
            }}
          >
            Can you spot the fake?
          </Text>
        </View>
      </View>
    )
  }
}


export default connect(
  (state, props) => ({
    score: getIn(state, 'game.score'),
  }),
  (dispatch, props) => ({}),
)(Header)
