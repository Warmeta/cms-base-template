import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { CookiesBanner } from '../components'

export default class extends Component {
  static propTypes = {
    settings: PropTypes.object.isRequired,
    pages: PropTypes.object.isRequired,
    isFetching: PropTypes.bool,
    onLinkClick: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleOnLinkClick = (page = null) => {
    this.props.onLinkClick(page)
  }

  render() {
    if(this.props.isFetching || this.props.settings.settings == null) {
      return null
    }
    return (
      <header>
        header
      </header>
    )
  }
}
