import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SinglePost as SinglePostComponent } from '../components'
import actions from '../actions'

class SinglePost extends Component {
  componentWillMount() {
    let postId = this.props.match.params.id
    if(this.props.posts.list.length === 0) {
      this.props.dispatch(actions.posts.fetchAll())
    }
    if(!this.props.posts.current) {
      this.props.dispatch(actions.posts.fetchPost(postId))
    }
  }

  render() {
    if(!this.props.posts.current){
      return null
    }
    return(
      <SinglePostComponent {...this.props.posts.current} />
    )
  }
}

export default connect((state) => ({
  posts: state.posts
}))(SinglePost)
