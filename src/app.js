import 'whatwg-fetch'
import './vendors/theme.js'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Header, Home, SinglePage, SinglePost, NotFound } from './containers'
import { Footer } from './components'
import reducers from './reducers'
import actions from './actions'

const history = createHistory()
const store = createStore(
  combineReducers({ ...reducers, router: routerReducer }),
  applyMiddleware(thunkMiddleware, routerMiddleware(history))
)

history.listen((location, action) => {
  window.scrollTo(0, 0)
  window.ga && window.ga('send', 'pageview', location.pathname)
})

class App extends Component {

  constructor(props) {
    super(props)
    this.setUpLoaderDispatcher()
  }

  setUpLoaderDispatcher() {
    let origOpen = XMLHttpRequest.prototype.open

    XMLHttpRequest.prototype.open = function() {
      store.dispatch(actions.loader.increment())
      this.addEventListener('load', () => {
        store.dispatch(actions.loader.decrement())
      })
      origOpen.apply(this, arguments)
    }
  }

  render(){
    return(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Header />
            <Switch>
              <Route exact path={'/'} component={Home} />
              <Route path={'/pages/:slug/:id'} component={SinglePage} />
              <Route path={'/posts/:slug/:id'} component={SinglePost} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'))
