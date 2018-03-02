import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SinglePage as SinglePageComponent } from '../components'
import actions from '../actions'

class SinglePage extends Component {
  componentWillMount() {
    let pageId = this.props.match.params.id
    if(this.props.pages.list.length === 0) {
      this.props.dispatch(actions.pages.fetchAll())
    }
    if(!this.props.pages.current) {
      this.props.dispatch(actions.pages.fetchPage(pageId))
    }
  }

  render() {
    if(!this.props.pages.current){
      return null
    }
    return(
      <SinglePageComponent {...this.props.pages.current} />
    )
  }
}

export default connect((state) => ({
  pages: state.pages
}))(SinglePage)
