const initialState = {
  current: null,
  list: [],
  isFetching: false,
  page: 1,
  perPage: 8
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PAGES':
      return {...state, list: [...action.pages]}
    case 'SET_CURRENT_PAGE':
      return {...state, current: action.current}
    case 'CLEAR_PAGES':
      return {...state, list: [], page: 1, perPage: 8}
    case 'CLEAR_CURRENT_PAGE':
      return {...state, current: null}
    case 'SET_PAGES_FETCHING':
      return { ...state, isFetching: action.isFetching }
    default:
      return state
  }
}
