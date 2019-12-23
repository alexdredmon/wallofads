import React from 'react'
import { connect } from 'react-redux'

import FlexCell from 'lib/components/layout/FlexCell'
import Text from  'lib/components/layout/Text'
import View from  'lib/components/layout/View'

import { correctGuess, incorrectGuess } from 'common/actions/game'


class Ad extends React.Component {
  state = {
    badGuess: false,
    goodGuess: false,
  }


  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (prevProps.ad !== this.props.ad) {
      this.setState({
        badGuess: false,
        goodGuess: false,
      })
    }
  }

  handleSelectAd = () => {
    const {
      ad: {
        fake
      },
      correctGuess,
      incorrectGuess,
      handleDealAds,
    } = this.props

    if (fake) {
      correctGuess()
      this.setState({
        goodGuess: true
      })
      setTimeout(handleDealAds, 500)
    } else {
      incorrectGuess()
      this.setState({
        badGuess: true
      })
    }
  }

  getBackgroundColor = () => {
    if (this.state.badGuess) {
      return '#9b0000'  // red
    }
    if (this.state.goodGuess) {
      return '#237a0b'  // green
    }
  }
  
  render = () => {
    const {
      ad: {
        copy,
      },
    } = this.props
    const {
      badGuess,
      goodGuess
    } = this.state

    return (
      <FlexCell
        style={{
          alignItems: 'flex-start',
          backgroundColor: this.getBackgroundColor(),
          borderRadius: 15,
          marginTop: 5,
          padding: 5,
        }}
      >
        <View
          onClick={this.handleSelectAd}
        >
          <Text
            style={{
              cursor: 'pointer',
              color: (badGuess || goodGuess) ? '#ffffff' : '#0000ff',
              fontSize: 18,
              textDecoration: (badGuess || goodGuess) ? undefined : 'underline',
            }}
          >
            {copy}
          </Text>
        </View>
      </FlexCell>
    )
  }
}

export default connect(
  (state, props) => ({}),
  (dispatch, props) => ({
    correctGuess: ad => dispatch(correctGuess(ad)),
    incorrectGuess: ad => dispatch(incorrectGuess(ad))
  }),
)(Ad)
