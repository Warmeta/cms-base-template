import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import { Header as HeaderComponent } from '../components'

class Header extends Component {

  componentWillMount() {
    this.props.dispatch(actions.settings.fetchAll())
  }

  render(){
    return (
      <HeaderComponent
        settings={this.props.settings}
        onLinkClick={(page) => this.props.dispatch(actions.pages.setCurrent(page))}
      />
    )
  }
}

export default connect((state) => ({
  pages: state.pages,
  settings: state.settings
}))(Header)
