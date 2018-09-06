import React, { Component } from 'react';

class TodoComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
            todos: ['drink tea', 'put out garbage', 'walk the dog', 'get a coffee', 'wash the dishes', 'eat the cheese', 'take a nap']
        };
    }
    //getInitialState
    render(){
		var todos = this.state.todos;
        todos = todos.map((item, index) => {
				return(<TodoItem key={index} item={item}/>);
		});

		return(
            <div id="todo-list">
				<h2>Separate TodoItem Component w/ JSX</h2>
                <p>Output the TodoItems...</p>
				<ul>{todos}</ul>
            </div>
        );
    } //render
}

//Create TodoItem component
class TodoItem extends Component {
	render(){
		return(
			<li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                </div>
            </li>
		);
	}
}

export default TodoComponent;
