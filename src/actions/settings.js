import { push } from 'react-router-redux'
import actions from '../actions'

const baseUrl = 'http://lafuerzadelcorazon.cms.coduxe.com'

export function fetchAll() {
  return (dispatch) => {
    dispatch(actions.settings.setFetching(true))
    fetch(`${baseUrl}/wp-json/wp/v2/settings`)
      .then((response) => response.json())
      .then((settings) => {
        dispatch(actions.settings.setSettings(settings))
        dispatch(actions.settings.setFetching(false))
      }).catch((error) => {
        dispatch(actions.settings.setFetching(false))
        console.log(error)
    })
  }
}

export function setFetching(isFetching = true) {
  return {
    type: 'SET_SETTINGS_FETCHING',
    isFetching
  }
}

export function setSettings(settings) {
  return {
    type: 'SET_SETTINGS',
    settings
  }
}

export function clearSettings() {
  return {
    type: 'CLEAR_SETTINGS',
    list: []
  }
}
