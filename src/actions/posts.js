import { push } from 'react-router-redux'
import actions from '../actions'

const baseUrl = 'http://lafuerzadelcorazon.cms.coduxe.com'

export function setCurrent(posts) {
  return (dispatch) => {
    const route = posts ? `/posts/${posts.slug}/${posts.id}` : `/`
    dispatch({ type: 'SET_CURRENT_POST', current: posts })
    dispatch(push(route))
  }
}

export function setFetching(isFetching = true) {
  return {
    type: 'SET_POSTS_FETCHING',
    isFetching
  }
}

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(actions.posts.setFetching(true))
    fetch(`${baseUrl}/wp-json/wp/v2/posts/${id}?_embed`)
      .then((response) => response.json())
      .then((posts) => {
        dispatch(actions.posts.setCurrent(posts))
        dispatch(actions.posts.setFetching(false))
      }
  )}
}

export function fetchAll() {
  return (dispatch) => {
    dispatch(actions.posts.setFetching(true))
    fetch(`${baseUrl}/wp-json/wp/v2/posts?_embed&per_page=12`)
      .then((response) => response.json())
      .then((posts) => {
        dispatch(actions.posts.setAll(posts))
        dispatch(actions.posts.setFetching(false))
      }).catch((error) => {
        dispatch(actions.posts.setFetching(false))
        console.log(error)
    })
  }
}

export function setAll(posts) {
  return {
    type: 'SET_POSTS',
    posts
  }
}

export function clearAll() {
  return {
    type: 'CLEAR_POSTS',
    list: []
  }
}

export function setNextPage() {
  return {
    type: 'SET_POSTS_NEXT_PAGE',
    list: []
  }
}

export function setPrevPage() {
  return {
    type: 'SET_POSTS_PREV_PAGE',
    list: []
  }
}
