import React, { Component } from 'react';

class TodoComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: ['walk the dog', 'drink tea', 'wash the dishes', 'cut the cheese', 'take a nap']
		};
	}
	//getInitialState
	render(){
		var todos = this.state.todos;
		todos = todos.map(function(item, index){
			return(
					<li>{item}</li>
			);
		});
		return(
			<div id="todo-list">
				<h2>State 2 w/ JSX</h2>
				<p>React stuff goes here...</p>
				<ul>{todos}</ul>
			</div>
		);
	} //render
}

export default TodoComponent;
