const initialState = {
  settings: null,
  isFetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SETTINGS':
      return {...state, settings: action.settings }
    case 'CLEAR_SETTINGS':
      return {...state, list: []}
    case 'SET_SETTINGS_FETCHING':
      return { ...state, isFetching: action.isFetching }
    default:
      return state
  }
}
