import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header, Slider, NewsBlock, Footer } from '../components'

export default class extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool,
    onPostClick: PropTypes.func,
  }

  render() {
    if(this.props.isFetching || this.props.posts == null) {
      return null
    }
    return (
      <div>
      	Home
      </div>
    )
  }
}
