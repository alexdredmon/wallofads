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
      return '#ff3737'  // red
    }
    if (this.state.goodGuess) {
      return '#7dbf40'  // green
    }
    return '#292929'
  }
  
  render = () => {
    const {
      ad: {
        copy,
      },
    } = this.props

    return (
      <FlexCell
        style={{
          alignItems: 'flex-start',
          backgroundColor: this.getBackgroundColor(),
          cursor: 'pointer',
          borderRadius: 10,
          margin: 7,
          padding: 5,
          paddingLeft: 15,
          paddingRight: 15,
        }}
        onClick={this.handleSelectAd}
      >
        <View>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Open Sans',
              fontWeight: 300,
              fontSize: 18,
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
    incorrectGuess: ad => dispatch(incorrectGuess(ad)),
  }),
)(Ad)
