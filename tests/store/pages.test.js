import { createStore } from 'redux'
import pages from '../../src/reducers/pages'

describe('Page reducer', () => {
  let pagesReducer

  beforeEach(() => {
    pagesReducer = createStore(pages)
  })

  it('should have an initialState', () => {
    const initialState = { 
      current: null,
      list: [],
      page: 1,
      perPage: 8
    }

    expect(pagesReducer.getState()).toMatchObject(initialState)
  })

  it('should set the pages', () => {
    const pages = [
      { id: 1, title: 'Page 1 Title', content: 'Page 1 Content' },
      { id: 2, title: 'Page 2 Title', content: 'Page 2 Content' }
    ]

    pagesReducer.dispatch({ type: 'SET_PAGES', pages })
    expect(pagesReducer.getState().list).toEqual(pages)
  })

  it('should clear the pages', () => {
    const pages = [
      { id: 1, title: 'Page 1 Title', content: 'Page 1 Content' },
      { id: 2, title: 'Page 2 Title', content: 'Page 2 Content' }
    ]
  
    pagesReducer.dispatch({ type: 'SET_PAGES', pages })
    expect(pagesReducer.getState().list).toEqual(pages)
    pagesReducer.dispatch({ type: 'CLEAR_PAGES' })
    expect(pagesReducer.getState().list).toEqual([])
  })

  it('should set the current page', () => {
    const current = { id: 1, title: 'Current Page', content: 'Current Page Content' }
    pagesReducer.dispatch({ type: 'SET_CURRENT_PAGE', current })
    expect(pagesReducer.getState().current).toEqual(current)
  })

  it('should clear the current page', () => {
    const current = { id: 1, title: 'Current Page', content: 'Current Page Content' }
    pagesReducer.dispatch({ type: 'SET_CURRENT_PAGE', current })
    expect(pagesReducer.getState().current).toEqual(current)
    pagesReducer.dispatch({ type: 'CLEAR_CURRENT_PAGE' })
    expect(pagesReducer.getState().current).toEqual(null)
  })

  it('should increment page', () => {
    pagesReducer.dispatch({ type: 'SET_PAGES_NEXT_PAGE' })
    expect(pagesReducer.getState().page).toEqual(2)
  })

  it('should decrement page', () => {
    pagesReducer.dispatch({ type: 'SET_PAGES_NEXT_PAGE' })
    expect(pagesReducer.getState().page).toEqual(2)
    pagesReducer.dispatch({ type: 'SET_PAGES_PREV_PAGE' })
    expect(pagesReducer.getState().page).toEqual(1)
  })

  it('should not decrement page if page is = 1', () => {
    pagesReducer.dispatch({ type: 'SET_PAGES_PREV_PAGE' })
    expect(pagesReducer.getState().page).toEqual(1)
  })
})
