// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends Component<{items: []}, {}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul className="App-intro">
          {this.props.items.map(i => <li>{i}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: []) => ({
  items: state,
})

export default withRouter(connect(mapStateToProps)(App));
