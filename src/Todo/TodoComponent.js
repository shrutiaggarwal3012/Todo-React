import React, {Component} from 'react';
import './Todo.css';
import TodoListItem from './TodoListItem';
import todoData from './../TODO_DATA.json'

class TodoComponent extends Component {
	render() {
		const todoItemsVM = todoData.map((todoItem) => 
				<TodoListItem key={todoItem.id} title={todoItem.name} description={todoItem.description}/>
			);
		console.log(todoItemsVM);
		return (
			<ul className="Todo-component">
				<h1>My Todo List</h1>
				{todoItemsVM}
			</ul>
		)
	}
}

export default TodoComponent;