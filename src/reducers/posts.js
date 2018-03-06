const initialState = {
  current: null,
  list: [],
  isFetching: false,
  page: 1,
  perPage: 8
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {...state, list: [...action.posts] }
    case 'SET_CURRENT_POST':
      return {...state, current: action.current}
    case 'CLEAR_POSTS':
      return {...state, list: [], page: 1, perPage: 8}
    case 'SET_POSTS_FETCHING':
      return { ...state, isFetching: action.isFetching }
    case 'CLEAR_CURRENT_POST':
      return {...state, current: null}
    default:
      return state
  }
}
