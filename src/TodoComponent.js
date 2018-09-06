import React, { Component } from 'react';

class TodoComponent extends Component {
  render() {
    return (
        <div>
            <h1>Using ES6 Classes with props</h1>
            <div>
                <p><strong>Cheese name: </strong> {this.props.cheese.name}</p>
                <p><strong>Cheese smell factor: </strong> {this.props.cheese.smellFactor}</p>
                <p><strong>Cheese price: </strong>£{this.props.cheese.price}</p>
            </div>
        </div>
    );
  }
}

export default TodoComponent;
