import { createStore } from 'redux'
import posts from '../../src/reducers/posts'

describe('Posts reducer', () => {
  let postsReducer

  beforeEach(() => {
    postsReducer = createStore(posts)
  })

  it('should have an initialState', () => {
    const initialState = { 
      current: null,
      list: [],
      page: 1,
      perPage: 8
    }

    expect(postsReducer.getState()).toMatchObject(initialState)
  })

  it('should set the posts', () => {
    const posts = [
      { id: 1, title: 'Post 1 Title', content: 'Post 1 Content' },
      { id: 2, title: 'Post 2 Title', content: 'Post 2 Content' }
    ]

    postsReducer.dispatch({ type: 'SET_POSTS', posts })
    expect(postsReducer.getState().list).toEqual(posts)
  })

  it('should clear the posts', () => {
    const posts = [
      { id: 1, title: 'Post 1 Title', content: 'Post 1 Content' },
      { id: 2, title: 'Post 2 Title', content: 'Post 2 Content' }
    ]
  
    postsReducer.dispatch({ type: 'SET_POSTS', posts })
    expect(postsReducer.getState().list).toEqual(posts)
    postsReducer.dispatch({ type: 'CLEAR_POSTS' })
    expect(postsReducer.getState().list).toEqual([])
  })

  it('should set the current post', () => {
    const current = { id: 1, title: 'Current Post', content: 'Current Post Content' }
    postsReducer.dispatch({ type: 'SET_CURRENT_POST', current })
    expect(postsReducer.getState().current).toEqual(current)
  })

  it('should clear the current post', () => {
    const current = { id: 1, title: 'Current Post', content: 'Current Post Content' }
    postsReducer.dispatch({ type: 'SET_CURRENT_POST', current })
    expect(postsReducer.getState().current).toEqual(current)
    postsReducer.dispatch({ type: 'CLEAR_CURRENT_POST' })
    expect(postsReducer.getState().current).toEqual(null)
  })

  it('should increment page', () => {
    postsReducer.dispatch({ type: 'SET_POSTS_NEXT_PAGE' })
    expect(postsReducer.getState().page).toEqual(2)
  })

  it('should decrement page', () => {
    postsReducer.dispatch({ type: 'SET_POSTS_NEXT_PAGE' })
    expect(postsReducer.getState().page).toEqual(2)
    postsReducer.dispatch({ type: 'SET_POSTS_PREV_PAGE' })
    expect(postsReducer.getState().page).toEqual(1)
  })

  it('should not decrement page if page is = 1', () => {
    postsReducer.dispatch({ type: 'SET_POSTS_PREV_PAGE' })
    expect(postsReducer.getState().page).toEqual(1)
  })
})
