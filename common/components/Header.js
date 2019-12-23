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
      score,
      time,
    } = this.props

    return (
      <View
        {...this.props}
        style={{
          ...this.props.style,
        }}
      >
        <FlexRow>
          <FlexCell>
            <Text
              style={{
                color: '#f71b7d',
                fontSize: 40,
                fontWeight: 'bold',
              }}
            >
              WALL OF ADS
            </Text>
          </FlexCell>
        </FlexRow>
        <FlexRow>
          <FlexCell
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'row',
              marginLeft: 15,
            }}
          >
            <Text
              style={{
                color: '#727272',
                fontSize: 20,
                marginRight: 5,
                textTransform: 'uppercase',
              }}
            >
              Time:
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                marginRight: 5,
              }}
            >
              {time || 0}
            </Text>
          </FlexCell>
          <FlexCell
            style={{
              justifyContent: 'flex-end',
              flexDirection: 'row',
              marginRight: 15,
            }}
          >
            <Text
              style={{
                color: '#727272',
                fontSize: 20,
                marginLeft: 5,
                textTransform: 'uppercase',
              }}
            >
              Score:
            </Text>
            <Text
              style={{
                color: '#7dbf40',
                fontSize: 20,
                marginLeft: 5,
              }}
            >
              {score ? commaFormat(score) : 0}
            </Text>
          </FlexCell>
        </FlexRow>
      </View>
    )
  }
}


export default connect(
  (state, props) => ({
    score: getIn(state, 'game.score'),
    time: getIn(state, 'game.time'),
  }),
  (dispatch, props) => ({}),
)(Header)
