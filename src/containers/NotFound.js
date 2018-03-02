import React from 'react'
import { connect } from 'react-redux'

export default connect((state) => ({
  pages: state.pages
}))((props) => (
  <div>
    <h2>Not found</h2>
    <pre>Notfound</pre>
  </div>
))
