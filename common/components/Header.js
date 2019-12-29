import React from 'react'
import { connect } from 'react-redux'

import { commaFormat } from 'common/lib/core/util/number'
import { getIn } from 'common/lib/core/util/iterable'

import FlexCell from 'lib/components/layout/FlexCell'
import FlexRow from 'lib/components/layout/FlexRow'
import Image from 'lib/components/layout/Image'
import Text from 'lib/components/layout/Text'
import View from 'lib/components/layout/View'

const styles = {
  label: {
    color: '#727272',
    fontFamily: 'Open Sans Condensed',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  value: {
    color: '#fff',
    fontFamily: 'Open Sans Condensed',
    fontSize: 20,
  },
}

class Header extends React.Component {
  render = () => {
    const {
      score,
      time,
    } = this.props

    return (
      <View {...this.props}>
        <FlexRow
          style={{
            height: 50,
          }}
        >
          <FlexCell>
            <Image
              alt="WALL OF ADS"
              srcMobile={require('../assets/img/header.png')}
              srcWeb="header.png"
              style={{
                height: 50,
                margin: 0,
              }}
            />
          </FlexCell>
        </FlexRow>
        <FlexRow
          style={{
            height: 50,
            paddingTop: 15,
          }}
        >
          <FlexCell
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'row',
              marginLeft: 15,
            }}
          >
            <Text
              style={{
                ...styles.label,
                marginRight: 5,
              }}
            >
              Time:
            </Text>
            <Text
              style={{
                ...styles.value,
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
                ...styles.label,
                marginLeft: 5,
              }}
            >
              Score:
            </Text>
            <Text
              style={{
                ...styles.value,
                color: '#7dbf40',
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
