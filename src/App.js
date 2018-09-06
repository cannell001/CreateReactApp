import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <div>
            <h1>Using ES6 Classes with props</h1>
            <p>{this.props.msg}</p>
        </div>
    );
  }
}

export default App;
