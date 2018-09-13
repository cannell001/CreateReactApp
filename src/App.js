import React, {Component} from 'react';

class App extends Component {
    state = {
      name: 'Ryu',
      age: 30
    }
    handleMouseOver = e => console.log(e.target, e.pageX);

    handleClick = () => {
      this.setState({
        name: 'Yoshi'
      });
    }
    
    handleCopy = e => console.log('Try being original for once');

    render() {
        return(
          <div className="app-content">
            <h1>Hello, ninjas!</h1>
            <p>My name is: { this.state.name } and I am { this.state.age }</p>
            <button onClick={this.handleClick}>Click me</button>
            <button onMouseOver={this.handleMouseOver}>Hover me</button>
            <p onCopy={this.handleCopy}>What we think, we become</p>
          </div>
        )
    }
}

export default App;
