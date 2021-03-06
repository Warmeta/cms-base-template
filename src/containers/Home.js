import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Home as HomeComponent } from '../components'
import actions from '../actions'

class Home extends Component {
  componentWillMount() {
    this.props.dispatch(actions.posts.fetchAll())
  }

  render() {
    return(
      <HomeComponent
        posts={this.props.posts.list}
        isFetching={this.props.posts.isFetching}
        onPostClick={(post) => this.props.dispatch(actions.posts.setCurrent(post))}
      />
    )
  }
}

export default connect((state) => ({
  posts: state.posts
}))(Home)
