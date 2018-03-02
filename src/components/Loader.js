import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Progress } from 'reactstrap'

const styles = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left:0,
  right:0,
  zIndex: 99999,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
}

export default class Loader extends Component {
  render() {
    return (
      <div style={{height: 300}}>
        <div style={styles}>
          <div style={{height: 10, width: 200}}>
            <Progress animated color='danger' bar value={100} />
          </div>
        </div>
      </div>
    )
  }
}
