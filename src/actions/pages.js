import { push } from 'react-router-redux'
import actions from '../actions'

export function setCurrent(page) {
  return (dispatch) => {
    const route = page ? `/pages/${page.slug}/${page.id}` : '/'
    dispatch({ type: 'SET_CURRENT_PAGE', current: page })
    dispatch(push(route))
  }
}

export function setFetching(isFetching = true) {
  return {
    type: 'SET_PAGES_FETCHING',
    isFetching
  }
}

export function fetchAll() {
  return (dispatch) => {
    dispatch(actions.pages.setFetching(true))
    fetch('http://lafuerzadelcorazon.cms.coduxe.com/wp-json/wp/v2/pages?_embed&per_page=12')
      .then((response) => response.json())
      .then((pages) => {
        dispatch(actions.pages.setAll(pages))
        dispatch(actions.pages.setFetching(false))
      }).catch((error) => {
        dispatch(actions.pages.setFetching(false))
        console.log(error)
    })
  }
}

export function fetchPage(id){
  return (dispatch) => {
    dispatch(actions.pages.setFetching(true))
    fetch(`http://lafuerzadelcorazon.cms.coduxe.com/wp-json/wp/v2/pages/${id}?_embed`)
      .then((response) => response.json())
      .then((page) => {
        dispatch(actions.pages.setCurrent(page))
        dispatch(actions.pages.setFetching(false))
      }).catch((error) => {
        dispatch(actions.pages.setFetching(false))
        console.log(error)
      })
  }
}

export function setAll(pages) {
  return {
    type: 'SET_PAGES',
    pages
  }
}
